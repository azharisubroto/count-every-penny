import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import dynamic from 'next/dynamic'
const FeatureBox = dynamic(() => import('../components/FeatureBox'))

export default function BestFeatures() {
  const benefits = [
    {
      id: 1,
      title: "We're independently owned",
      link: '/form/',
      text: "Unlike many of our competitors, we aren't owned by any insurers (or vice versa)."
    },
    {
      id: 2,
      title: 'We make switching easy',
      link: '/form/',
      text: "We've been helping Aussies save on their health insurance for over 10 years."
    },
    {
      id: 3,
      title: "We're 100% Australian owned",
      link: '/form/',
      text: 'Our entire health insurance team is based in Australia and comprehensively trained.'
    }
  ]

  return (
    <Box pt={5} pb={10} style={{ backgroundColor: '#f9f9f9' }}>
      <Container style={{ maxWidth: 1120 }}>
        <Grid container spacing={0}>
          {/* Second Headline */}
          <Grid item xs={12}>
            <h2>Here’s why you should compare health insurance with us</h2>
          </Grid>

          {/* BENEFITS */}
          {benefits.map((item) => (
            <Grid item xs={12} sm={4} lg={4} key={item.id}>
              <FeatureBox
                image={'/static/img/form/benefit-' + item.id + '.svg'}
                title={item.title}
                link={item.link}
                text={item.text}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <style jsx>{`
        h2 {
          font-weight: 800;
          font-size: 28px;
          line-height: 38px;
          text-align: center;
          color: #373737;
          margin-bottom: 50px;
          margin-top: 0;
          @media screen and (min-width: 900px) {
            margin-top: 80px;
          }
        }
      `}</style>
    </Box>
  )
}
