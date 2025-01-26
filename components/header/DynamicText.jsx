import { ArrowBigRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const DynamicText = ({subText , linkText}) => {
  return (
    <div className='flex justify-between items-center my-5'>
        <p className='uppercase font-bold'>{subText}</p>
        <Link href={linkText} className='uppercase flex gap-2'>see more <ArrowBigRight></ArrowBigRight></Link>
    </div>
  )
}

export default DynamicText