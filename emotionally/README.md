# Emotionally 🧠

Emotionally is a premium journaling application that leverages AI to provide deep emotional insights, mood tracking, and mental clarity through self-reflection.

## ✨ Features
- **AI-Powered Analysis**: Get instant emotional feedback on your journal entries using Gemini AI.
- **Smart Journaling**: Capture not just your thoughts, but the "ambience" and mood of the moment.
- **Deep Insights**: Track your mental well-being over time with structured analytics.
- **Premium Design**: A high-end, responsive UI built for focus and clarity.

---

Project URL: [[https://emotionally.vercel.app/](https://emotionally.vercel.app/)]

## 📂 Project Structure

```text
emotionally/
├── app/                  # Next.js App Router
│   ├── api/              # API Routes (AI Logic)
│   ├── components/       # Layout Components (Header, Body, Footer)
│   ├── userinsights/     # Analytics & AI Feedback feature
│   └── userpost/         # Journaling & Social Feed feature
├── public/               # Static Assets
└── packages.json         # Dependencies & Scripts
```

---

## 🏗️ Core Components
- **`Header`**: Responsive glassmorphism navigation.
- **`Body`**: Dynamic hero section with Call-to-Action.
- **`UserPost`**: Entry form for thoughts and environmental metadata.
- **`UserInsightCard`**: Detailed breakdown of emotional metrics.

---

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set Environment Variables**:
   Create a `.env` file with your Gemini API key:
   ```env
   GEMINI_API_KEY=your_key_here
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Visit**: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & Modern Glassmorphism
- **AI**: Google Gemini API
- **State**: React Hooks (useState, useEffect)

---

*Emotionally — Nurture Your Mind, Decode Your Emotions.*
