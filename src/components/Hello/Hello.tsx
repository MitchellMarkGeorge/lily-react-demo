import React, { useEffect } from 'react'

interface Props {
  name: "Lily" | "Mitchell"
  func: () => void
}

export default function Hello(props: Props) {
    useEffect(() => {
        console.log(`props.name has changed`)
    }, [props.name])
  return (
    <h1 onClick={props.func}>Hello {props.name}</h1>
  )
}
