import Head from 'next/head'
import Article2 from '@/layout/Article2'
import Card from '@/components/Card'
import ArticleAuthor from '@/components/ArticleAuthor'
import AustraliaState from '@/components/AustraliaState'
import AgesCTA from '@/components/AgesCTA'
import LifeStageStack2 from '@/components/Articles/LifeStageStack2'
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  articlecard: {
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: 3,
    [theme.breakpoints.down('xs')]: {
      padding: 20
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    },
    '& hr': {
      margin: '20px 0',
      opacity: '0.3'
    },
    '& h4': {
      fontSize: 24,
      margin: '0 0 20px 0',
      '&.text-center': {
        textAlign: 'center'
      }
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
    backgroundColor: 'rgba(12, 52, 90, 0.2)',
    borderLeft: `3px solid #0C345A`,
    borderRadius: 0,
    overflow: 'hidden',
    color: '#0C345A',
    fontWeight: 400,
    fontSize: 13,
    padding: '5px 10px',
    lineHeight: '1.6',
    '& a': {
      color: 'inherit',
      textDecoration: 'none'
    }
  },
  alertIcon: {
    color: '#0C345A'
  },
  thumbnailContainer: {
    margin: '20px 0',
    background: '#EEF5F7',
    '& img': {
      [theme.breakpoints.down('xs')]: {
        height: 'auto'
      }
    }
  },
  caption: {
    padding: '8px 15px 12px 15px',
    fontSize: 12,
    background: '#EEF5F7',
    margin: 0
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
      paddingLeft: 40,
      background: 'url("/static/img/check-round.svg") no-repeat top 5px left'
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
  sectionheading: {
    fontWeight: 800,
    fontSize: 22,
    lineHeight: '32px',
    margin: '30px 0'
  },
  partners: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0',
    fontSize: 24
  }
}))

export default function LandingPage2(props) {
  const isamp = false
  const classes = useStyles(props)
  const mainlink = 'https://google.com'

  /**
   * CTA Box
   * @param {icon, children}
   */
  const P = ({ icon, children }) => {
    return (
      <>
        <Typography className={`${classes.paragraph} ${icon && 'hasIcon'}`} component="p" gutterBottom>
          {children}
        </Typography>
      </>
    )
  }

  const g_font =
    'https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,700;1,700&family=Source+Serif+Pro:ital,wght@0,700;1,700&display=swap'

  return (
    <>
      <Head>
        <title>
          High cancer risks and record NHS delays are driving UK families to prioritise getting life cover - Count Every
          Penny
        </title>

        <link as="style" rel="preload" href={g_font} />
        <link rel="stylesheet" href={g_font} />
      </Head>
      <Card className={classes.articlecard}>
        <Typography component="span" gutterBottom color="textSecondary" style={{ fontSize: 14 }}>
          HEALTH INSURANCE
        </Typography>
        <Typography component="h1" gutterBottom className={classes.headline}>
          High cancer risks and record NHS delays are driving UK families to prioritise getting life cover
        </Typography>
        {/* SUB HEADLING */}
        <Typography component="h2" gutterBottom className={classes.subheadline}>
          Aussies abandoning private health insurance by the thousands
        </Typography>
        {/* AUTHOR */}
        <ArticleAuthor
          variant="inline"
          isamp={isamp}
          avatar="/static/img/audrea.webp"
          name="Audrea B."
          date="31st July 2020"
        />
        <hr />
        {/* Alert */}
        <Alert
          icon={<ArrowRightIcon className={classes.alertIcon} fontSize="inherit" />}
          className={classes.alert}
          severity="info">
          <a href={mainlink}>Find Out If You Could Be Entitled To Pension Compensation With This Free Check</a>
        </Alert>
        {/* THUMBNAIL */}
        {!isamp ? (
          <div className={classes.thumbnailContainer}>
            <img
              src="https://cdn.statically.io/img/hic.azhdev.com/static/img/doctors.webp?h=281&q=70"
              width="680"
              height="281"
              style={{ width: '100%' }}
              loading="lazy"
              alt="doctors"
            />
            <div className={classes.caption}>
              Thanks to a <strong>new comparison service</strong> there might still be one area where you can save your
              pennies
            </div>
          </div>
        ) : (
          <>
            <br />
            <amp-img
              alt="doctors"
              src="https://cdn.statically.io/img/hic.azhdev.com/static/img/doctors.webp?h=281&q=70"
              width="680"
              height="281"
              attribution="Thanks to a there might still be one area where you can save your
              pennies"
              layout="responsive"></amp-img>
            <div className={classes.caption}>
              Thanks to a <strong>new comparison service</strong> there might still be one area where you can save your
              pennies
            </div>
          </>
        )}
        <P>
          It’s no secret — health insurance costs are at an all-time high. Major news outlets have started to take
          notice, with many of them claiming that the increasing costs of health care have Aussies abandoning private
          health insurance by the thousands, <strong>but the statistics show a much different story</strong>.
        </P>
        {/* CTA */}
        <AgesCTA
          href="https://google.com/"
          headline="Paying too Much?"
          intro="Australia: We saved our average customer $380.79* on their average annual premium! Select your age and see how much you could save!"
          footerText="Average saving based off 20,400 customers during 2019"
        />
        <P>
          Despite rising costs, too many people stay with the same fund and keep cover that’s inappropriate for their
          needs. This often happens because they aren’t aware that switching to better value cover can be quick, simple
          and done without any penalties.
        </P>
        <P>
          That’s why our service is putting people before policies. We listen to how you use your current cover, and ask
          what you would like to change. Whether that’s higher benefits, more personalised cover or simply cheaper
          premiums, we get to work to find a policy that meets your needs.
        </P>
        <P>
          Not only do our customers get cover that they can see the value in, they’re also saving an average of
          $380.79*. On top of that, we’ll arrange the whole switching process for you – from cancelling your current
          cover and retrieving prepaid premiums, to organising your new membership.
        </P>
        <Typography className={classes.sectionheading} component="h4">
          <strong>Here’s How You Do It:</strong>
        </Typography>
        <P>
          <strong>Step 1:</strong>
          <br />
          Select your current life stage below.
          <br />
          <br />
          <strong>Step 2:</strong>
          <br />
          Once you select your preferred coverage options, you will have the opportunity to compare quotes from multiple
          health funds.
        </P>
        <LifeStageStack2
          href="https://google.com"
          headline="Choose your life stage."
          intro="I’m looking health cover for...."
        />
        <P>
          When you compare with us, we’ll identify the areas where you could be overpaying and where you could improve
          your rebates. Finding better value health insurance is equally about not paying for irrelevant cover, and
          getting more back when you use the cover you need.
        </P>
        <P>
          For example, most people take out top hospital cover and simply accept that they’ll pay for pregnancy and IVF
          as a part of the policy. But some funds offer specific top hospital policies for people who aren’t planning to
          have children, and these are a quick, cost-cutting win for savvy shoppers.{' '}
        </P>
        <P>
          Extras cover is another area where you can save, here by moving to a policy that has bigger rebates for the
          services you use. This can come in the form of a higher yearly limit, or your insurer paying a greater benefit
          for each individual visit.
        </P>
        <P>
          We know how difficult it can be to make sense of the huge range of health insurance policies that are
          available. That’s why an important part of our service is our commitment to making your health cover savings
          quick, simple and effective.
        </P>
        <P>
          With the help of the advisers at HealthInsuranceComparison.com.au it’s never been easier to understand what
          you’re paying for and why. You can compare your current level of cover to similar policies and see exactly
          what you could be saving, all at no cost to you.
        </P>
        <P>
          Click through now to start getting value from your cover. Hurry! Your health cover savings are just minutes
          away.
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Get Started Now:</strong>
        </Typography>
        <P>
          <strong>Step 1:</strong>
          <br />
          Select your current life stage below.
          <br />
          <br />
          <strong>Step 2:</strong>
          <br />
          Once you select your preferred coverage options, you will have the opportunity to compare quotes from multiple
          health funds.
        </P>
        <AustraliaState
          disableElevation
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
          link={mainlink}
          isamp={isamp}
        />
        <hr />
        <P>
          <em>
            This article is opinion only and should not be taken as medical or financial advice. Check with a financial
            professional before making any decisions.
          </em>
        </P>
      </Card>

      <style jsx global>
        {`
          body {
            background: #f3f3f3;
            font-family: 'Source Sans Pro', sans-serif !important;
          }

          .family-1,
          h1 {
            font-family: 'Source Serif Pro', serif !important;
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

LandingPage2.Layout = Article2
