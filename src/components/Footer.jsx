export default function Footer(props) {
  return (
    <>
      <footer {...props}>
        <div>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
            <li>Twitter</li>
            <li>Facebook</li>
          </ul>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background: #fff;
          padding: 25px 0;
          text-align: center;

          ul {
            display: block;
            list-style: none;
            text-align: center;
            li {
              display: inline-block;
              margin: 0 10px;
            }
          }
        }
      `}</style>
    </>
  )
}
