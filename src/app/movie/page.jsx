"use client"


import React from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export  default async function movie() {
     
  
  const searchParams = useSearchParams()
 
  const search = searchParams.get('id')
  console.log(search)

  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=393be4d0d2ac40752e7498d76b476fef`)

  return (
    <div>
         {search}
    </div>
  )
}