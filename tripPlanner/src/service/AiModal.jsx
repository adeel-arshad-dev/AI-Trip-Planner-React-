// pages/api/generate.js (for Next.js)
import { GoogleGenerativeAI } from "@google/genai";

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_URL
);

export default async function handler(req, res) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const { prompt } = req.body;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ response: text });
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: "Failed to generate content." });
  }
}