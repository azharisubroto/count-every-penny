import Head from 'next/head'
import Article from '../layout/Article'
import Card from '../components/Card'
import ArticleAuthor from '../components/ArticleAuthor'
import AustraliaState from '../components/AustraliaState'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import makeStyles from '@material-ui/core/styles/makeStyles'

//const useStyles = makeStyles({
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
      textDecoration: 'none'
    }
  },
  alertIcon: {
    color: theme.palette.textPrimary.lighten1
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
  sectionheading: {
    fontWeight: 800,
    fontSize: 22,
    lineHeight: '32px',
    margin: '30px 0'
  }
}))

// Enable AMP

export default function ThousandsOfAussies(props) {
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

  /**
   * CTA Box
   * @param {String} title
   * @param {Object} props
   */
  const CtaBox = ({ title, buttons }) => {
    return (
      <Card
        style={{
          background: 'url("/static/img/cta-bg.svg") no-repeat top -10px left -10px'
        }}
        color="#fff">
        {/* MAIN ARTICLE HEADLINE */}
        {!isamp ? (
          <Typography component="h3" align="center">
            <strong>{title}</strong>
          </Typography>
        ) : (
          <h3>{title}</h3>
        )}
        <br />

        <div className="buttons-wrapper">
          {buttons.map((item) => (
            <Button
              variant="contained"
              color="primary"
              disableElevation={true}
              key={item}
              className={classes.ctabutton}
              href={mainlink}>
              {item}
            </Button>
          ))}
        </div>
        <style jsx>{`
          .buttons-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: space-between;
          }
        `}</style>
      </Card>
    )
  }

  return (
    <>
      <Head>
        <title>
          New Report Claims Thousands Of Aussies Are Bailing On Private Health Insurance - Count Every Penny
        </title>
      </Head>
      <Card>
        <Typography component="span" gutterBottom color="textSecondary" style={{ fontSize: 14 }}>
          Health Insurance
        </Typography>

        <Typography component="h1" gutterBottom className={classes.headline}>
          New Report Claims Thousands Of Aussies Are Bailing On Private Health Insurance — Should You Join Them?
        </Typography>

        {/* SUB HEADLING */}
        <Typography component="h2" gutterBottom className={classes.subheadline}>
          Aussies abandoning private health insurance by the thousands
        </Typography>

        {/* AUTHOR */}
        <ArticleAuthor isamp={isamp} avatar="/static/img/audrea.webp" name="Audrea B." date="31st July 2020" />

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
              src="/static/img/doctors.webp"
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
              src="/static/img/doctors.webp"
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
        <CtaBox
          title="What type of health cover do you have?"
          buttons={['Hospital Cover', 'Extras Cover', 'Combined Cover']}
        />

        <P>
          Only a small percentage of Aussies dropped private health insurance, and the reason behind it isn’t just the
          risings costs. Dr Anthony Bartone, Federal President of the Australian Medical Association, suggests people
          are dropping their health cover due to the confusion in understanding what they’re paying for, and the
          difficulty the average Aussie faces when trying to{' '}
          <a href={mainlink}>save money by switching health insurance policies.</a>
        </P>

        <P>
          This leaves a lot of Aussies stuck paying higher premiums for health insurance they don’t need. Insurance
          policies are <strong>difficult to understand</strong> — and insurers benefit from you not fully understanding
          your policy and <strong>that leaves you paying for cover you won’t ever use</strong>. This is why it’s
          important <a href={mainlink}>to check up on your insurance policy</a> and make sure the money you spend gives
          you the benefits you expect.
        </P>

        <Alert icon={false} className={classes.succesalert} severity="info">
          <strong>UPDATE:</strong> 30,000+ AU Households have now signed up to this genius free service and are
          protecting themselves from being ripped off. Learn more.
        </Alert>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Here’s How You Do It:</strong>
        </Typography>

        <P icon>
          Know your needs: There are two different categories of private health insurance: hospital cover, and extras
          cover. Hospital cover is for in-hospital expenses such as accommodation, medicine, and doctor fees. Extras
          cover includes ancillary services that are outside of hospital cover, such as dental, optical, chiropractic
          and physiotherapy care. Our experts can provide you with a more in-depth look at what you need from each
          category and help you create a more personalised insurance policy that better fits your situation.
        </P>

        <P icon>
          Don’t just set it and forget it: Regularly reassess your health insurance needs and consider what you may need
          for the future. Remember that when switching insurance coverage, you’re protected by law when it comes to
          waiting periods. If you’re switching to a hospital cover policy that offers an equal or lower level of
          coverage health insurers can’t make you re-serve any additional waiting periods. If you’re increasing benefits
          or changing extras cover, certain waiting periods may apply—but health funds sometimes run special offers that
          waive some waiting periods altogether.
        </P>

        <P icon>
          Shop around, there are plenty of cost-saving options out there: There are different levels of insurance
          policies for both hospital cover and extras cover. We recommend using our free comparison service and the
          assistance of our award-winning team of experts to compare different health funds, prices, and levels of
          cover. When you work with our team, you get the peace of mind that comes with working with professionals who
          have the years of experience needed to navigate the complicated health insurance system — and keep you from
          serving unnecessary waiting periods.
        </P>

        {!isamp ? (
          <img
            src="/static/img/funds.svg"
            alt="funds"
            loading="lazy"
            width="700"
            height="148"
            style={{ width: '100%' }}
          />
        ) : (
          <amp-img alt="doctors" width="700" height="148" src="/static/img/funds.svg" layout="responsive"></amp-img>
        )}

        <P>
          <strong>Health Insurance Comparison</strong> is a one-of-a-kind comparison service. Our team of experts has
          consistently won numerous awards,{' '}
          <strong>
            including the Feefo Gold Trust Service Award for the previous 2 years, and the Word of Mouth Customer
            Service Award for 7 years running
          </strong>
          . We accomplish this by providing a high level of service and value to our customers—with an average{' '}
          <strong>
            savings of $380.79* a year. In a few short minutes, you could be on your way to hundreds of dollars in
            savings
          </strong>
          .
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Get Started Now:</strong>
        </Typography>

        <P>
          <strong>Step 1:</strong> Select your state below. <br />
          <strong>Step 2:</strong> After answering a few questions, you will have the opportunity to compare quotes in
          your area and could be eligible for significant savings.
        </P>

        <AustraliaState link={mainlink} isamp={isamp} />
      </Card>
    </>
  )
}

ThousandsOfAussies.Layout = Article
