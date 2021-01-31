//import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
//import { useRouter } from 'next/router'

export default function Home() {
  //const router = useRouter()

  React.useEffect(() => {
    //router.push('/form/step1')
  }, [])

  return (
    <>
      <Head>
        <title>Count Every Penny</title>
      </Head>
      <article></article>
    </>
  )
}
