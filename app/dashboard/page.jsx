'use client'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React, { useState } from 'react'
import EmptyState from './_components/EmptyState';
import Link from 'next/link';

const Dashboard = () => {

    const [videoList,setVideoList] = useState([]);
    return (
        <div className="">
            <div className='flex justify-between'>
                <h2 className='font-bold text-2xl text-primary'>Dashboard</h2>
                <Link href={'/dashboard/create-new'}><Button>+ Create </Button></Link>
            </div>

   {/* empty state */}
        {videoList.length==0&&<div className="">
            <EmptyState />
            </div>}
        </div>

    )
}

export default Dashboard