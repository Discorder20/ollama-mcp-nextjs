"use client";

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export type Message = {
    role: "model" | "user";
    content: string;
}

export type Messages ={
    messages: Message[];
}

export default function OutputChat({messages}: Messages) {
  return (
      <main className="flex-1 overflow-y-auto p-4 space-y-4 w-full shadow-lg m-4 rounded-lg">
        {/* <div className="flex items-end space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
            <p className="text-sm">Hello everyone!</p>
          </div>
        </div>
        <div className="flex items-end space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
            <p className="text-sm">How's it going?</p>
          </div>
        </div>
        <div className="flex items-end justify-end space-x-2">
          <div className="p-2 rounded-lg bg-blue-500 text-white">
            <p className="text-sm">Hello! It's going well, thanks for asking.</p>
          </div>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-end justify-end space-x-2">
          <div className="p-2 rounded-lg bg-blue-500 text-white">
            <p className="text-sm">What about you?</p>
          </div>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div> */}
        {messages.map((message, index) => (
            <div key={index} className={`flex items-end ${message.role === "user" ? "justify-end" : ""} space-x-2`}>
                {message.role === "model" && (
                    <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                )}
                <div className={`p-2 rounded-lg ${message.role === "user" ? "bg-black text-white" : "bg-gray-100 dark:bg-gray-800"}`}>
                    <p className="text-sm">{message.content}</p>
                </div>
                {message.role === "user" && (
                    <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                )}
            </div>
        ))}
      </main>
  )
}