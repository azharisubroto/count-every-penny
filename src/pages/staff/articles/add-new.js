import { useState } from 'react'
import Head from 'next/head'
import DashboardLayout from '@/layout/DashboardLayout'
import TextField from '@/components/form/TextField'
import Button from '@material-ui/core/Button'
//import fire from '@/utils/fire-config'
import CepEditor from '@/components/CepEditor'

export default function addNewArticle() {
  const [title, setTitle] = useState('')
  //const [content, setContent] = useState('')

  // Handle Submission
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   fire.firestore().collection('blog').add({
  //     title: title,
  //     content: content
  //   })
  //   console.log('posted')
  //   //setTitle('')
  //   //setContent('')
  // }

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
          <div className="col-md-3">
            <Button
              className="py-3 mb-2"
              type="submit"
              color="primary"
              variant="contained"
              size="large"
              disableElevation
              fullWidth>
              Publish
            </Button>
          </div>
        </div>

        <hr />

        <div className="mb-4 mt-4">
          <div className="text-18 fw-700">Title</div>
          <TextField
            placeholder="Article Title...."
            color="secondary"
            variant="outlined"
            value={title}
            onChange={({ target }) => setTitle(target.value)}></TextField>
        </div>
        <div>
          <div className="text-18 fw-700">Content</div>
          <CepEditor />
        </div>
      </DashboardLayout>
    </>
  )
}
