"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

const jeu = () => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        setNumber(number + 1)
    }

    const decrement = () => {
        setNumber(number - 1)
    }

    useEffect(() => {
        return () => {
            console.log('Le composant est démonté')
        }
    }, []) //Tableau de dépendance 

    return (
        <>
        <Link href="/cv">CV</Link>
        <div>{number}</div>
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        </>
  )
}

export default jeu
