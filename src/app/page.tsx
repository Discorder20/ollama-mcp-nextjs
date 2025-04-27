import Image from "next/image";
import { H1, P, H4, H3 } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <H3 className="text-4xl font-bold">Example of using Ollama with MCP in Next.js Web App</H3>
      <div className="flex flex-col justify-center items-center space-x-0 space-y-6 md:space-x-6 md:flex-row md:space-y-0">
        <H4>Made with</H4>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={120}
          height={24}
          priority
        />
        <Image
          src="/ollama.png"
          alt="Ollama Logo"
          width={40}
          height={40}
          priority
        />
        <Image
          src="/light.svg"
          alt="Ollama Logo"
          width={300}
          height={200}
          priority
        />
      </div>
    </main>
  );
}
