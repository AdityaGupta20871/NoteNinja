import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'
import { ArrowLeft } from "lucide-react";
import { UserButton } from '@clerk/nextjs';

type Props = {}

const page = (props: Props) => {
  return (
    <div className='min-h-screen '>
        <div className='max-w-7xl mx-auto p-10 '>
            <div className='h-14'></div>
                <div className='flex justify-between items-center md:flex-row flex-col'>
                    <div className='flex justify-center items-center'>
                        <Link href='/'>
                            <Button className='bg-green-600'>
                                <ArrowLeft className='mr-1 w-4' />
                                Back</Button>
                        </Link>
                        <div className='w-4'></div>
                        <h1 className='text-3xl font-bold text-gray-900'>My notes</h1>
                        <hr />
                        <UserButton />
                    </div>
            </div>
            <Separator />
        </div>
    </div>
  )
}

export default page