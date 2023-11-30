import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 "></div>
      <h1 className="font-semibold text-7xl text-center ">
        AI <span className="text-green-600 font-bold "> Note Taking </span>{" "}
        Assistant
      </h1>
      <br />
      <h2 className="text-green text-3xl text-center text-slate-300 "></h2>
      <br />
      <div className="flex justify-center">
        <Link href="/dashboard">
          <Button className="bg-green-600">Get started 
          <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
            </Button>
        </Link>
      </div>
    </div>
  );
}
