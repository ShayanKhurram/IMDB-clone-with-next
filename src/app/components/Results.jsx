import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 mx-auto py-6 max-w-6xl'>
      
        {results.map(results => (
        <Card key={results.id} result={results}/>
    ))}
    </div>
  )
}
