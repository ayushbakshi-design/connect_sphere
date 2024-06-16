import React, { useContext } from 'react'
import { testingContext } from '@/app/page'


const Test = () => {

    const showText = useContext(testingContext)

  return (
    <h1>{showText}</h1>
  )
}

export default Test