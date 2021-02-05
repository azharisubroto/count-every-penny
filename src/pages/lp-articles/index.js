import Link from 'next/link'
import Article from '@/layout/Article'

export default function lpArticleIndex() {
  return (
    <>
      <Article
        title="Death by a thousand cuts - how to stop your health insurer bleeding you dry as Aussies get stung with a second
        rate rise in 6 months"
        content={
          <div className="card">
            <div className="card-body">
              <h1>Index</h1>
              {process.env.article_list.length > 0 && (
                <ul>
                  {process.env.article_list.map((item) => {
                    if (item.link != '/') {
                      const path = `${item.link}`
                      return (
                        <li className="mb-3" key={item.link}>
                          <Link href={path}>
                            <a className="text-16">{path}</a>
                          </Link>
                        </li>
                      )
                    }
                  })}
                </ul>
              )}
            </div>
          </div>
        }
      />
    </>
  )
}
