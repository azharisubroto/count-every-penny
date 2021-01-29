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

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
})

const articles = process.env.article_list

export default function ArticleList() {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <DashboardLayout>
        <h3>Static Native Articles</h3>
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
