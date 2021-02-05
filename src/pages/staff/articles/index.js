import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import DashboardLayout from '@/layout/DashboardLayout'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import fire from '@/utils/fire-config'

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

const articles = process.env.article_list

export default function ArticleList() {
  const classes = useStyles()
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    fire
      .firestore()
      .collection('blog')
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        console.log(blogs)
        setPosts(blogs)
      })
  }, [])

  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <DashboardLayout>
        <h3>Dynamic Articles</h3>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Title</strong>
                </TableCell>

                <TableCell align="right">
                  <strong>Action</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {posts.map((article) => {
                return (
                  <TableRow key={article.slug}>
                    <TableCell component="th" scope="row">
                      {article.title}
                    </TableCell>
                    <TableCell align="right">
                      <Link color="secondary" href={`/lp-articles/${article.slug}`}>
                        <a className="btn btn-success">View</a>
                      </Link>
                      {'  '}
                      <Link color="secondary" href={`./articles/edit/${article.id}`}>
                        <a className="btn btn-text btn-secondary">Edit</a>
                      </Link>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <h3 className="mt-5">Static Native Articles</h3>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Title</strong>
                </TableCell>
                <TableCell align="left">
                  <strong>Link</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {articles.map((article) => {
                if (article.link != '/') {
                  return (
                    <TableRow key={article.link}>
                      <TableCell component="th" scope="row">
                        {article.name}
                      </TableCell>
                      <TableCell align="left">
                        <Link color="secondary" href={`${article.link}`}>
                          <a>{article.link}</a>
                        </Link>
                      </TableCell>
                    </TableRow>
                  )
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </DashboardLayout>
    </>
  )
}
