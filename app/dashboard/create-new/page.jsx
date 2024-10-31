'use client'
import React from 'react'
import SelectTopic from './_components/SelectTopic'
import { useState } from 'react'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import CustomLoading from './_components/CustomLoading'
import uuid4 from "uuid4";

const scriptData = 'The year is 1888, Whitechapel. A chilling mist hangs over the city... Mary Kelly felt a shadow fall over her, a chilling premonition... As she hurried through the alley, a terrifying figure emerged from the darkness... A scream echoed through the night, followed by a chilling silence... Inspector Abberline arrived at the gruesome scene... The killer vanished into the night... Fear gripped the city as the murders continued... The mystery of Jack the Ripper remained unsolved... ...leaving a chilling legacy of fear and uncertainty. '
const FILEURL='https://firebasestorage.googleapis.com/v0/b/ai-course-52d58.appspot.com/o/ai-shorts-video%2Fee581fb3-8488-4220-88a4-17fcacc581a1.mp3?alt=media&token=98730630-4da0-4dc2-b82d-597d44b9136f'
const CreateNew = () => {
  const [formData,SetFormData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [videoScript,setVideoScript] = useState([]);
  const [audioFileUrl,setAudioFileUrl] = useState()
  const [caption,setCaption] = useState();


    const onhandleInputChange = (fieldName,fieldValue) => {
      console.log(fieldName,fieldValue)
      SetFormData(prev=>({
        ...prev,
        [fieldName]:fieldValue
      }))
    }
    
    const onClickHandler = () =>{
      // getVideoScript();
      //GenerateAudioFile(scriptData);
      GenerateAudioCaption(FILEURL);
    }
    const getVideoScript = async () => {
      setLoading(true);
      prompt = "Write a script to generate "+formData.duration+" video on topic: "+formData.topic+" Interesting historical story along with AI image prompt in "+formData.imageStyle+" for each scene and give me result in JSON format with image Prompt and Content Text as filed."
      console.log(prompt)
      const result = await axios.post('/api/get-video-script',{
        prompt:prompt
      }).then(resp =>{
        setVideoScript(resp.data.result)
        GenerateAudioFile(resp.data.result)
      });
      setLoading(false);
    }

    const GenerateAudioFile = async (videoScriptData) => {
      setLoading(true);
      let script =' ';
       const id = uuid4();
    //   if (Array.isArray(videoScriptData)) {
    //   videoScriptData.forEach(item => {
    //     script = script+item.contentText+' ';
        
    //   })
    // } else {
    //   console.error('video script data is not defined and it is not an array')
    // }

    await axios.post('/api/generate-audio',{
      text:videoScriptData,
      id:id
    }).then(resp => {
      setAudioFileUrl(resp.data.result)
    })
    setLoading(false)
    }

    const GenerateAudioCaption = async (fileUrl) => {
      setLoading(true);
      await axios.post('/api/generate-caption',{
        audioFileUrl:fileUrl
      }).then(resp=>{
        console.log(resp.data.result)
        setCaption(resp?.data?.result)
      })
      setLoading(false)

    }

  return (
    <div className='md:px-20'> 
      <h2 className='font-bold text-4xl text-primary text-center'>Create New short</h2>
      <div className="mt-10 shadow-md p-10">
        {/* topic  */}
        <SelectTopic onUserSelect={onhandleInputChange}/>

        {/* style  */}
        <SelectStyle onUserSelect={onhandleInputChange}/>

        {/* duration  */}
        <SelectDuration onUserSelect={onhandleInputChange}/>

        {/* create button  */}
        <Button className="mt-10 w-full" onClick={onClickHandler}>Create Short Video</Button>
      </div>
      <CustomLoading loding={loading} />

    </div>
  )
}

export default CreateNew