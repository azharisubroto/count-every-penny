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

      <style jsx global>{`
        html {
          padding: 0;
          margin: 0;
        }
        body {
          background: #fafafa;
          color: #323232;
          font-size: 18px;
          line-height: 26px;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  )
}
