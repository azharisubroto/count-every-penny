import Head from 'next/head'
import Form from '@/layout/Form'
import theme from '@/theme'

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank you</title>
      </Head>
      <div className="thankyou">
        <h1>Thank You</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum
        </p>
      </div>

      <style jsx>{`
        .thankyou {
          background: ${theme.palette.cep.primary};
          color: #fff;
          font-size: 30px;
          text-align: center;
          padding: 80px 0;
          font-weight: 800;

          h1 {
            margin-top: 0;
          }

          p {
            max-width: 1000px;
            margin: 0 auto;
            font-size: 20px;
            font-weight: 400;
            line-height: 35px;
          }
        }
      `}</style>
    </>
  )
}

ThankYou.Layout = Form
