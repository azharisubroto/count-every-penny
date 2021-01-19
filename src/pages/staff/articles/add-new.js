import { useState } from 'react'
import Head from 'next/head'
import DashboardLayout from '@/layout/DashboardLayout'
import TextField from '@/components/form/TextField'
import fire from '@/utils/fire-config'
import CepEditor from '@/components/CepEditor'

export default function addNewArticle() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  // Handle Submission
  const handleSubmit = (event) => {
    event.preventDefault()
    fire.firestore().collection('blog').add({
      title: title,
      content: content
    })
    console.log('posted')
    //setTitle('')
    //setContent('')
  }

  return (
    <>
      <Head>
        <title>Add new article</title>
      </Head>

      <DashboardLayout>
        <h3>Add New Article</h3>

        <CepEditor />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            Title
            <br />
            <TextField
              color="secondary"
              variant="outlined"
              value={title}
              onChange={({ target }) => setTitle(target.value)}></TextField>
          </div>
          <div>
            Content
            <br />
            <TextField
              value={content}
              onChange={({ target }) => setContent(target.value)}
              multiline
              variant="outlined"
              rows={4}></TextField>
          </div>
          <br />
          <button className="py-3 d-block w-100">Save</button>
        </form>
      </DashboardLayout>
    </>
  )
}
