import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="w-full object-contain">
        <Image src={'/login.jpg'} alt='login' height={500} width={550}/>
      </div>
      <div className="flex justify-center h-screen items-center">
        <SignIn />
      </div>
    </div>
  )
}