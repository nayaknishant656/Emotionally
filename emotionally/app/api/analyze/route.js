import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req) {
    try {
        const { text, ambience } = await req.json();

        if (!text) {
            return NextResponse.json({ error: "Text is required for analysis" }, { status: 400 });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        const prompt = `
        Analyze this journal entry and provide emotional insights.
        Journal Text: "${text}"
        Ambience Context: "${ambience || 'Not specified'}"

        Provide the analysis in a clean JSON format with the following keys:
        - sentiment: (Positive/Negative/Neutral)
        - main_emotions: (Array of emotions detected)
        - intensity: (Scale 1-10)
        - brief_advice: (One line of supportive advice)
        - summary: (A 2-sentence emotional summary)
        
        Return ONLY the JSON.
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let resultText = response.text();

        // Clean up the response if it contains markdown code blocks
        resultText = resultText.replace(/```json\n?|\n?```/g, '').trim();

        const analysis = JSON.parse(resultText);

        return NextResponse.json(analysis);
    } catch (error) {
        console.error("Gemini Analysis Error:", error);
        return NextResponse.json({ error: "Failed to analyze journal with Gemini" }, { status: 500 });
    }
}
