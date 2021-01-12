import Head from 'next/head'
import Button from '@/components/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import NavBar from '@/components/NavBar'
import AustraliaState from '@/components/AustraliaState'
import DeathByThousandcuts from '@/components/Articles/DeathByThousandcuts'
import FooterSimple from '@/components/FooterSimple'
import theme from '@/theme'

export default function Article2() {
  const isAmp = false

  /**
   * Age Card
   * @param {color} param determine color
   */
  const AgeCard = ({ color }) => {
    const clr = color ? color : '#0C345A'
    return (
      <>
        <div className="age-card-2">
          <div className="age-card-2--head">Select your age and compare health insurance now</div>

          <div className="age-card-2--content">
            <div className="age-card-2--subheadline">
              <strong>Australia:</strong> We saved our average customer <strong>$357.95</strong> on their annual
              premium!
            </div>

            <div className="age-buttons">
              {Array.apply(null, {
                length: 28
              }).map((e, i) => (
                <Button
                  href="/form/step1"
                  key={'age-' + i}
                  width="22%"
                  height="36"
                  smWidth="22%"
                  style={{ padding: '0 10px' }}>
                  <strong>
                    {i == 0 && <>&lt; </>}
                    {i == 27 && <>&gt; </>}
                    {i + 50}
                  </strong>
                </Button>
              ))}
            </div>

            <div className="age-card-2--subheadline" style={{ marginTop: 20 }}>
              *Average savings based on the data from 13,136 customers during 2020
            </div>
          </div>
        </div>

        <style jsx>{`
          .age-card-2 {
            background-color: ${clr};
            color: #fff;

            .age-card-2--head {
              font-size: 20px;
              line-height: 30px;
              font-weight: 700;
              background: rgba(0, 0, 0, 0.2);
              color: #fff;
              padding: 10px 20px;
              text-align: center;
            }

            .age-card-2--content {
              padding: 10px 20px 15px;
              font-size: 18px;
            }

            .age-card-2--subheadline {
              background: rgba(0, 0, 0, 0.2);
              padding: 8px;
              font-size: 14px;
            }
          }

          .age-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 10px;
          }
        `}</style>
      </>
    )
  }

  // Toggle Drawer
  // const toggleDrawer = (open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return
  //   }

  //   setShowSidebar(open)
  // }

  // Lottie setup
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData.default,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice'
  //   }
  // }

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* NavBar */}
      <NavBar
        logo="/static/logo-cep.svg"
        isamp={isAmp ? 1 : 0}
        height="70"
        cta={<Button href="/form/step1">Get Quotes</Button>}
      />

      {/* Container */}
      <section className="main-content">
        <Container style={{ maxWidth: 1100 }}>
          <Grid container spacing={4}>
            {/* Left Content */}
            <Grid item xs={12} md={8}>
              <div className="content-wrapper">
                <DeathByThousandcuts
                  customMap={
                    <AustraliaState
                      disableElevation
                      infoText={
                        <>
                          <strong>Australia:</strong> We saved our average customer{' '}
                          <strong>$357.95 on their annual premium!</strong>
                        </>
                      }
                      colors={{
                        WA: '#E94A73',
                        NT: '#23ABD1',
                        NSW: '#77B5EE',
                        VIC: '#23ABD1',
                        TAS: '#07AF43',
                        QLD: '#E0960B',
                        SA: '#07AF43'
                      }}
                      dark
                      background="#0C345A"
                      ctaColor="#F7CD5C"
                      ctaProps={{
                        style: {
                          display: 'none'
                        }
                      }}
                      link="/form/step1"
                      isamp={false}
                    />
                  }
                />
              </div>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <aside className="sticky">
                <AgeCard />
              </aside>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Footer */}
      <FooterSimple isamp={isAmp ? 1 : 0} />

      <style jsx global>
        {`
          body {
            background: #f3f3f3 !important;
          }
          .btn-primary {
            background: ${theme.palette.cep.yellow};
            border-color: ${theme.palette.cep.yellow};
            color: #000;
            position: relative;
            font-weight: 700;
            z-index: 1;

            &:before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 4px;
              width: 100%;
              margin: auto;
              z-index: -1;
              background: #fff;
              opacity: 0.2;
            }

            &:hover,
            &:focus,
            &:active {
              background: ${theme.palette.cep.yellow};
              border-color: ${theme.palette.cep.yellow};
              color: #000;
              opacity: 0.8;
            }
          }
          a:hover {
            color: initial !important;
          }
          .main-content {
            padding: 0 0;
          }
          .content-wrapper {
            padding-top: 35px;
          }
          .sticky {
            @media screen and (min-width: 1024px) {
              position: sticky;
              top: 0;
              bottom: 0;
              padding: 35px 0 0;
            }
          }
          .d-sm-none {
            @media screen and (min-width: 576px) {
              display: none;
            }
          }
          .m-sidebar-drawer {
            position: fixed;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            z-index: 100;
            background: #fff;
            border: 1px solid #0c345a;
            border-radius: 5px 0 0 5px;
            height: 60px;
          }
        `}
      </style>
    </>
  )
}
