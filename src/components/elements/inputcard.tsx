"use client";
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {MODELS, PROMPTS} from './config'

export function InputCard({onSubmit, blocked}: {onSubmit: (model: string, prompt: string) => void, blocked: boolean}) {
    const [model, setModel] = React.useState(MODELS[0]);
    const [prompt, setPrompt] = React.useState("");

    const handleClick = () => {
        if (model && prompt) {
            onSubmit(model, prompt);
        } else {
            alert("Please select a model and enter a prompt.");
        }
    }

  return (
    <Card className="md:w-full my-3">
      <CardHeader>
        <CardTitle>Input</CardTitle>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="model">Model</Label>
              <Select onValueChange={setModel} defaultValue={model}>
                <SelectTrigger id="model" className="w-56">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                    {MODELS.map((model) => (
                      <SelectItem key={model} value={model}>{model}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="prompt">Prompt</Label>
              <Input defaultValue={prompt} onChange={(e) => {setPrompt(e.target.value)}} id="prompt" placeholder="Your message here" autoComplete="off" />
            </div>
          </div>
          <div className="flex flex-row space-x-3 mt-3 justify-center">
            {PROMPTS.map((promptName) => {
              return (
                <Card onClick={() => {setPrompt(promptName)}} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-0 flex justify-center items-center"><p className="h-full p-3">{promptName}</p></CardContent>
                </Card>
              )
            })}
          </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button disabled={blocked} onClick={handleClick}>Send</Button>
      </CardFooter>
    </Card>
  )
}
