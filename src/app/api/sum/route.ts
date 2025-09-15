import { hfc_token } from "@/lib/config";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: hfc_token,
});

export async function POST(request: NextRequest) {
  const res: { article: string } = await request.json();

  if (!res.article) {
    return NextResponse.json(
      {
        ok: false,
        message: "No text data detected for requested operation",
      },
      {
        status: 400,
      }
    );
  }
  if (res.article.length < 100) {
    return NextResponse.json(
      {
        ok: false,
        message: "Text data must be above 100 characters",
      },
      {
        status: 400,
      }
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const completion: any = await client.chat.completions.create({
    model: "openrouter/sonoma-sky-alpha",
    messages: [
      {
        role: "user",
        content: `
          **Task**: Summarize the text.
          **Input**:"${res.article}"
        `,
      },
    ],
  });

  return NextResponse.json({
    ok: true,
    data: completion.choices[0].message.content,
  });
}
