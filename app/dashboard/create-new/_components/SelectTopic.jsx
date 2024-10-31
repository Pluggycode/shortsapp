'use client'
import React, { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


const SelectTopic = ({onUserSelect}) => {

    const options = ['Custom Prompt','Random Ai Story','Scary Story','Historical Facts','Bed Time Story','Motivational'];
    const [selectedOption,setSelectedOption] = useState();
    return (
        <div>
            <h2 className='font-bold text-2xl text-primary'>Content</h2>
            <p>what is the topic of your video</p>
            <Select onValueChange={(value) =>{
                setSelectedOption(value)
                value != 'Custom Prompt' && onUserSelect('topic',value)
                }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="select content type " />
                </SelectTrigger>
                <SelectContent>
                    {options.map((item,index)=>(
                        <SelectItem value={item}>{item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {selectedOption=='Custom Prompt'&&
                <Textarea className='mt-3' onChange={(e) => onUserSelect('topic',e.target.value)}
                placeholder='write a prompt on which content you want to generate short'/>
            }

        </div>
    )
}

export default SelectTopic