import Link from 'next/link'

const DocLayout = ({ children, ...other }) => {
  const menu = [
    {
      slug: '/',
      name: 'Home'
    },
    {
      slug: 'article-components',
      name: 'Article Components'
    },
    {
      slug: 'general-components',
      name: 'General Components'
    }
  ]

  return (
    <>
      <main {...other}>
        <section>
          <div className="container-fluid">
            <div className="row">
              {/* Menu */}
              <div className="col-md-2">
                <div className="doc-sidebar">
                  <ul className="doc-list">
                    {menu.map((item, i) => (
                      <li className="doc-list-item" key={`menu-${i}`}>
                        <Link href={'/dev-doc/' + item.slug} passHref>
                          <a>{item.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Content Children  */}
              <div className="col-md-10">
                <div className="py-5 px-md-4">{children}</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        section {
          min-height: 100vh;
          font-size: 16px;
          line-height: 28px;
        }
        .doc-sidebar {
          background: #f6f6f6;
          padding: 30px 0;
        }
        .doc-sidebar,
        .container-fluid,
        .container-fluid > .row {
          height: 100%;
          min-height: 100vh;
        }
        .doc-list {
          list-style: none;
          li {
            display: block;
            padding: 10px;
            font-size: 16px;
          }
        }
        h3,
        h4 {
          margin: 30px 0 10px;
        }
        pre {
          background: #f7f7f7;
          padding: 5px 10px;
          border-radius: 5px;
          line-height: 1.5;
        }
      `}</style>
    </>
  )
}

export default DocLayout
