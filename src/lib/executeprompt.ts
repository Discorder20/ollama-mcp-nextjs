"use server";

import {exec} from 'child_process';
import {promisify} from 'util';

const asyncExec = promisify(exec);

export default async function executePrompt(model: string, prompt: string) : Promise<string | null> {
  const { stdout, stderr } = await asyncExec(`mcp-cli cmd --server main --provider ollama --model ${model} --prompt "${prompt}"`);

    if (stderr && !stderr.includes("'stty' is not recognized")) {
        console.error(`Error: ${stderr}`);
        return null;
      }

    return String(stdout);
}