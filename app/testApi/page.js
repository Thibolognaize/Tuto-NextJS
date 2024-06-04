"use client"
import { useState, useEffect} from 'react'
import axios from 'axios'
//https://dumbstockapi.com/stock?exchanges=NYSE

const page = () => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get('https://dumbstockapi.com/stock?exchanges=NYSE')
        setData(response.data)
        setLoading(false)
      } catch (error) {
          console.log(error)
          setLoading(false)
      }
    }

    fetchData()

    return () =>{
      //Nattoyage au démontage du composant 
      // cancelRequest()
    }

  }, [])
  
  return (
    <div>
      {loading ? ( //revient à : If loading === true
        <p>Chargement...</p>
      ) : (
        <ul>
          {data &&
            data.map(item => (
                <li key={item.ticker}>{item.name}</li>
            ))}
        </ul>
      )}
      
    </div>
  )
}

export default page
