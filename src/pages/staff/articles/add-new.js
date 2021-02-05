//import { useEditor } from '@craftjs/core'
import Head from 'next/head'
import DashboardLayout from '@/layout/DashboardLayout'
import CepEditor from '@/components/editor/CepEditor'

export default function addNewArticle() {
  return (
    <>
      <Head>
        <title>Add new article</title>
      </Head>

      <DashboardLayout>
        <div className="row align-items-center">
          <div className="col-md-9">
            <h3 className="my-0">Add New Article</h3>
          </div>
        </div>

        <hr />

        <div>
          <CepEditor />
        </div>
      </DashboardLayout>
    </>
  )
}
