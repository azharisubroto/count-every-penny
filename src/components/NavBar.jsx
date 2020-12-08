export default function NavBar(props) {
  return (
    <>
      <header {...props}></header>
      <style jsx>
        {`
          header {
            background: #fff;
            height: 70px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
          }
        `}
      </style>
    </>
  )
}
