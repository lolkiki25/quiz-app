import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const gemini = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();

    const model = gemini.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      You are a quiz generator.
      Given the following article, generate 3 multiple-choice questions with answers.
      Title: ${title}
      Content: ${content}
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({ success: true, output: text });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: "AI failed" });
  }
}
