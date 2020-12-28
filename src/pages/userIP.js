import browserSignature from 'browser-signature'

const userIP = (props) => {
  const getfinger = () => {
    const signature = browserSignature()
    console.log(signature)
  }

  return (
    <>
      <div>Incoming user IP is {JSON.stringify(props.headers, null, 2)}</div>
      <button
        onClick={() => {
          getfinger()
        }}>
        Generate
      </button>
    </>
  )
}

export default userIP
