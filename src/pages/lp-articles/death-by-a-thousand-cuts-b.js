import Article2 from '@/layout/Article2'
import DeathByThousandcuts from '@/components/ArticleContent/DeathByThousandcuts'

export default function deathbythousandcuts() {
  return (
    <>
      <Article2
        title="Death by a thousand cuts - how to stop your health insurer bleeding you dry as Aussies get stung with a second
        rate rise in 6 months"
        content={<DeathByThousandcuts />}
      />
    </>
  )
}
