import Image from "next/image";
import Header from "./components/header/page";
import Body from "./components/body/page";
import Footer from "./components/footer/page";
export default function Home() {
  return (
    <div>
      <Body />
      <Footer />
    </div>
  );
}
