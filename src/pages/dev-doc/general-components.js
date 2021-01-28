import Head from 'next/head'
import DocsLayout from '@/layout/Docs'

export default function devdocsIndex() {
  return (
    <>
      <Head>
        <title>Dev Documentation</title>
      </Head>
      <DocsLayout>
        <section>
          <h1>General Components</h1>
          <p>Coming Soon</p>
        </section>
      </DocsLayout>
    </>
  )
}
