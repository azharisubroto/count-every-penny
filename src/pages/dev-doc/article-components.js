import Head from 'next/head'
import reactElementToJSXString from 'react-element-to-jsx-string'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import DocsLayout from '@/layout/Docs'
import VideoCard from '@/components/Articles/VideoCard'
import ArticleAuthor from '@/components/Articles/ArticleAuthor'
import AustraliaState from '@/components/Articles/Cta/AustraliaState'
import PremiumIncrease from '@/components/Articles/PremiumIncrease'
import LifeStageStack from '@/components/Articles/LifeStageStack'
import WomTestimonial from '@/components/Articles/WomTestimonial'
import ProductReview from '@/components/Articles/ProductReview'
import FundsList from '@/components/Articles/Cta/FundsList'
import FundSelect from '@/components/Articles/Cta/FundSelect'
import FreebiesCTA from '@/components/Articles/Cta/FreebiesCTA'

const ar_components = [
  {
    name: 'VideoCard',
    import: "import VideoCard from '@/components/Articles/VideoCard'",
    preview: (
      <VideoCard
        videoID="7QltMeIbkaM"
        headline="My video card headline"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit"
      />
    )
  },
  {
    name: 'ArticleAuthor',
    import: "import ArticleAuthor from '@/components/Articles/ArticleAuthor'",
    preview: <ArticleAuthor isamp={false} avatar="/static/img/audrea.webp" name="Audrea B." date="10th January 2021" />
  },
  {
    name: 'AustraliaState',
    import: "import AustraliaState from '@/components/Articles/cta/AustraliaState'",
    preview: (
      <AustraliaState
        disableElevation={true}
        infoText="Australia: We saved our average customer $357.95 on their annual premium!"
        colors={{
          WA: '#E94A73',
          NT: '#23ABD1',
          NSW: '#77B5EE',
          VIC: '#23ABD1',
          TAS: '#07AF43',
          QLD: '#E0960B',
          SA: '#07AF43'
        }}
        dark={true}
        background="#0C345A"
        ctaColor="#F7CD5C"
        ctaProps={{
          style: {
            display: 'none'
          }
        }}
        link="/form/step1"
        isamp={false}
      />
    )
  },
  {
    name: 'PremiumIncrease',
    import: "import PremiumIncrease from '@/components/Articles/PremiumIncrease'",
    preview: <PremiumIncrease link="/form/step1" />
  },
  {
    name: 'LifeStageStack',
    import: "import LifeStageStack from '@/components/Articles/LifeStageStack'",
    preview: <LifeStageStack link="/form/step1" />
  },
  {
    name: 'WomTestimonial',
    import: "import WomTestimonial from '@/components/Articles/WomTestimonial'",
    preview: (
      <WomTestimonial
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur "
        username="Diana W"
      />
    )
  },
  {
    name: 'ProductReview',
    import: "import ProductReview from '@/components/Articles/ProductReview'",
    preview: <ProductReview />
  },
  {
    name: 'FundsList',
    import: "import FundsList from '@/components/Articles/Cta/FundsList'",
    preview: (
      <>
        {/* Customize */}
        <h5 className="mt-4">Custom Markup</h5>
        <div className="card px-4 py-4 mt-4">
          <h4 className="text-20 lh-20 mt-0 text-center fw-700 mb-3">What is your current Health fund?</h4>

          <FundsList link="/form/step1" />
        </div>
      </>
    )
  },
  {
    name: 'FundSelect',
    import: "import FundSelect from '@/components/Articles/Cta/FundSelect'",
    preview: (
      <div className="card px-4 py-4">
        <strong className="text-22 lh-30 mb-3 text-center fw-600">Select your fund</strong>
        <FundSelect />
      </div>
    )
  },
  {
    name: 'FreebiesCTA',
    import: "import FreebiesCTA from '@/components/Articles/Cta/FreebiesCTA'",
    preview: <FreebiesCTA />
  }
]

const articleComponents = () => {
  return (
    <>
      <Head>
        <title>Article Components</title>
      </Head>
      <DocsLayout>
        <div className="row">
          <div className="col-md-8">
            {ar_components.map((item) => (
              <div id={item.name.replace(' ', '-').toLocaleLowerCase()} className="card px-4 py-3 mb-5" key={item.name}>
                <h4 className="mt-0 mb-0">{item.name}</h4>
                <hr />

                {item.preview}

                <h6 className="mt-3">Usage:</h6>

                <SyntaxHighlighter
                  key={'code-' + item.name}
                  language="javascript"
                  showLineNumbers
                  style={atomOneDarkReasonable}
                  wrapLines={false}>
                  {`${item.import}\n
                  export default function App() {
                    return (
                      ${reactElementToJSXString(item.preview)
                        .replace(/^ {2}/gm, '      ')
                        .replace('\n/>', '\n    />')
                        .replace('\n</div>', '\n    </div>')
                        .replace('\n</>', '\n    </>')}
                      )
                    }
                    `.replace(/^ {18}/gm, '')}
                </SyntaxHighlighter>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="sticky">
              <h6 className="mt-0">Content</h6>
              <ul className="indexmenu">
                {ar_components.map((item) => (
                  <li key={item.name}>
                    <a href={`#${item.name}`.replace(' ', '-').toLocaleLowerCase()}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DocsLayout>

      <style jsx>{`
        ul {
          list-style: none;

          li {
            margin-bottom: 10px;
          }
        }
        h4 {
          color: #407a8b;
        }
        .card {
          background: #f8f8f8;
        }
        .indexmenu {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .sticky {
          position: sticky;
          top: 20px;
        }

        strong {
          font-weight: 700;
        }
      `}</style>
    </>
  )
}

export default articleComponents
