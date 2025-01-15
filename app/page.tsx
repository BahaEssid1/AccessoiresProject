import Image from "next/image";
import Hero from "./_components/Hero";
import Produit from "./_components/Produit";
import ProductItem from "./_components/productItem";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div>
        <Hero />
      </div>
      <div className="container mx-auto p-4"> {/* Added container and padding */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid for responsive layout */}
          <ProductItem />  <ProductItem />  <ProductItem />
          <ProductItem />  <ProductItem />  <ProductItem />   {/* This will now have a controlled size */}
        </div>
      </div>
    </div>
  );
}
