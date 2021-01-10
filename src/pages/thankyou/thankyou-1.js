import Head from 'next/head'
import NavBarThanks from '@/components/NavBarThanks'
import FooterMisc from '@/components/FooterMisc'
import LineSeparator from '@/components/LineSeparator'

export default function ThankYou1() {
  return (
    <>
      <Head>
        <title>Thankyou 1</title>
      </Head>
      {/* NAVBAR */}
      <NavBarThanks />
      <div className="page page--thanks">
        <div className="page-content">
          <section className="thanks-title">
            <div className="container">
              <h1>THANK YOU</h1>
              <h4>We are preparing some money savings quotes for you now, and will be in touch with you shortly!</h4>
            </div>
          </section>
          <section className="thanks-recommend">
            <div className="container">
              <p>In the meantime we recommend...</p>
              <ul className="check">
                <li>
                  <strong>Getting your hands on your most recent health insurance bill</strong>, just so you know the
                  exact policy you are paying for and the amount you are paying... so we can <strong>beat it</strong>.
                </li>
                <li>
                  Having a think about your <strong>‘must have’ hospital and extras cover</strong> and your{' '}
                  <strong>‘nice to have’ hospital and extras cover</strong>. Think about whether you need top of the
                  range hospital cover? Or maybe you wear glasses and you might need optical cover? If you don’t know
                  the answers, let our experts know and they can help you out.
                </li>
              </ul>
            </div>
            <LineSeparator />
          </section>
        </div>
      </div>

      <FooterMisc style={{ marginTop: 0 }} />
    </>
  )
}
