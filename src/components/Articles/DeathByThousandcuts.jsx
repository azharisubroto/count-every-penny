import Head from 'next/head'
import Card from '@/components/Card'
import ArticleAuthor from '@/components/ArticleAuthor'
import AustraliaState from '@/components/AustraliaState'
import P from '@/components/P'
import Typography from '@material-ui/core/Typography'
import PremiumIncrease from '@/components/PremiumIncrease'
import AndrewVideo from '@/components/AndrewVideo'
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
    height: 300,
    overflow: 'hidden',
    position: 'relative',

    '& img': {
      top: '50%',
      position: 'absolute',
      transform: 'translateY(-50%)',
      [theme.breakpoints.down('xs')]: {
        height: 'auto'
      }
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

function DeathByThousandCut(props) {
  const isamp = false
  const classes = useStyles(props)
  const mainlink = '/form/step1'

  return (
    <>
      <Head>
        <title>
          Death by a thousand cuts - how to stop your health insurer bleeding you dry as Aussies get stung with a second
          rate rise in 6 months
        </title>
      </Head>
      <Card display="block">
        <Typography component="span" gutterBottom color="textSecondary" style={{ fontSize: 14 }}>
          Two rate rises in 6 months leaves Aussies with $230.36 bigger bills
        </Typography>

        <Typography component="h1" gutterBottom className={classes.headline}>
          Death by a thousand cuts - how to stop your health insurer bleeding you dry as Aussies get stung with a second
          rate rise in 6 months
        </Typography>

        {/* SUB HEADLING */}
        <Typography component="h2" gutterBottom className={classes.subheadline}>
          Revolutionary comparison service saves average Aussie $357.95* on their health insurance in 2020 - can they do
          the same for you?
        </Typography>

        {/* AUTHOR */}
        <ArticleAuthor isamp={isamp} avatar="/static/img/audrea.webp" name="Audrea B." date="10th January 2021" />

        {/* THUMBNAIL */}
        <div className={classes.thumbnailContainer}>
          <img
            src="/static/img/articles/2-mail-4.webp"
            width="610"
            height="610"
            style={{ width: '100%' }}
            loading="lazy"
            alt="doctors"
          />
        </div>
        <div className={classes.caption}>
          Health insurance premiums are going up AGAIN in April, but this Australian owned & operated service could save
          you big money
        </div>

        <P>
          Did you know that Aussies are being slugged with two health insurance rate rises in 6 months? The October 2020
          rate rise added $103.48 to the average family’s health insurance bill and the April 2021 rate rise will add a
          further $126.88. That’s $230.36 more to pay every single year.
        </P>

        <P>
          But an innovative comparison service has been{' '}
          <strong>saving Aussies an average of $357.95 a year on their health insurance</strong>. They compare over half
          a dozen of Australia’s biggest health funds - both regular and non-profit insurers - and are 100% Australian
          owned and operated.
        </P>

        <P>
          Hospital &amp; Extras policies start at just $2.93 per day with no lock in contracts. There are no fees or
          markups, and no waiting periods to worry about if you’re switching to a similar or lower level of cover.{' '}
          <strong>Plus, if you switch & save in January, you get a free 210 piece first aid kit</strong>
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

        <Typography className={classes.sectionheading} component="h4">
          <strong>Not all funds are created equal</strong>
        </Typography>

        <P>
          Although the average rate rise in April is &lsquo;only&rsquo; 2.92%, some funds will be increasing their rates
          by as much as 5.47%, just as in October other funds increased their rates by up to 5.6%.{' '}
          <strong>
            One fund which we can&rsquo;t name here will have raised their rates by an outrageous 9.36% across the
            October 2020 and April 2021 rate rises
          </strong>
          .&nbsp;
        </P>

        <P>
          This means that thousands of Aussies will be paying literally hundreds of dollars per year more than they were
          a mere 6 months ago, depending on which fund they’re with.
        </P>

        <div className="text-center">
          <PremiumIncrease />
        </div>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Don’t get mad, get even</strong>
        </Typography>

        <P>
          Let’s not mince words - health insurance costs are out of control and have been for quite some time.
          Statistics from the Department of Health show that the average premium is 3.4 times more expensive today than
          it was in 2001. The good news is that now there’s something you can do about it.
        </P>

        <div className="card pt-4">
          <div className="text-center px-4">
            <h4 className="text-22">Health insurance vs. inflation increases: 2001-2020</h4>

            <p className="text-16">
              How much has the average health insurance premium increased compared to inflation?
            </p>
          </div>

          <div className="px-4">
            <img src="/static/img/articles/chart-2.png" alt="" loading="lazy" />
          </div>

          <div className="mt-2 text-center px-4">Source: Health.gov.au and RBA</div>

          <div className="card-footer mt-3">
            <p>
              Health insurance premiums have increased by 336% in the last 20 years, far outstripping the rate of
              inflation. With such regular rate rises, it’s absolutely essential to review your cover every 12 months.
            </p>
          </div>
        </div>

        <P>
          Count Every Penny is working with HealthInsuranceComparison.com.au to help Australians &lsquo;ditch and
          switch&rsquo; their health insurer, and turn back the clock on premium increases. For a limited time, you even
          get a 210 piece first aid kit as a <strong>free gift</strong> when you switch.&nbsp;
        </P>

        <P>
          The service is free to use and 100% transparent. There are no hidden fees or charges, and{' '}
          <strong>all prices come directly from the health funds themselves</strong> - we guarantee you&rsquo;ll pay the
          same price for the same policy as if you picked up the phone and called the insurers yourself.
        </P>

        <Typography className={classes.sectionheading} component="h4">
          Australian owned &amp; Independent
        </Typography>

        <P>
          The web and phone based service is <strong>100% Australian owned and operated</strong>, with over 100 health
          insurance experts in Sydney, Melbourne, and Brisbane offices - no outsourced call centers here, and no pushy
          salespeople - just trained experts trying to find you a better deal.&nbsp;
        </P>

        <Typography className={classes.sectionheading} component="h4">
          Are you paying the ‘lazy tax’?
        </Typography>

        <P>
          Hundreds of thousands of Aussies are paying more than they have to for substandard or wasteful health cover.
          Simply put,{' '}
          <strong>
            if you haven&rsquo;t reviewed your health insurance policy in the last 12 months, you&rsquo;re almost
            certainly paying the &lsquo;lazy tax&rsquo;
          </strong>
          , and your insurer is only too happy to let you keep paying it.
        </P>

        <P>
          Health Insurance Comparison handles all the paperwork for you, and handles the switching process from your old
          fund to your new one. They&rsquo;ll ensure that your new policy starts at the exact same time your old one
          ends, meaning you won&rsquo;t ever be without cover or paying for two policies at once.
        </P>

        <Typography className={classes.sectionheading} component="h4">
          Stop paying for cover you don’t need
        </Typography>

        <P>
          For years, health insurers have been taking advantage of Aussie&rsquo;s loyalty, creeping up rates every year
          and charging customers for cover they don&rsquo;t need - in some cases for decades.&nbsp;
        </P>

        <P>
          &ldquo;Over the years, I&rsquo;ve spoken to hundreds of hardworking Australians who were unknowingly paying
          for cover they didn&rsquo;t need&rdquo;, says Andrew Davis, CEO of HealthInsuranceComparison.com.au. &ldquo;
          <strong>
            It&rsquo;s not at all uncommon to speak to people in their 50&rsquo;s, 60&rsquo;s, and beyond, who are still
            paying for things like pregnancy cover, orthodontics, and IVF
          </strong>
          &rdquo;.&nbsp;
        </P>

        {/* Andrew Video */}
        <AndrewVideo />

        <P>
          Health funds often use fear and ignorance of the system to keep people paying for things they don’t need. What
          most Australians don’t realise is that{' '}
          <strong>you don’t need to re-serve hospital waiting periods when switching funds</strong>, as long as you’re
          switching to an equal or lower level of cover.
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Get more money back on important things</strong>
        </Typography>

        <P>
          If you feel like your policy is letting you down on the important things, like rebates on dental, optical, or
          physiotherapy, that’s something that Health Insurance Comparison can help with too. A good Extras policy
          should have you covered and
          <strong>keep any gap fees or out of pocket expenses to an absolute minimum</strong>.<br />
          <br />
          “There’s now a huge variety of Extras policies on the market, some of which cover things as broad as
          Acupuncture and Psychology”, continues Andrew Davis, CEO of HealthInsuranceComparison.com.au.
          <br />
          <br />
          “But many Aussies would be better off sticking to policies that have comprehensive cover for the fundamentals,
          like general and major dental, optical, and physiotherapy.”
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>53,893 Aussies can’t be wrong!</strong>
        </Typography>

        <P>
          Health Insurance Comparison was founded in 2009 and has been helping Aussies save on their cover for over 11
          years. In 2020 alone, they helped 53,893 singles, couples, and families save on their health insurance,{' '}
          <strong>saving the average customer $357.95 per year</strong>.<br />
          <br />
          The award winning service has hundreds of real testimonials conducted by three independent review agencies -
          Word of Mouth, Feefo, and ProductReview.com.au. These are REAL Aussies leaving REAL feedback who were not
          incentivised or compensated to leave positive reviews in any way.
        </P>

        <div className="article-widget-rating article-widget-rating--type-1">
          <div className="card">
            <div className="card-body">
              <div className="card-stars mb-3">
                <img src="/static/img/icons/stars.svg" width="120" alt="Five Stars" loading="lazy" />
              </div>
              <h5 className="card-title">Great customer service</h5>
              <p className="text-16">
                Tom Carroll was very professional, friendly and helpful. He took the time to explain everything to me
                and found me a better coverage for less $$ monthly! Thanks Tom = legend!
              </p>
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h6 className="card-author text-18">Tracey</h6>
                </div>
                <div className="col-auto">
                  <div className="card-brand">
                    <img src="/static/img/feefo.png" width="90" height="20" alt="feefo logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="article-widget-rating article-widget-rating--type-2">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4 card-header">
                <div className="card-stars my-3">
                  <img src="/static/img/icons/stars-2.svg" alt="Five Stars" loading="lazy" />
                </div>
                <div className="card-brand">
                  <img src="/static/img/rating/logo-2.png" alt="feefo" loading="lazy" />
                </div>
              </div>
              <div className="col-md-8 card-body">
                <p>
                  Brittany gave exceptional service - thank you so much. <br />I am saving over $700 a year. Wish I had
                  done it before.
                </p>
                <h6 className="card-author">Karyl W.</h6>
                <div className="card-brand-bg">
                  <img src="/static/img/rating/logo-2-bg.png" alt="feefo" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="article-widget-rating article-widget-rating--type-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Friendly &amp; Helpful Service</h5>
              <p>
                The whole experience was very friendly and helpful. We love being able to tailor the insurance cover to
                what our needs are, and we are saving $70 a fortnight with no decrease in cover. Thank you very much.
              </p>
              <h6 className="card-author">
                <strong>Sandy</strong> <span>|</span> Darling Downs, QLD
              </h6>
              <hr />
              <div className="row align-items-center">
                <div className="col-md-4">
                  <div className="card-stars">
                    <h6>Customer Rating</h6>
                    <img src="/static/img/icons/stars.svg" alt="Five Stars" width="120" height="19" loading="lazy" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-stars">
                    <h6>Transparency</h6>
                    <img src="/static/img/icons/stars.svg" alt="Five Stars" width="120" height="19" loading="lazy" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-brand">
                    <img src="/static/img/rating/logo-3.png" alt="product review au" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="article-widget-freebies mt-5">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-img">
                    <img src="/static/img/articles/firs-aid-kit.png" alt="First Aid Kit Free" loading="lazy" />
                  </div>
                </div>
                <div className="card-ribbon">
                  <h6>
                    Get
                    <br />
                    This for
                    <br />
                    FREE!
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="article-widget-freebies__title">
                <img src="/static/img/icons/free.svg" alt="Free" loading="lazy" />
                <h5>210 PCS Emergency First Aid Kit - Home, Car & Travel</h5>
              </div>
              <p>
                Get this deluxe 210 piece first aid kit FREE when you switch and save with Health Insurance Comparison.
                While stocks last only.
              </p>
              <a href={mainlink} className="btn btn-primary">
                Compare Now
              </a>
            </div>
          </div>
        </div>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Cover for less than a cup of coffee per day</strong>
        </Typography>

        <P>
          <strong>
            All policies come with a 30 day cooling off period if you change your mind, and there are no lock-in
            contracts
          </strong>
          . Let Health Insurance Comparison do a free health insurance audit for you. It’s free to compare and there’s
          no obligation to sign up. In the unlikely event that they can’t save you money, at least you’ll have peace of
          mind that your policy is still competitive.
          <br />
          <br />
          They compare hundreds of policies from some of Australia’s biggest for-profit and not-for-profit insurers,
          with <strong>cover starting for as little as $2.93 per day</strong> - and that’s for a hospital and extras
          combined policy!
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Get Started Now:</strong>
        </Typography>

        <P>
          <strong>Step 1:</strong> Select your state below. <br />
          <strong>Step 2:</strong> After answering a few questions, you will have the opportunity to compare quotes in
          your area and could be eligible for significant savings.
        </P>

        <AustraliaState link={mainlink} price="$357.95" isamp={isamp} />
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
          margin-bottom: 65px;

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

export default DeathByThousandCut
