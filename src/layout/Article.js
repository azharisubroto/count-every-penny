import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Article({ children }) {
  //const [counter, setCounter] = useState(0)

  return (
    <>
      <NavBar />

      {children}

      <Footer />
    </>
  )
}
