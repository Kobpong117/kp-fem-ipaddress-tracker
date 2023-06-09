import { useEffect, useState } from 'react'
import Map from './Map'
import './App.css'
import Result from './Result'
import Form from './Form'

function App() {

  const [ipAddress, setIpAddress] = useState('')
  const [addressInfo, setAddressInfo] = useState('')
  const [coordinates, setCoordinates] = useState()
    
  const apiKey = import.meta.env.VITE_API_KEY

  const submitIpAddress = (event) => {
    event.preventDefault()
    const getIpAddress = document.getElementsByClassName('ip-input')[0].value
 
    setIpAddress(() => {
      const newIpAddress = getIpAddress
      return newIpAddress
    })   
    
  }

  const fetchData = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
    
      setAddressInfo(() => {
        const updatedInfo = data
        return updatedInfo
      })

      setCoordinates(() => {
        const newCoordinates = [data.location.lat, data.location.lng]
        return newCoordinates
      })

    } catch (error) {
      console.log(error)
    } 
  }

  useEffect(() => {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ipAddress}`
    fetchData(url)
  }, [ipAddress])

  return (
    <main>
      <header className='header'>
        <h2>IP address tracker</h2>
        <Form submitIpAddress={submitIpAddress}/>
      </header>
      <div className='map-display'>
        {addressInfo && <Result addressInfo={addressInfo} />}
        {coordinates && <Map coordinates={coordinates} />}       
      </div>
    </main>
  )
}

export default App
