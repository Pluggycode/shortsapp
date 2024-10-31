import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

const EmptyState = () => {
  return (
    <div className='flex items-center p-5 m-10 flex-col border-2 border-dotted py-24 rounded-md'>
        <h2>You dont have any short video</h2>
        <Link href={'/dashboard/create-new'}><Button>create new short</Button></Link>
    </div>
  )
}

export default EmptyState