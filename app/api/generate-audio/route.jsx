import { storage } from "@/configs/FirebaseConfig";
import textToSpeech from "@google-cloud/text-to-speech";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { NextResponse } from "next/server";
import { Result } from "postcss";
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient({
  apiKey:process.env.NEXT_PUBLIC_GOOGLE_API_KEY
});


export async function POST(req) {
  const {text,id} = await req.json();
  const storageRef = ref(storage,'ai-shorts-video/'+id+'.mp3')
  const request = {
    input: {text: text},
    // Select the language and SSML voice gender (optional)
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    // select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file

  const audioBuffer = Buffer.from(response.audioContent,"binary");

  await uploadBytes(storageRef,audioBuffer,{contentType:'audio/mp3'})

  const downloadUrl = await getDownloadURL(storageRef);

  console.log('Audio content written to file: output.mp3')
  console.log(downloadUrl)
  return NextResponse.json({Result:downloadUrl})
}