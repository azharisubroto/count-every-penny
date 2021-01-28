import React from 'react'
import AustraliaState from '@/components/Articles/Cta/AustraliaState2'
import PremiumIncrease from '@/components/Articles/PremiumIncrease'
import AgesCTA from '@/components/Articles/Cta/AgesCTA2'
import VideoCard from '@/components/Articles/AndrewVideo2'
import LifeStageStack from '@/components/Articles/LifeStageStack3'
import FeefoTestimonial from '@/components/Articles/FeefoTestimonial'
import WomTestimonial from '@/components/Articles/WomTestimonial'
import ProductReview from '@/components/Articles/ProductReview'
import { logEvent } from '@/utils/analytics'

function DeathByThousandCut(props) {
  const mainlink = props.link
  const { customMap } = props

  return (
    <>
      <article className="article">
        <div className="row justify-content-center">
          <div className="col-md-auto">
            <div className="article-flash">
              <span className="pulse pulse-primary"></span>
              <h3>Two rate rises in 6 months leaves Aussies with $230.36 bigger bills</h3>
            </div>
          </div>
        </div>
        <h1 className="article-title">
          Death by a thousand cuts - how to stop your health insurer bleeding you dry as Aussies get stung with a second
          rate rise in 6 months
        </h1>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <h4 className="article-highlight">
              Revolutionary comparison service saves average Aussie $357.95* on their health insurance in 2020 - can
              they do the same for you?
            </h4>
          </div>
        </div>
        <div className="article-meta">
          <div className="row align-items-center">
            <div className="col-auto">
              <div className="media article-meta__author">
                <div className="article-meta__author-avatar">
                  <img src="/static/img/articles/type-2/avatar.png" alt="Audrea B." />
                </div>
                <div className="media-body">
                  <h6>
                    By <strong>Audrea B.</strong>
                  </h6>
                  <p>Last Updated 19th January 2021</p>
                </div>
              </div>
            </div>
            <div className="col-auto ml-auto">
              <div className="row justify-content-end align-items-center">
                <div className="col-auto">
                  <div className="btn-group article-meta__toolbar" role="group">
                    <button type="button" className="btn btn-outline-default btn-decrease font-vollkorn-bold">
                      A
                    </button>
                    <button type="button" className="btn btn-outline-default btn-increase font-vollkorn-bold">
                      A<sup>+</sup>
                    </button>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="article-meta__action">
                    <a href={mainlink} className="btn btn-outline-primary btn-circle btn-sm btn-icon">
                      <img src="/static/img/articles/type-2/icons/share.svg" alt="Share" /> <span>Share</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-9">
            <figure className="article-featured-img">
              <picture>
                <source srcSet="/static/img/articles/type-2/hero-2-m.png" media="(max-width: 767px)" type="image/png" />
                <source srcSet="/static/img/articles/type-2/hero-2.png" media="(min-width: 768px)" type="image/png" />
                <img src="/static/img/articles/type-2/hero-2.png" alt="Health Insurance" />
              </picture>
              <figcaption>
                <img src="/static/img/articles/type-2/icons/camera-grey.svg" alt="Camera Grey" />
                <p>
                  Health insurance premiums are <strong>going up AGAIN</strong> in April, but this Australian owned
                  &amp; operated service could save you big money
                </p>
              </figcaption>
            </figure>
            <div className="article-content">
              <p>
                Did you know that Aussies are being slugged with two health insurance rate rises in 6 months? The
                October 2020 rate rise added $103.48 to the average family’s health insurance bill and the April 2021
                rate rise will add a further $126.88. That’s $230.36 more to pay every single year.
                <br />
                <br />
                But an innovative comparison service has been{' '}
                <strong>saving Aussies an average of $357.95 on their health insurance</strong>. They compare over half
                a dozen of Australia’s biggest health funds - both regular and non-profit insurers - and it’s 100%
                Australian owned and operated.
                <br />
                <br />
                Hospital &amp; Extras policies start at $2.93 per day with no lock in contracts. There are no fees or
                markups, and no waiting periods to worry about if you’re switching to a similar or lower level of cover.{' '}
                <strong>Plus, if you switch &amp; save in January, you get a free 210 piece first aid kit.</strong>
              </p>

              <h4>Here’s How You Do It:</h4>

              <p>
                <strong>Step 1:</strong> Select your current <strong>life stage below</strong>.<br />
                <strong>Step 2:</strong> Once you select your preferred coverage options, you will have the opportunity
                to compare quotes from multiple health funds.
              </p>

              <LifeStageStack link={mainlink} onClick={() => logEvent('Clicked Life Stage CTA')} />

              <h4>Not all funds are created equal</h4>
              <p>
                Although the average rate rise in April is ‘only’ 2.74%, some funds will be increasing their rates by as
                much as 5.47%, just as in October other funds increased their rates by up to 5.6%.{' '}
                <strong>
                  One fund which we can’t name here will have raised their rates by an outrageous 9.36% across the
                  October 2020 and April 2021 rate rises
                </strong>
                .<br />
                <br />
                This means that thousands of Aussies will be paying literally hundreds of dollars per year more than
                they were a mere 6 months ago, depending on which fund they’re with.
              </p>

              <PremiumIncrease link={mainlink} />

              <h4>Don’t get mad, get even</h4>
              <p>
                Let’s not mince words - health insurance costs are out of control and have been for quite some time.
                Statistics from the Department of Health show that the average premium is 3.4 times more expensive today
                than it was in 2001.
                <strong>The good news is that now there’s something you can do about it.</strong>
              </p>
              <div className="card card-widget">
                <div className="card-body">
                  <h5 className="card-title text-center mb-10px">
                    Health insurance vs. inflation increases: 2001-2020
                  </h5>
                  <p className="mb-30px text-center">
                    How much has the average health insurance premium increased compared to inflation?
                  </p>
                  <div className="card-img mb-10px">
                    <img src="/static/img/articles/type-2/chart.png" alt="Chart" />
                  </div>
                  <p className="card-source small">Source: Health.gov.au and RBA</p>
                </div>
                <div className="card-footer">
                  <p>
                    Health insurance premiums have increased by 336% in the last 20 years, far outstripping the rate of
                    inflation. With such regular rate rises, it’s absolutely essential to review your cover every 12
                    months.
                  </p>
                </div>
              </div>
              <p>
                Count Every Penny is working with HealthInsuranceComparison.com.au to help Australians ‘ditch and
                switch’ their health insurer, and turn back the clock on premium increases. For a limited time, you even
                get a 210 piece first aid kit as a<strong>free gift</strong> when you switch.
                <br />
                <br />
                The service is free to use and 100% transparent. There are no hidden fees or charges, and{' '}
                <strong>all prices come directly from the health funds themselves</strong> - we guarantee you’ll pay the
                same price for the same policy as if you picked up the phone and called the insurers yourself.
              </p>

              <h4>Australian owned & Independent</h4>
              <p>
                The web and phone based service is <strong>100% Australian owned and operated</strong>, with over 100
                health insurance experts in Sydney, Melbourne, and Brisbane offices - no outsourced call centers here,
                and no pushy salespeople - just trained experts trying to find you a better deal.
                <br />
                <br />
                Unlike some other comparison services, they are{' '}
                <strong>independently owned and not beholden to any specific insurer</strong>, comparing hundreds of
                policies from both standard and not for profit health insurers.
              </p>

              <h4>Are you paying the ‘lazy tax’?</h4>
              <p>
                Hundreds of thousands of Aussies are paying more than they have to for substandard or wasteful health
                cover. Simply put,{' '}
                <strong>
                  if you haven’t reviewed your health insurance policy in the last 12 months, you’re almost certainly
                  paying the ‘lazy tax’
                </strong>
                , and your insurer is only too happy to let you keep paying it.
                <br />
                <br />
                Health Insurance Comparison handles all the paperwork for you, and handles the switching process from
                your old fund to your new one. They’ll ensure that your new policy starts at the exact same time your
                old one ends, meaning you won’t ever be without cover or paying for two policies at once.
              </p>

              <h4>Stop paying for cover you don’t need</h4>
              <p>
                For years, health insurers have been taking advantage of Aussie’s loyalty, creeping up rates every year
                and charging customers for cover they don’t need - in some cases for decades.
                <br />
                <br />
                “Over the years, I’ve spoken to hundreds of hardworking Australians who were unknowingly paying for
                cover they didn’t need”, says Andrew Davis, CEO of HealthInsuranceComparison.com.au.{' '}
                <strong>
                  “It’s not at all uncommon to speak to people in their 50’s, 60’s, and beyond, who are still paying for
                  things like pregnancy cover, orthodontics, and IVF”
                </strong>
                .
              </p>
              {/* Andrew Video */}
              <VideoCard onClick={() => logEvent('Played Andrew Davis video')} />
              <p>
                Health funds often use fear and ignorance of the system to keep people paying for things they don’t
                need. What most Australians don’t realise is that{' '}
                <strong>you don’t need to re-serve hospital waiting periods when switching funds</strong>, as long as
                you’re switching to an equal or lower level of cover.
              </p>

              <h4>Get more money back on important things</h4>
              <p>
                If you feel like your policy is letting you down on the important things, like rebates on dental,
                optical, or physiotherapy, that’s something that Health Insurance Comparison can help with too. A good
                Extras policy should have you covered and
                <strong>keep any gap fees or out of pocket expenses to an absolute minimum</strong>.<br />
                <br />
                “There’s now a huge variety of Extras policies on the market, some of which cover things as broad as
                Acupuncture and Psychology”, continues Andrew Davis, CEO of HealthInsuranceComparison.com.au.
                <br />
                <br />
                “But many Aussies would be better off sticking to policies that have comprehensive cover for the
                fundamentals, like general and major dental, optical, and physiotherapy.”
              </p>

              <h4>53,893 Aussies can’t be wrong!</h4>
              <p>
                Health Insurance Comparison was founded in 2009 and has been helping Aussies save on their cover for
                over 11 years. In 2020 alone, they helped 53,893 singles, couples, and families save on their health
                insurance, <strong>saving the average customer $357.95 per year</strong>.<br />
                <br />
                The award winning service has hundreds of real testimonials conducted by three independent review
                agencies - Word of Mouth, Feefo, and ProductReview.com.au. These are REAL Aussies leaving REAL feedback
                who were not incentivised or compensated to leave positive reviews in any way.
              </p>
              {/* Great Customer Service */}
              <FeefoTestimonial />

              {/* Word Of Mouth */}
              <WomTestimonial />

              {/* PRODUCT REVIEW */}
              <ProductReview />

              <h4>Cover for less than a cup of coffee per day</h4>
              <p>
                <strong>
                  All policies come with a 30 day cooling off period if you change your mind, and there are no lock-in
                  contracts
                </strong>
                . Let Health Insurance Comparison do a free health insurance audit for you. It’s free to compare and
                there’s no obligation to sign up. In the unlikely event that they can’t save you money, at least you’ll
                have peace of mind that your policy is still competitive.
                <br />
                <br />
                They compare hundreds of policies from some of Australia’s biggest for-profit and not-for-profit
                insurers, with <strong>cover starting for as little as $2.93 per day</strong> - and that’s for a
                hospital and extras combined policy!
              </p>

              <div className="article-separator">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="article-widget-freebies">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-img">
                          <img src="/static/img/articles/type-2/firs-aid-kit.png" alt="First Aid Kit Free" />
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
                      <img src="/static/img/articles/type-2/icons/free.svg" alt="Free" />
                      <h5>210 PCS Emergency First Aid Kit - Home, Car & Travel</h5>
                    </div>
                    <p>
                      Get this deluxe 210 piece first aid kit FREE when you switch and save with Health Insurance
                      Comparison. While stocks last only.
                    </p>
                    <a
                      href={mainlink}
                      className="btn btn-primary btn-circle"
                      onClick={() => logEvent('Clicked Freebies CTA')}>
                      Compare Now
                    </a>
                  </div>
                </div>
              </div>

              <h4>Compare, switch, and save</h4>
              <p>
                How many times have you told yourself “I really ought to compare my health insurance” and then gone on
                paying the ‘lazy tax’? Health Insurance Comparison saved their average customer $357.95 in 2020. If you
                haven’t reviewed your cover in the last 12 months, there’s a very good chance they can do the same for
                you.
                <br />
                <br />
                And remember, as a special deal for Count Every Penny readers only, you’re entitled to a free 210 piece
                first aid kit when you switch and save in January. Enter your details below and see how much you could
                be saving today.
              </p>

              <h4>Get Started Now:</h4>
              <p>
                <strong>Step 1</strong>: Select your <strong>state below.</strong>
                <br />
                <strong>Step 2</strong>: After answering a few questions, you will have the opportunity to compare
                quotes in your area and could be eligible for significant savings.
              </p>
              {!customMap && (
                <AustraliaState
                  onClick={() => logEvent('Clicked State Map CTA')}
                  link={mainlink}
                  colors={{
                    WA: '#1D83E2',
                    NT: '#4A9CE8',
                    NSW: '#1D83E2',
                    VIC: '#1769B5',
                    TAS: '#114F88',
                    QLD: '#A5CDF3',
                    SA: '#77B5EE'
                  }}
                  buttonType="btn-circle"
                />
              )}
              {customMap !== false && customMap}
            </div>
          </div>
          <div className="col-lg-3">
            <aside className="article-aside">
              <AgesCTA onClick={() => logEvent('Clicked Aside Age CTA')} link={mainlink} type="1" />
              <div className="article-aside-rating text-center px-lg-0 px-5 pb-5">
                <img
                  src="/static/img/articles/type-2/rating/aside.png"
                  alt="Rating"
                  className="w-100 px-lg-0 px-md-5 px-0"
                />
              </div>
            </aside>
          </div>
        </div>
      </article>
      <style jsx>
        {`
          body,
          .article-content,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            font-family: 'Montserrat', sans-serif !important;
          }
          .article-meta__toolbar .btn:not(:first-child) {
            margin-left: -2px !important;
          }
        `}
      </style>
    </>
  )
}

export default DeathByThousandCut
