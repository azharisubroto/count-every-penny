import Article from '@/layout/Article'
import fire from '@/utils/fire-config'
import { Editor, Frame } from '@craftjs/core'
import { Button } from '@/components/editor/Button'
import { Card, CardBottom, CardTop } from '@/components/editor/Card'
import { Container } from '@/components/editor/Container'
import { Text } from '@/components/editor/Text'
import { Author } from '@/components/editor/ArticleAuthor'
import { LifeStageCta1 } from '@/components/editor/LifeStageCta1'
import { VideoCardEditor } from '@/components/editor/VideoCard'
import { PremiumIncreaseEditor } from '@/components/editor/PremiumIncrease'
import { WomTestimonialEditor } from '@/components/editor/WomTestimonial'
import { AustraliaStateEditor } from '@/components/editor/AustraliaState'
import { ProductReviewEditor } from '@/components/editor/ProductReview'
import { FundSelectEditor } from '@/components/editor/FundSelect'
import { FreebiesCTAEditor } from '@/components/editor/FreebiesCTA'
import lz from 'lzutf8'
import { useRouter } from 'next/router'
import React from 'react'

export default function dynamicArticle() {
  const router = useRouter()
  const [data, setData] = React.useState('')
  const [decrypted_data, setDecrypted_data] = React.useState('')
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    if (router.query.slug && !loaded) {
      getContent()
    }
  })

  const getContent = async () => {
    try {
      const doc = await fire
        .firestore()
        .collection('blog')
        .where('slug', '==', router.query.slug)
        .get()
        .then(function (querySnapshot) {
          let val = ''
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.data())
            val = doc.data()
          })
          return val
        })
      // console.log(JSON.stringify(data))
      const { title, content, date, slug } = doc

      const data = {
        title: title,
        content: content,
        date: JSON.stringify(date),
        slug: slug
      }

      setData(data)
      const decrypted_data = data ? lz.decompress(lz.decodeBase64(data.content)) : ''
      setDecrypted_data(decrypted_data)
      setLoaded(true)
    } catch (error) {
      console.log(error)
      setLoaded(true)
    }
  }

  return (
    <>
      <Article
        title={data ? data.title : 'Count Every Penny'}
        content={
          <>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {data != '' && (
              <Editor
                enabled={false}
                resolver={{
                  Card,
                  Button,
                  Text,
                  Container,
                  CardTop,
                  CardBottom,
                  Author,
                  LifeStageCta1,
                  VideoCardEditor,
                  PremiumIncreaseEditor,
                  WomTestimonialEditor,
                  AustraliaStateEditor,
                  ProductReviewEditor,
                  FundSelectEditor,
                  FreebiesCTAEditor
                }}>
                <Frame json={decrypted_data}></Frame>
              </Editor>
            )}
          </>
        }
      />
      <style global jsx>{`
        .medium-editor-element {
          position: relative;
          cursor: pointer;
          pointer-events: none !important;
          &:before {
            content: '';
            position: absolute;
            z-index: 11;
            width: 100%;
            height: 100%;
          }
        }
      `}</style>
    </>
  )
}

// export async function getStaticPaths() {
//   return { paths: [], fallback: true }
// }

// export async function getStaticProps({ params }) {
//   try {
//     const doc = await fire
//       .firestore()
//       .collection('blog')
//       .where('slug', '==', params.slug)
//       .get()
//       .then(function (querySnapshot) {
//         let val = ''
//         querySnapshot.forEach(function (doc) {
//           // doc.data() is never undefined for query doc snapshots
//           //console.log(doc.data())
//           val = doc.data()
//         })
//         return val
//       })
//     // console.log(JSON.stringify(data))
//     const { title, content, date, slug } = doc

//     const data = {
//       title: title,
//       content: content,
//       date: JSON.stringify(date),
//       slug: slug
//     }

//     return {
//       // props: {},
//       props: doc ? { data } : {},
//       revalidate: 100
//     }
//   } catch (error) {
//     return {
//       props: {}
//     }
//   }
// }
