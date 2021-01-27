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

const ar_components = [
  {
    name: 'Video Card',
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
    name: 'Article Author',
    import: "import ArticleAuthor from '@/components/Articles/ArticleAuthor'",
    preview: <ArticleAuthor isamp={false} avatar="/static/img/audrea.webp" name="Audrea B." date="10th January 2021" />
  },
  {
    name: 'Australia State',
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
        link="https://google.com"
        isamp={false}
      />
    )
  },
  {
    name: 'Premium Increase',
    import: "import PremiumIncrease from '@/components/Articles/PremiumIncrease'",
    preview: <PremiumIncrease link="https://google.com" />
  },
  {
    name: 'Life Stage Stack',
    import: "import LifeStageStack from '@/components/Articles/LifeStageStack'",
    preview: <LifeStageStack link="https://google.com" />
  },
  {
    name: 'Wom Testimonial',
    import: "import WomTestimonial from '@/components/Articles/WomTestimonial'",
    preview: (
      <WomTestimonial
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur "
        username="Diana W"
      />
    )
  },
  {
    name: 'Product Review',
    import: "import ProductReview from '@/components/Articles/ProductReview'",
    preview: <ProductReview />
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
          <div className="col-md-9">
            {ar_components.map((item) => (
              <div id={item.name.replace(' ', '-').toLocaleLowerCase()} className="card px-4 py-3 mb-5" key={item.name}>
                <h4 className="mt-0 mb-0">{item.name}</h4>
                <hr />

                {item.preview}

                <h6 className="mt-3">Usage:</h6>

                <SyntaxHighlighter language="javascript" showLineNumbers style={atomOneDarkReasonable}>
                  {`${item.import}\n
                  export default function App() {
                    return (
                      ${reactElementToJSXString(item.preview).replace(/^ {2}/gm, '      ').replace('\n/>', '\n    />')}
                    )
                  }
                  `.replace(/^ {18}/gm, '')}
                </SyntaxHighlighter>
              </div>
            ))}
          </div>
          <div className="col-md-3">
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
      `}</style>
    </>
  )
}

export default articleComponents
