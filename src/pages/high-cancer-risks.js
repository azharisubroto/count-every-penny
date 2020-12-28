import Head from 'next/head'
import Article2 from '../layout/Article2'
import Card from '../components/Card'
import ArticleAuthor from '../components/ArticleAuthor'
import AustraliaState from '../components/AustraliaState'
import Typography from '@material-ui/core/Typography'
import Button from '../components/Button'
import Alert from '@material-ui/lab/Alert'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import makeStyles from '@material-ui/core/styles/makeStyles'

const statically = 'https://cdn.statically.io/img'
const hichost = 'asset.healthinsurancecomparison.com.au/wp-content/uploads/2020/04'
const imgopt = '?h=75&q=70&f=webp'
const partners = [
  '/28014653/partner-ahm.png',
  '/28014719/partner-nib.png',
  '/28014701/partner-australianUnity.png',
  '/28014705/partner-hcf.png',
  '/28014720/partner-peoplecare.png',
  '/28014714/partner-gmhba.png'
]

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

export default function HighCancerRisks(props) {
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
  const CtaBox = ({ title, buttons, colors }) => {
    return (
      <Card dark disableElevation color="#0C345A">
        {/* MAIN ARTICLE HEADLINE */}
        {!isamp ? (
          <Typography component="h1" align="center">
            <strong>{title}</strong>
          </Typography>
        ) : (
          <h3>{title}</h3>
        )}
        <br />

        <div className="buttons-wrapper">
          {buttons.map((item, i) => (
            <Button key={item} href={mainlink} color={colors[i]} width="32%" height="45">
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
          High cancer risks and record NHS delays are driving UK families to prioritise getting life cover - Count Every
          Penny
        </title>
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
        <CtaBox
          title="What type of health cover do you have?"
          colors={['#07AF43', '#23ABD1', '#E94A73']}
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

        <Alert
          icon={false}
          className={classes.alert}
          severity="info"
          style={{ padding: '10px 20px', marginBottom: 30 }}>
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
          <Card color="#fff" light outlined disableElevation padding="15px 20px">
            <h4 className="text-center">Some of the funds we compare:</h4>
            <div className={classes.partners}>
              {partners.map((item) => (
                <div key={item}>
                  <img src={`${statically}/${hichost}${item}${imgopt}`} alt="" loading="lazy" height="40" />
                </div>
              ))}
            </div>
          </Card>
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
              color: '#000!important'
            }
          }}
          link={mainlink}
          isamp={isamp}
        />

        <hr />

        <P>
          <small>
            <em>
              This article is opinion only and should not be taken as medical or financial advice. Check with a
              financial professional before making any decisions.
            </em>
          </small>
        </P>
      </Card>
    </>
  )
}

HighCancerRisks.Layout = Article2
