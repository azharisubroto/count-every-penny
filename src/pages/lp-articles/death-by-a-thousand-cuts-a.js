import DeathByThousandcuts from '@/components/Articles/DeathByThousandcuts'
import Article from '@/layout/Article'

export default function deathbythousandcutsA() {
  return (
    <>
      <DeathByThousandcuts />
      <style jsx global>{`
        body {
          background: #f3f3f3 !important;
        }
      `}</style>
    </>
  )
}

deathbythousandcutsA.Layout = Article
