import Image from "next/image";
import { Inter } from "next/font/google";
import HeroImg from "../assets/S1.jpg";
import HeroMiddleSection from "@/components/hero-middle-section";
import Categories from "@/components/categories";
import NewComes from "@/components/new-comes";
import Contact from "@/components/contact-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-0 md:px-5 flex flex-col gap-10 w-full h-full">
      <div className="w-full h-full max-h-[500px] relative">
        <Image
          src={HeroImg} 
          alt="gero-img"
          className="h-full sm:min-h-[600px] md:max-h-[700px] object-cover"
        />
        <HeroMiddleSection />
      </div>
        <Categories />
        <NewComes />
    </main>
  );
}
