import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages, apiKey, systemPrompt } = await req.json();

    if (!apiKey) {
      return new Response('OpenAI API key is required', { status: 400 });
    }

    const openai = new OpenAI({ apiKey });

    // Add system message if provided
    const finalMessages = systemPrompt
      ? [{ role: 'system', content: systemPrompt }, ...messages]
      : messages;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
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