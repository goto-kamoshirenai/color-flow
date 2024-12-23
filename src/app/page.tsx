import FromOneColorPallet from "@/components/feature/fromOneColor/FromOneColorPallet";
import Image from "next/image";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Image src="/big-logo.svg" alt="Color Flow" width={100} height={100} />
      <FromOneColorPallet />
    </div>
  );
}

export default Home;