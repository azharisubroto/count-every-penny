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
          <h1>Count Every Penny Documentation</h1>
          <p>Custom Components for Count Every Penny</p>

          <h4>Installation</h4>
          <pre>
            <code>yarn install</code>
          </pre>

          <h4>Development</h4>
          <pre>
            <code>yarn dev</code>
          </pre>
        </section>
      </DocsLayout>
    </>
  )
}
