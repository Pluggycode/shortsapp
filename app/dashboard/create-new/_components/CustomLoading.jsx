import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from "next/image"
import React from 'react'

function CustomLoading({loding}) {
  return (
    <AlertDialog open={loding}>
  <AlertDialogContent className="bg-white">
    <div className="flex flex-col items-center justify-center mt-10">
        <Image src={'/progress.gif'} width={100} height={100} alt="loading"/>
        <h2>Generating your video.. don't refresh..</h2>
    </div>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default CustomLoading  