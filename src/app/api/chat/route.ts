import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

export const runtime = 'edge';

const modelMap = {
  'gpt-4.1-mini': 'gpt-3.5-turbo',
  'gpt-4.1-nano': 'gpt-3.5-turbo',
  'gpt-4o-mini': 'gpt-3.5-turbo',
  'gpt-3.5-turbo': 'gpt-3.5-turbo'
};

export async function POST(req: Request) {
  try {
    const { messages, apiKey, systemPrompt, model } = await req.json();

    if (!apiKey) {
      return new Response('OpenAI API key is required', { status: 400 });
    }

    const openai = new OpenAI({ apiKey });

    // Add system message if provided
    const finalMessages = systemPrompt
      ? [{ role: 'system', content: systemPrompt }, ...messages]
      : messages;

    const response = await openai.chat.completions.create({
      model: modelMap[model as keyof typeof modelMap] || 'gpt-3.5-turbo',
      messages: finalMessages,
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