/* eslint-disable react/jsx-no-target-blank */
import Head from 'next/head'
import Card from '@/components/Card'
import ArticleAuthor from '@/components/Articles/ArticleAuthor'
import AustraliaState from '@/components/Articles/Cta/AustraliaState'
import P from '@/components/Articles/Paragraph'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from '@/theme'
import LifeStageStack from '@/components/Articles/LifeStageStack'

const useStyles = makeStyles(() => ({
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

function NoBuyersRemorse(props) {
  const isamp = false
  const classes = useStyles(props)
  const mainlink = props.link
  const { customMap } = props

  return (
    <>
      <Head>
        <title>
          A simple message to fed-up Aussies who are sick of paying too much and getting ripped off by their health
          insurers
        </title>
      </Head>
      <Card display="block">
        <Typography component="span" gutterBottom color="textSecondary" style={{ fontSize: 14 }}>
          Health Insurance Hack for Fed Up Aussies
        </Typography>

        <Typography component="h1" gutterBottom className={classes.headline}>
          A simple message to fed-up Aussies who are sick of paying too much and getting ripped off by their health
          insurers
        </Typography>

        {/* SUB HEADLING */}
        <Typography component="h2" gutterBottom className={classes.subheadline}>
          A simple way to save with no buyers remorse.
        </Typography>

        {/* AUTHOR */}
        <ArticleAuthor isamp={isamp} avatar="/static/img/audrea.webp" name="Audrea B." date="10th February 2021" />

        {/* THUMBNAIL */}
        <div className={classes.thumbnailContainer}>
          <img
            src="/static/img/articles/8-health-insurance-with-no-buyers-remorse.jpg"
            width="612"
            height="344"
            style={{ width: '100%' }}
            loading="lazy"
            alt="Stressed Seniors Out-Of-Pocket With Health Insurers."
          />
        </div>
        <div className={classes.caption}>Big savings for Aussies fed up with overpriced health cover.</div>

        <P>
          What if you could save <strong>$357.95*</strong>, <strong>enjoy a 30 day cooling off period</strong> and have{' '}
          <strong>no lock-in contracts</strong> with your health insurer?
        </P>
        <P>
          You can have all of this by comparing your health insurance with Count Every Penny. How? We have partnered
          with leading comparison company HealthInsuranceComparison.com.au. This partnership helps Aussies not only save
          on their health insurance, but to stop them getting stuck in contracts they don’t understand, with policies
          that don't suit their needs.
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

        <P>Here’s how it works:</P>

        <ol className={classes.paragraph}>
          <li>
            <strong>You tell us what types of cover are important to you</strong>. What’s essential, what’s nice to
            have, and what you definitely don’t need. <strong>If you’re unsure, we can help you</strong> figure this
            out.
          </li>
          <li>
            We go out and see if we can find a policy that meets your needs at an{' '}
            <strong>acceptable price point</strong>.
          </li>
          <li>
            We talk you through your policy options and take you through our recommendations, clearly comparing them in
            a like-for-like way with the cover you currently have.
          </li>
          <li>
            If you decide to switch, <strong>we handle all the paperwork and the switching process</strong>. We’ll talk
            both funds for you and ensure that your new cover starts the same day your old over ends, so you won’t ever
            be without cover or paying for two policies at the same time.
          </li>
          <li>
            <strong>We check in to see how you’re getting on with your new fund</strong> and provide ongoing support to
            make sure your new policy stays competitive.
          </li>
        </ol>

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
          Count Every Penny is a <strong>one-of-a-kind comparison service</strong> made for hard working Aussies. Our
          team of experts offer no lock-in contracts and help save <strong>Aussies an average of $357.95**</strong> a
          year and in a few short minutes, you could be on your way to <strong>hundreds of dollars in savings</strong>.
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

export default NoBuyersRemorse
