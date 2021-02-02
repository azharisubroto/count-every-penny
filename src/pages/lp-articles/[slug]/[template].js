import Article from '@/layout/Article'
import fire from '@/utils/fire-config'

export default function deathbythousandcuts({ data }) {
  return (
    <>
      <Article
        title="Death by a thousand cuts - how to stop your health insurer bleeding you dry as Aussies get stung with a second
        rate `rise` in 6 months"
        content={
          <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        }
      />
    </>
  )
}

export async function getStaticPaths() {
  return { paths: [], fallback: true }
}

export async function getStaticProps({ params }) {
  try {
    const doc = await fire
      .firestore()
      .collection('blog')
      .where('slug', '==', params.slug)
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

    return {
      // props: {},
      props: doc ? { data } : {},
      revalidate: 100
    }
  } catch (error) {
    return {
      props: {}
    }
  }
}
