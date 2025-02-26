import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "careerpAilot", // Unique app ID
  name: "careerpAilot",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});