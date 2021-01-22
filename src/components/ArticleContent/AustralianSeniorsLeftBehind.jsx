/* eslint-disable react/jsx-no-target-blank */
import Head from 'next/head'
import Card from '@/components/Card'
import ArticleAuthor from '@/components/Articles/ArticleAuthor'
import AustraliaState from '@/components/Articles/Cta/AustraliaState'
import P from '@/components/Articles/Paragraph'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import LifeStageStack from '@/components/Articles/LifeStageStack'

const useStyles = makeStyles((theme) => ({
  articlecard: {
    padding: 40,
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: 3,
    [theme.breakpoints.down('xs')]: {
      padding: 20
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  headline: {
    color: (props) => props.color,
    marginTop: 10,
    fontSize: 30,
    lineHeight: '38px',
    fontWeight: 800,
    letterSpacing: 0.5,
    [theme.breakpoints.down('xs')]: {
      fontSize: 22,
      lineHeight: '30px',
      letterSpacing: 0
    }
  },
  subheadline: {
    fontWeight: 800,
    marginTop: 15,
    color: '#333',
    fontSize: 18,
    lineHeight: '22px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '20px'
    }
  },
  alert: {
    backgroundColor: theme.palette.primary.lighten1,
    borderRadius: 3,
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    overflow: 'hidden',
    color: theme.palette.textPrimary.main,
    fontWeight: 800,
    fontSize: 13,
    padding: '5px 10px',
    lineHeight: '1.6',
    '& a': {
      color: theme.palette.textPrimary.lighten1,
      textDecoration: 'underline'
    },
    '& .MuiAlert-icon': {
      marginRight: 5
    }
  },
  alertIcon: {
    color: theme.palette.textPrimary.lighten1
  },
  thumbnailContainer: {
    margin: '20px 0 0',
    background: '#EEF5F7',
    overflow: 'hidden',
    position: 'relative',

    '& img': {
      width: '100%',
      height: 'auto'
    }
  },
  caption: {
    padding: '12px 15px 12px 15px',
    fontSize: 14,
    background: '#EEF5F7',
    margin: 0,
    lineHeight: '1.5',
    color: '#393939'
  },
  paragraph: {
    fontSize: 18,
    lineHeight: '30px',
    margin: '30px 0',
    '& a': {
      color: theme.palette.textPrimary.main,
      fontWeight: 800
    },
    '&.hasIcon': {
      paddingLeft: 30,
      background: 'url("/static/img/check.svg") no-repeat top 10px left'
    }
  },
  ctabutton: {
    width: 'calc((100% / 3) - 10px)',
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '13px 10px',
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
      paddingLeft: 10,
      paddingRight: 10
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  succesalert: {
    borderLeft: `3px solid ${theme.palette.primary.darken1}`,
    borderRadius: 0
  },
  infoalert: {
    backgroundColor: '#E8F3FC',
    borderLeft: `3px solid #3D91DF`,
    borderRadius: 0,
    color: '#3D91DF'
  },
  sectionheading: {
    fontWeight: 800,
    fontSize: 22,
    lineHeight: '32px',
    margin: '30px 0'
  }
}))

function AustralianSeniors(props) {
  const isamp = false
  const classes = useStyles(props)
  const mainlink = props.link
  const { customMap } = props

  return (
    <>
      <Head>
        <title>It’s true: Australian Seniors are being left behind by out-of-pocket health insurance costs. </title>
      </Head>
      <Card display="block">
        <Typography component="span" gutterBottom color="textSecondary" style={{ fontSize: 14 }}>
          Health Insurers Are Leaving Aussie Seniors Behind.
        </Typography>

        <Typography component="h1" gutterBottom className={classes.headline}>
          It’s true: Australian Seniors are being left behind by out-of-pocket health insurance costs.
        </Typography>

        {/* SUB HEADLING */}
        <Typography component="h2" gutterBottom className={classes.subheadline}>
          Senior Aussies are stuck paying for pregnancy, IVF and orthodontics cover.
        </Typography>

        {/* AUTHOR */}
        <ArticleAuthor isamp={isamp} avatar="/static/img/audrea.webp" name="Audrea B." date="10th January 2021" />

        {/* THUMBNAIL */}
        <div className={classes.thumbnailContainer}>
          <img
            src="/static/img/articles/7-health-insurers-leaving-aussie-seniors-behind.jpg"
            width="612"
            height="344"
            style={{ width: '100%' }}
            loading="lazy"
            alt="Stressed Seniors Out-Of-Pocket With Health Insurers."
          />
        </div>
        <div className={classes.caption}>Stressed Seniors Out-Of-Pocket With Health Insurers.</div>

        <P>
          The National Seniors Association (NSA) have estimated that over the past decade{' '}
          <strong>health costs have increased by 56.7%</strong>, despite{' '}
          <strong>inflation increasing just by 23.5%</strong> over the same period*. The chart below, says it all.
          “Unless the underlying issues are addressed, Australian seniors could face skyrocketing health insurance
          premiums that will increase by a ridiculous 66% this decade”, NSA’s chief advocate Ian Henschke has stated.
        </P>

        {/* Chart */}
        <div className="card py-4">
          <div className="text-center px-4">
            <h4 className="text-22">Average Health Insurance Premiums Over Time</h4>

            <p className="text-16">
              The average health insurance premium is nearly 3.5 times higher in 2020 than it was in 1996
            </p>
          </div>

          <div className="px-4 mb-3">
            <img src="/static/img/articles/over-time-chart.png" alt="" loading="lazy" />
          </div>

          <div className="mt-2 text-center px-4">Source: Health.gov.au</div>
        </div>

        <P>
          At Count Every Penny, we know these increases could leave older Aussies struggling to make ends meet and
          that’s why we have teamed up with{' '}
          <a href="HealthInsuranceComparison.com.au" target="_blank">
            HealthInsuranceComparison.com.au
          </a>{' '}
          to help senior Aussies compare their health insurance for free, with no obligation to sign up. We have made
          sure <strong>all policies</strong> that Aussie seniors compare have <strong>no lock-in contracts</strong> and
          that the cover types seniors choose are the <strong>ones seniors need</strong>.
        </P>

        <P>
          {' '}
          <a href="HealthInsuranceComparison.com.au" target="_blank">
            HealthInsuranceComparison.com.au
          </a>{' '}
          ’s CEO Andrew Davis says,{' '}
          <strong>
            “it’s not at all uncommon to speak to people in their 50’s, 60’s and beyond, who are still paying for cover
            like pregnancy, orthodontics and IVF”
          </strong>
          . We think this is outrageous and that’s why we’ve made it our mission to make sure{' '}
          <strong>you aren’t paying for inappropriate cover</strong>.
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Here’s How You Do It:</strong>
        </Typography>

        <P>
          <strong>Step 1:</strong> Select your current life stage below.
          <br />
          <strong>Step 2:</strong> Once you select your preferred coverage options, you will have the opportunity to
          compare quotes from multiple health funds.
        </P>

        {/* Life Stage Stack */}
        <LifeStageStack link={mainlink} />

        <P>
          Did you know that a recent survey of 6000 NSA members revealed that seniors want lower out-of-pocket fees for
          specialists, cost-effective private health cover premiums, and more funding from Medicare across more
          services, including public hospitals?
        </P>

        <P>
          According to Ian Henschke, seniors who are often on “low and fixed incomes are particularly hard hit and are
          forced to put off medical treatment or cut their private health cover”, and we think this is horrific. We{' '}
          <strong>do not want seniors putting off medical treatment or cutting their private health insurance</strong>,
          because we know there are <strong>more affordable options out there</strong>.
        </P>

        <P>
          We know <strong>it is possible to get health insurance cover from as little as $2.93 a day**</strong>. We also
          know, and it is one of the main reasons we have partnered with them, that{' '}
          <a href="HealthInsuranceComparison.com.au" target="_blank">
            HealthInsuranceComparison.com.au
          </a>{' '}
          saves their <strong>customers an average of $357.95*** annually</strong>.
        </P>

        <P>
          Insurance policies are confusing to compare and the insurers know seniors struggle to understand the lingo,
          which keeps them from switching to more affordable health cover. For example, did you know you{' '}
          <strong>do not need to re-serve waiting periods on hospital cover?</strong> Or that you{' '}
          <strong>could be getting less than the full rebate you are entitled to?</strong> This is why we are doing the
          hard yards for seniors.
        </P>

        <P>
          We are 100% Australian owned and operated and so are{' '}
          <a href="HealthInsuranceComparison.com.au" target="_blank">
            HealthInsuranceComparison.com.au
          </a>
          . The best part about our partnership is, there are no outsourced call centres, anyone you speak to is from
          Sydney, Brisbane or Melbourne and are experts in the health insurance industry.
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Get Started Now:</strong>
        </Typography>

        <P>
          <strong>Step 1:</strong> Select your state below. <br />
          <strong>Step 2:</strong> After answering a few questions, you will have the opportunity to compare quotes in
          your area and could be eligible for significant savings.
        </P>

        {!customMap && (
          <AustraliaState
            link={mainlink}
            infoText={
              <>
                <strong>Australia:</strong> We saved our average customer{' '}
                <strong>$357.95 on their annual premium!</strong>
              </>
            }
          />
        )}
        {customMap !== false && customMap}

        <P>
          We have already had thousands of senior Australians jump on board and compare with the team at Count Every
          Penny and HealthInsuranceComparison.com.au. We could offer you significant savings, especially with the April
          rate rise looming.
        </P>
        <P>
          To get help comparing your health insurance, click{' '}
          <a href={mainlink}>
            <strong>here</strong>
          </a>
          . If you want to find out more about the NSA campaign that is working tirelessly to help Australian seniors
          pay less for health cover, see the link below^.
        </P>
        <P>
          *Statistics taken from Australian Department of Government Health, average annual increases in private health
          insurance premiums,{' '}
          <a
            href="https://www.health.gov.au/resources/publications/average-annual-increases-in-private-health-insurance-premiums"
            target="_blank">
            https://www.health.gov.au/resources/publications/average-annual-increases-in-private-health-insurance-premiums
          </a>
          <br />
          *Based on the ‘AHM Starter basic and black 50 extras’ for a single individual based in Victoria.
          <br />
          **Average savings based off 13,136 customers during 2020
          <br />
          ^NSA Campaign,{' '}
          <a
            href="https://nationalseniors.com.au/?_sp=c0fb85aa-9335-412b-9670-76952d93d82e.1609554161961"
            target="_blank">
            https://nationalseniors.com.au/?_sp=c0fb85aa-9335-412b-9670-76952d93d82e.1609554161961
          </a>
        </P>
      </Card>

      <style jsx global>{`
        .card {
          position: relative;
          border-radius: 5px;
          border: 1px solid #e3e3e3;
          box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
        }

        .card-brand-bg {
          position: absolute;
          right: 0;
          bottom: 0;
        }

        .article-widget-freebies {
          .card {
            &-body {
              padding: 35px;
              padding-top: 70px;
            }

            &-img {
              text-align: center;
              img {
                max-width: 100%;
                height: auto;
              }
            }

            &-ribbon {
              width: 119px;
              height: 117px;
              background-image: url('/static/img/icons/ribbon.png');
              background-size: cover;
              position: absolute;
              left: 20px;
              top: -12px;

              h6 {
                width: 100px;
                padding: 10px;
                font-weight: 700;
                font-size: 20px;
                line-height: 24px;
                text-align: center;
                color: #fff;
              }
            }
          }

          &__title {
            display: flex;
            align-items: center;

            img {
              height: 37px;
              width: auto;
              margin-bottom: 22px;
              margin-right: 25px;
            }

            h5 {
              font-weight: 700;
              font-size: 20px;
              line-height: 24px;
              color: #000;
              margin-bottom: 22px;
            }
          }
          p {
            font-size: 18px;
            line-height: 34px;
            margin-bottom: 28px;
          }
        }
      `}</style>
    </>
  )
}

export default AustralianSeniors
