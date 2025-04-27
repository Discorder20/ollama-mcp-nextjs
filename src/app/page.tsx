"use client";

import Image from "next/image";
import { H1, P, H4, H3, H2 } from "@/components/ui/typography";
import { Input } from "@/components/ui/input";
import { InputCard } from "@/components/elements/inputcard";
import OutputChat, { Messages } from "@/components/elements/output";
import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<Messages>({messages: []});
  const [blocked, setBlocked] = useState(false);

  const handlePrompt = (model: string, prompt: string) => {
    let newMessages = [...messages.messages];
    newMessages.push({ role: "user", content: prompt });
    setMessages({messages: newMessages});
    setBlocked(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-24">
      <H2 className=" font-bold">Example of using Ollama with MCP in Next.js Web App</H2>
      <InputCard onSubmit={handlePrompt} blocked={blocked}/>
      <OutputChat messages={messages.messages} />
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
