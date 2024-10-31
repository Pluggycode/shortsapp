/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-002",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a script to generate 30 seconds video on topic: Interesting historical story along with AI image prompt in realistic format for each scene and give me result in JSON format with image Prompt and Content Text as filed."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"A bustling medieval marketplace, vibrant colors, realistic textures, cinematic lighting, people in period clothing bartering and interacting, cobblestone streets, detailed architecture, 8k resolution\",\n    \"contentText\": \"Our story begins in 14th-century Florence, a city teeming with life and ambition.  The year is 1348...\"\n  },\n  {\n    \"imagePrompt\": \"A close-up on a worried-looking woman's face, realistic skin texture, detailed eyes showing fear and anxiety, dark circles under her eyes, historical clothing, cinematic lighting, shallow depth of field, 8k resolution\",\n    \"contentText\": \"A young woman named Isabella felt the city's pulse change.  A chilling plague, the Black Death, had arrived...\"\n  },\n  {\n    \"imagePrompt\": \"A dark, plague-ridden street scene, corpses lying in the streets, realistic depictions of death and decay, period clothing on some of the remaining living, flickering candlelight, ominous atmosphere, cinematic lighting, 8k resolution\",\n    \"contentText\": \"Death stalked the streets, claiming victims day and night. Fear gripped the city...\"\n  },\n  {\n    \"imagePrompt\": \"Isabella and a group of other survivors, huddled together in a dimly lit room, fearful expressions, candlelight, realistic textures and details in clothing and surroundings, cinematic lighting, 8k resolution\",\n    \"contentText\": \"Isabella, along with a small group of survivors, sought refuge in a hidden chamber...\"\n  },\n  {\n    \"imagePrompt\": \"A hidden chamber, dimly lit by candles, a group of people huddled together, showing hope and resilience, realistic textures, detailed historical clothing, cinematic lighting, 8k resolution\",\n    \"contentText\": \"There, amidst the terror, they found a hidden strength, a resilience born of desperation...\"\n  },\n  {\n    \"imagePrompt\": \"Isabella looking determined, holding a small vial, close-up on her face showing resolve, realistic texture, historical clothing, cinematic lighting, 8k resolution\",\n    \"contentText\": \"Isabella, a skilled herbalist, discovered a potential cure...\"\n  },\n  {\n    \"imagePrompt\": \"Isabella administering a herbal remedy to a sick person, showing care and compassion, realistic textures, historical setting, cinematic lighting, 8k resolution\",\n    \"contentText\": \"She began treating the sick, her remedies offering a glimmer of hope...\"\n  },\n  {\n    \"imagePrompt\": \"A montage of scenes showing recovery and hope, people regaining their strength, the city slowly returning to life, realistic textures, period clothing, cinematic lighting, 8k resolution\",\n    \"contentText\": \"Slowly, painstakingly, the city began to heal.  Isabella's courage saved many lives.\"\n  },\n  {\n    \"imagePrompt\": \"Isabella standing amidst a recovering city, a look of relief and accomplishment on her face, people around her expressing gratitude, realistic textures, period clothing, bright cinematic lighting, 8k resolution\",\n    \"contentText\": \"Her actions showed that even in the darkest of times, hope can prevail.\"\n  }\n]\n```\n\n**Note:** This JSON provides prompts and text suitable for a 30-second video.  The actual video creation requires using a video editing software and AI image generation tools.  You would need to generate images from the prompts using a service like Midjourney, Dall-E 2, or Stable Diffusion, then assemble them into a video, adding music and narration to match the text.  The length of each scene will need to be adjusted for timing.  Remember to adjust the complexity of the prompts depending on your AI image generator's capabilities.  Very high resolution (8k) may not be feasible or necessary for a 30-second video.  Consider using 4k or even 1080p for better processing speed.\n"},
          ],
        },
      ],
    });
  