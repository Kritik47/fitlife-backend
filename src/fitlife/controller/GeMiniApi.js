import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export const GeMiniApi = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).send({ error: "Prompt is required" });
    }

    // Initialize the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Generate content based on the provided prompt
    const result = await model.generateContent(prompt);

    // Send the result back to the client
    res.send({ response: result.response.text() });
  } catch (error) {
    console.error("Error generating content:", error.message);
    res.status(500).send({ error: "Error generating content" });
  }
};
