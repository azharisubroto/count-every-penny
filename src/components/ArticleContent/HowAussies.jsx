import Head from 'next/head'
import Card from '@/components/Card'
import ArticleAuthor from '@/components/Articles/ArticleAuthor'
import AustraliaState from '@/components/Articles/Cta/AustraliaState'
import P from '@/components/Articles/Paragraph'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import theme from '@/theme'
import LifeStageStack from '@/components/Articles/LifeStageStack'
import FreebiesCTA from '@/components/Articles/Cta/FreebiesCTA'

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

function SeniorAussies(props) {
  const isamp = false
  const classes = useStyles(props)
  const mainlink = props.link
  const { customMap } = props

  return (
    <>
      <Head>
        <title>Health Insurance from $2.93 a day*</title>
      </Head>
      <Card display="block">
        <Typography component="span" gutterBottom color="textSecondary" style={{ fontSize: 14 }}>
          How to get health insurance from $2.93* a day*
        </Typography>

        <Typography component="h1" gutterBottom className={classes.headline}>
          Health Insurance from $2.93 a day*
        </Typography>

        {/* SUB HEADLING */}
        <Typography component="h2" gutterBottom className={classes.subheadline}>
          Hospital and extras cover starting from $2.93 a day.
        </Typography>

        {/* AUTHOR */}
        <ArticleAuthor isamp={isamp} avatar="/static/img/audrea.webp" name="Audrea B." date="10th February 2021" />

        {/* THUMBNAIL */}
        <div className={classes.thumbnailContainer}>
          <img
            src="/static/img/articles/6-how-aussies-get-health-insurance.jpg"
            width="612"
            height="344"
            style={{ width: '100%' }}
            loading="lazy"
            alt="Older Aussies are Saving on their Health Insurance using this service."
          />
        </div>
        <div className={classes.caption}>Finally, Affordable Health Insurance. </div>

        <P>
          It’s no secret Aussies are <strong>stuck paying higher premiums</strong> for{' '}
          <strong>health cover they don’t need</strong>. Insurance policies are difficult to understand, the ‘health
          insurance’ language is complicated and the insurers benefit from you not fully understanding what you’re
          buying into, which undoubtedly leaves you confused, and afraid to switch to better value cover.
        </P>

        <P>
          The reality is, <strong>there is more affordable health insurance on the market</strong> and it starts with
          getting cover from as little as $2.93 a day*, and that’s for a hospital and extras combined policy. To make
          this even better? We make it easy to switch cover. We are here to talk you through what you’re buying into and
          all the ‘health insurance’ language that comes with it.
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
          There’s a reason Aussies are stuck paying higher premiums for health insurance they don’t need. According to
          Dr Anthony Bartone, Federal President of the Australian Medical Association, people are dropping their health
          cover due to the confusion in understanding what they are paying for, and the difficulty the average Aussie
          faces when trying to save money by switching health insurance policies.
        </P>

        <p className="text-md-18 lh-md-30 my-4 mb-0">
          Here are some tips to help you with switching your health cover, saving money and avoiding any confusion
          around what you’re paying for:
        </p>
        <ul className="text-md-18 lh-md-30 my-4 mt-0">
          <li>
            <strong>Know your needs:</strong> there’s two different categories of private health insurance: hospital
            cover and extras cover. Hospital cover is for in-hospital expenses like accommodation, medicine, and doctor
            fees. Extras cover includes necessary services that are outside of hospital cover, like dental, optical,
            chiropractic and physiotherapy care. Unsure what you need? Our experts can provide you with a more in-depth
            look at what you really need and help you make a more personalised cover to suit your situation.
          </li>
          <li>
            <strong>Don’t just set it and forget it:</strong> Regularly check-up on your health insurance needs and
            consider what you may need for the future. Remember, when switching health cover, you’re protected by law
            when it comes to waiting periods. If you’re switching to <strong>hospital cover</strong> that{' '}
            <strong>offers an equal or lower level of coverage</strong>, insurers{' '}
            <strong>cannot make you re-serve any additional waiting periods</strong>. On the other hand, if you’re
            increasing benefits or changing extras cover, certain waiting periods may apply - but health funds sometimes
            run special offers that waive some waiting periods altogether.
          </li>
          <li>
            <strong>Shop around:</strong> there are different levels of insurance policies for hospital cover and extras
            cover. We recommend using our free comparison service and the help of our team of experts to compare
            different health funds, prices and levels of cover.{' '}
          </li>
        </ul>

        <P>
          Count Every Penny is working with{' '}
          <a href="HealthInsuranceComparison.com.au" target="_blank">
            HealthInsuranceComparison.com.au
          </a>{' '}
          to help Australians ‘ditch and switch’ their health insurer, and turn back the clock on high premiums.
        </P>

        <P>
          When you work with both our teams, you get the peace of mind that comes with working with
          trusted-professionals who have the years of experience needed to navigate the complicated health insurance
          system and keep you from any further confusion.{' '}
        </P>

        <FreebiesCTA link={mainlink} />

        <P>
          Count Every Penny is a <strong>one-of-a-kind comparison service</strong> made for hard working Aussies. Our
          team of experts save <strong>Aussies an average of $357.95**</strong> a year and in a few short minutes, you
          could be on your way to <strong>hundreds of dollars in savings</strong>.
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
          *Based on the ‘AHM Starter basic and black 50 extras’ for a single individual based in Victoria.
          <br />
          **Average savings based off 13,136 customers during 2020
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

export default SeniorAussies
