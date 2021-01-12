import Head from 'next/head'
import Link from 'next/link'
import Card from '@/components/Card'
import ArticleAuthor from '@/components/ArticleAuthor'
import AustraliaState from '@/components/AustraliaState'
import P from '@/components/P'
import Typography from '@material-ui/core/Typography'
import PremiumIncrease from '@/components/PremiumIncrease'
import AndrewVideo from '@/components/AndrewVideo'
import makeStyles from '@material-ui/core/styles/makeStyles'
import LifeStageStack from '@/components/Articles/LifeStageStack'
import Cta2 from '@/components/Articles/Cta/Cta2'

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

function SeniorAussies(props) {
  const isamp = false
  const classes = useStyles(props)
  const mainlink = '/form/step1'
  const { customMap } = props

  return (
    <>
      <Head>
        <title>Aussies aged between 56 and 74 are missing out on health insurance savings every year.</title>
      </Head>
      <Card display="block">
        <Typography component="span" gutterBottom color="textSecondary" style={{ fontSize: 14 }}>
          How Older Aussies Can Stop Missing Out on Health Cover Savings
        </Typography>

        <Typography component="h1" gutterBottom className={classes.headline}>
          Aussies aged between 56 and 74 are missing out on health insurance savings every year.
        </Typography>

        {/* SUB HEADLING */}
        <Typography component="h2" gutterBottom className={classes.subheadline}>
          You could save up to $357.95* on your health insurance.
        </Typography>

        {/* AUTHOR */}
        <ArticleAuthor isamp={isamp} avatar="/static/img/audrea.webp" name="Audrea B." date="10th January 2021" />

        {/* THUMBNAIL */}
        <div className={classes.thumbnailContainer}>
          <img
            src="/static/img/articles/5-aussies-aged.jpg"
            width="610"
            height="610"
            style={{ width: '100%' }}
            loading="lazy"
            alt="Older Aussies are Saving on their Health Insurance using this service."
          />
        </div>
        <div className={classes.caption}>Older Aussies are Saving on their Health Insurance using this service.</div>

        <P>
          We’ll get straight to the point: <strong>You’re almost certainly overpaying for your health insurance</strong>
          . We saved the average Aussie <strong>$357.95 on their policy in 2020</strong> and there’s a very good chance
          we can save you a similar amount.
        </P>

        <P>
          When was the last time you checked what services your health insurance cover includes? Everyday, we see older
          Australians paying expensive health insurance premiums for services they’ll never need, like couples aged 50+
          paying hundreds of dollars more for pregnancy and IVF cover.
        </P>

        <P>
          <strong>You might also be a victim of ‘premium creep’</strong>. While it’s true that most policies get more
          expensive over time, funds increase their premiums at drastically different rates. For example, over the last
          two rate rises, one fund had an <strong>average increase of 2.92%</strong>, while another had an{' '}
          <strong>increase of 9.36%</strong>. That’s over the exact same period of time and translates into literally
          hundreds of dollars of difference for essentially the same level of cover.
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
          Our free comparison service shows mature Aussies and retirees where to make big savings without compromising
          on cover and how to avoid paying for cover they don’t need.
        </P>

        <P>
          Our award-winning comparison service Count Every Penny is giving older Aussies a fighting chance by giving
          them the power to compare health insurers cover options, side by side, saving them time, money and helping
          them make the best, most informed choices about their private health cover. We are achieving this by teaming
          up with industry-leader{' '}
          <a href="HealthInsuranceComparison.com.au" target="_blank">
            HealthInsuranceComparison.com.au
          </a>
          .
        </P>

        <P>
          We’ve teamed up with{' '}
          <a href="HealthInsuranceComparison.com.au" target="_blank">
            HealthInsuranceComparison.com.au
          </a>{' '}
          because we know many older Australians are feeling increasingly stung by the permanently rising costs of
          private health insurance in Australia, and we want to do something about it.
        </P>

        <Cta2 />

        <P>
          By teaming up our services, Older Aussies can compare multiple health insurance brands, cover options and
          pricing all in one place. Our service saves you time, but the biggest benefit for most is how much money you
          can save off your yearly premiums, in fact,{' '}
          <strong>our customers save an average of $357.95* annually</strong>.
        </P>

        <P>
          Our services are customised too. When you first arrive at counteverypenny.com.au you will be asked for some
          basic details. Our system then searches it’s extensive database of policies to show you policies better suited
          to your needs, side by side, to help you make a well informed decision.
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
          Here at Count Every Penny, we really do care about every penny. When you work with our team, you get the peace
          of mind that comes with working with trusted-professionals who have the years of experience needed to navigate
          the complicated health insurance system and keep you from any further confusion.
        </P>

        <P>
          Our team will make sure you have the cover you need, while paying the best possible price for the cover you
          want.
        </P>

        <P>*Average savings based off 13,136 customers during 2020'</P>
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

export default SeniorAussies
