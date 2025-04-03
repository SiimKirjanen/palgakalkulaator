import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env["OPENAI_SECRET_KEY"],
});

export default client;
