import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

export const runtime = 'edge';

const modelMap = {
  'GPT-3.5 Turbo': 'gpt-3.5-turbo',
  'GPT-4': 'gpt-4',
  'GPT-3.5 Turbo 16K': 'gpt-3.5-turbo-16k',
  'GPT-4 32K': 'gpt-4-32k'
};

export async function POST(req: Request) {
  try {
    const { messages, model } = await req.json();

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await openai.chat.completions.create({
      model: modelMap[model as keyof typeof modelMap] || 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      stream: true,
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.error('[CHAT ERROR]', error);
    return new Response(error?.message || 'Internal Server Error', { status: 500 });
  }
} 