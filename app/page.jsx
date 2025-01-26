import HomeProduct from "@/components/home/HomeProduct";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image
        src="/banner-image-1.jpg"
        alt="Banner-brand image"
        width={2000}
        height={600}
      />
      <HomeProduct></HomeProduct>
    </div>
  );
}
