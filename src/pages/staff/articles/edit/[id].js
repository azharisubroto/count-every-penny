//import { useEditor } from '@craftjs/core'
import Head from 'next/head'
import DashboardLayout from '@/layout/DashboardLayout'
import CepEditor from '@/components/editor/CepEditor'
import { useRouter } from 'next/router'

export default function addNewArticle() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Edit article</title>
      </Head>

      <DashboardLayout>
        <div className="row align-items-center">
          <div className="col-md-9">
            <h3 className="my-0">Add New Article</h3>
          </div>
        </div>

        <hr />

        <div>{router.query.id && <CepEditor articleid={router.query.id} />}</div>
      </DashboardLayout>
    </>
  )
}
