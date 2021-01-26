/* eslint-disable react/jsx-no-target-blank */
import Card from '@/components/Card'
import ArticleAuthor from '@/components/Articles/ArticleAuthor'
import AustraliaState from '@/components/Articles/Cta/AustraliaState'
import P from '@/components/Articles/Paragraph'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import LifeStageStack from '@/components/Articles/LifeStageStack'
import FreebiesCTA from '@/components/Articles/Cta/FreebiesCTA'
import PremiumIncrease from '@/components/Articles/PremiumIncrease'
import AndrewVideo from '@/components/Articles/AndrewVideo'
import FeefoTestimonial from '@/components/Articles/FeefoTestimonial'
import WomTestimonial from '@/components/Articles/WomTestimonial'

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
  const articledate = '26th January 2021'
  const mainlink = props.link
  const { customMap } = props

  return (
    <>
      <Card display="block">
        <Typography component="span" gutterBottom color="textSecondary" style={{ fontSize: 14 }}>
          Getting value for money doesn’t need to be a distant memory anymore
        </Typography>

        <Typography component="h1" gutterBottom className={classes.headline}>
          Does your latest health insurance bill make you want to have a cup of tea, a Bex, and a good lie down? Here’s
          how to get a fair shake of the sauce bottle.
        </Typography>

        {/* SUB HEADLING */}
        <Typography component="h2" gutterBottom className={classes.subheadline}>
          How this revolutionary new service is turning back the clock on premium increases and bringing back value for
          money
        </Typography>

        {/* AUTHOR */}
        <ArticleAuthor isamp={isamp} avatar="/static/img/audrea.webp" name="Audrea B." date={articledate} />

        {/* THUMBNAIL */}
        <div className={classes.thumbnailContainer}>
          <img
            src="/static/img/articles/healh-insurance.png"
            width="612"
            height="344"
            style={{ width: '100%' }}
            loading="lazy"
            alt="Stressed Seniors Out-Of-Pocket With Health Insurers."
          />
        </div>
        <div className={classes.caption}>
          Are your health insurance bills giving you headaches? There’s another rate rise coming in April - that’s two
          premium increases in 6 months! But this comparison service can help you turn back the clock on your costs.
        </div>

        <P>
          Remember the Australia you grew up in? An Australia where politeness and respect mattered. Kids actually
          played outdoors (instead of spending all day on the computer). Two dollars was a note, not a coin. And you
          used to get value for money. You could do your entire weekly grocery shop and put a full tank of petrol in the
          car for $20 - and still have plenty of change left over.
        </P>

        <P>
          Sadly that Australia is mostly gone (aside from living on in our memories), but at least you can still get
          value for money on your health insurance.{' '}
          <strong>
            This Australian owned and operated service saved the average Aussie $357.95 on their cover in 2020, and
            policies start from just $2.93 per day
          </strong>{' '}
          - that&rsquo;s just a touch more than $20 per week.
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
          <strong>Switch, save, and get a free first aid kit</strong>
        </Typography>

        <P>
          Count Every Penny is working with HealthInsuranceComparison.com.au to help Australians &lsquo;ditch and
          switch&rsquo; their health insurer, and turn back the clock on premium increases. For a limited time, you even
          get a 210 piece first aid kit as a <strong>free gift</strong> when you switch.
        </P>

        <FreebiesCTA link={mainlink} />

        <P>
          The service is free to use and 100% transparent. There are no hidden fees or charges, and{' '}
          <strong>all prices come directly from the health funds themselves</strong> - they guarantee you&rsquo;ll pay
          the same price for the same policy as if you picked up the phone and called the insurers yourself.
        </P>
        <P>
          The web and phone based service is 100% Australian owned and operated, with over 100 health insurance experts
          in Sydney, Melbourne, and Brisbane offices - no outsourced call centers here, and no pushy salespeople - just
          trained experts trying to find you a better deal.&nbsp;
        </P>
        <P>
          <br />
          Unlike some other comparison services, they&rsquo;re{' '}
          <strong>independently owned and not beholden to any specific insurer</strong>, comparing hundreds of policies
          from both standard and not for profit health insurers.
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Act before the second rate rise hits!</strong>
        </Typography>

        <P>
          Did you know that Aussies are being slugged with two health insurance rate rises in 6 months? The October 2020
          rate rise added $103.48 to the average family&rsquo;s health insurance bill and the upcoming April 2021 rate
          rise will add a further $126.88. That&rsquo;s $230.36 more to pay every single year.&nbsp;
        </P>
        <P>
          Hospital &amp; Extras policies start at just $2.93 per day with no lock in contracts.{' '}
          <strong>
            There are no fees or markups, and no waiting periods to worry about if you&rsquo;re switching to a similar
            or lower level of cover.&nbsp;
          </strong>
        </P>
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
          a mere 6 months ago, depending on which fund they&rsquo;re with.
        </P>

        <PremiumIncrease link={mainlink} />

        <Typography className={classes.sectionheading} component="h4">
          <strong>Are you paying the ‘lazy tax’?</strong>
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
          <strong>Stop paying for cover you don’t need</strong>
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
            paying for things like pregnancy cover, orthodontics, and IVF.
          </strong>
          &rdquo;
        </P>

        <AndrewVideo />

        <P>
          Health funds often use fear and ignorance of the system to keep people paying for things they don&rsquo;t
          need. What most Australians don&rsquo;t realise is that{' '}
          <strong>you don&rsquo;t need to re-serve hospital waiting periods when switching funds</strong>, as long as
          you&rsquo;re switching to an equal or lower level of cover, so there&rsquo;s absolutely no reason not to shop
          around for a better deal.
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Get more money back on important things</strong>
        </Typography>

        <P>
          If you feel like your policy is letting you down on the important things, like rebates on dental, optical, or
          physiotherapy, that&rsquo;s something that Health Insurance Comparison can help with too. A good Extras policy
          should have you covered and{' '}
          <strong>keep any gap fees or out of pocket expenses to an absolute minimum</strong>.
        </P>
        <P>
          &ldquo;There&rsquo;s now a huge variety of Extras policies on the market, some of which cover things as broad
          as Acupuncture and Psychology&rdquo;, continues Andrew Davis, CEO of HealthInsuranceComparison.com.au.
        </P>
        <P>
          <strong>
            &ldquo;But many Aussies would be better off sticking to policies that have comprehensive cover for the
            fundamentals, like general and major dental, optical, and physiotherapy.&rdquo;
          </strong>
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>53,893 Aussies can’t be wrong!</strong>
        </Typography>

        <P>
          Health Insurance Comparison was founded in 2009 and has been helping Aussies save on their cover for over 11
          years. In 2020 alone, they helped 53,893 singles, couples, and families save on their health insurance,{' '}
          <strong>saving the average customer $357.95 per year</strong>.&nbsp;
        </P>
        <P>
          The award winning service has hundreds of real testimonials conducted by three independent review agencies -
          Word of Mouth, Feefo, and ProductReview.com.au. These are REAL Aussies leaving REAL feedback who were not
          incentivised or compensated to leave positive reviews in any way.
        </P>

        {/* Feefo Testi */}
        <FeefoTestimonial />

        {/* Wom Testi */}
        <WomTestimonial />

        <Typography className={classes.sectionheading} component="h4">
          <strong>Cover for less than a cup of coffee per day</strong>
        </Typography>

        <P>
          <strong>
            All policies come with a 30 day cooling off period if you change your mind, and there are no lock-in
            contracts.
          </strong>{' '}
          Let Health Insurance Comparison do a free health insurance audit for you today. It&rsquo;s free to compare and
          there&rsquo;s no obligation to sign up. In the unlikely event that they can&rsquo;t save you money, at least
          you&rsquo;ll have peace of mind that your policy is still competitive.&nbsp;
        </P>
        <P>
          They compare hundreds of policies from some of Australia&rsquo;s biggest for-profit and not-for-profit
          insurers, with <strong>cover starting for as little as $2.93 per day</strong> - and that&rsquo;s for a
          hospital and extras combined policy!
        </P>

        <Typography className={classes.sectionheading} component="h4">
          <strong>Compare, switch, and save</strong>
        </Typography>

        <P>
          How many times have you told yourself &ldquo;I really ought to compare my health insurance&rdquo; and then
          gone on paying the &lsquo;lazy tax&rsquo;? Health Insurance Comparison saved their average customer $357.95 in
          2020. If you haven&rsquo;t reviewed your cover in the last 12 months, there&rsquo;s a very good chance they
          can do the same for you.&nbsp;
        </P>
        <P>
          And remember, as a special deal for Count Every Penny readers only, you&rsquo;re entitled to a free 210 piece
          first aid kit when you switch and save in January. Enter your details below and see how much you could be
          saving today.
        </P>

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
