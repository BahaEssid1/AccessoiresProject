import Image from "next/image";
import Hero from "./_components/Hero";
import Produit from "./_components/Produit";
import ProductItem from "./_components/ProductItem";
import ProductSection from "./_components/ProductSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <div>
        <Hero />
        <ProductSection />
      </div>
      
    </div>
  );
}
