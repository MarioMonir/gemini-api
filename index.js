require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { descriptionPrompt } = require("./src/prompts/description.prompt");
const API_KEY = process.env.API_KEY;

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const description =
    "Stunning female f4 pomsky puppy for sale she has 1 blue eye and 1 blue/amber eye she is  micro size very small she is microchipped fully vaccinated health checked by a vet and she has been treated for worms and fleas she is ready to leave the 20th December mother and father can both be seen mother is an f3b import from Russia and father is an f3 pomsky I bred myself  £1500 any questions feel free to message me or phone me ";

  const prompt = descriptionPrompt + description;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
