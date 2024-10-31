import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h2>please view our app once</h2>
      <Link href={'/dashboard'} ><Button>subscribe</Button></Link>
      <UserButton />
    </div>
  );
}
