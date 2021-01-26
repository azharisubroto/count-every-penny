import Article from '@/layout/Article'
import CupOfTea from '@/components/ArticleContent/CupOfTea'

export default function cupOfTeaPage() {
  return (
    <>
      <Article
        title="Does your latest health insurance bill make you want to have a cup of tea, a Bex, and a good lie down? Here’s how to get a fair shake of the sauce bottle"
        content={<CupOfTea />}
      />
    </>
  )
}
