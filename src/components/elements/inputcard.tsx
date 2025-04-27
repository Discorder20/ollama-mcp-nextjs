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
import {MODELS} from './config'

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
        <form>
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
              <Input value={prompt} onChange={(e) => {setPrompt(e.target.value)}} id="prompt" placeholder="Your message here" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button disabled={blocked} onClick={handleClick}>Send</Button>
      </CardFooter>
    </Card>
  )
}
