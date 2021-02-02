import { useEditor } from '@craftjs/core'
import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar
} from '@material-ui/core'
import fire from '@/utils/fire-config'
import lz from 'lzutf8'
import TextField from '@/components/form/TextField'
import React, { useState, useEffect } from 'react'

export const Topbar = (props) => {
  const { articleID } = props

  const { actions, query, enabled, canUndo, canRedo } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo()
  }))

  const [title, setTitle] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState()
  const [stateToLoad, setStateToLoad] = useState(null)
  const [loading, setLoading] = useState(false)
  const [isnew, setIsnew] = useState(true)
  const [postdata, setPostdata] = useState({})

  // Check article id
  useEffect(() => {
    if (articleID) {
      setIsnew(false)
      fire
        .firestore()
        .collection('blog')
        .doc(articleID)
        .get()
        .then((blog) => {
          const blogdata = blog.data()
          const decrypted_data = lz.decompress(lz.decodeBase64(blogdata.content))
          actions.deserialize(decrypted_data)
          setTitle(blogdata.title)
          setPostdata(blog.data())
        })
    }
    // fire
    //   .firestore()
    //   .collection('blog')
    //   .onSnapshot((snap) => {
    //     const blogs = snap.docs.map((doc) => ({
    //       id: doc.id,
    //       ...doc.data()
    //     }))
    //     console.log(blogs)
    //     //setBlogs(blogs)
    //   })
  }, [])

  // Save Article
  const saveArticle = (e) => {
    e.preventDefault()
    setLoading(true)
    const json = query.serialize()
    const encoded_content = lz.encodeBase64(lz.compress(json))
    fire
      .firestore()
      .collection('blog')
      .add({
        title: title,
        date: new Date(),
        slug: string_to_slug(title),
        content: encoded_content
      })
      .then((doc) => {
        //console.log(res)
        console.log('Document written with ID: ', doc.id)
        setLoading(false)
      })
  }

  const updateArticle = (e) => {
    e.preventDefault()
    setLoading(true)
    const json = query.serialize()
    const encoded_content = lz.encodeBase64(lz.compress(json))
    fire
      .firestore()
      .collection('blog')
      .doc(articleID)
      .update({
        title: title,
        date: new Date(),
        slug: string_to_slug(title),
        content: encoded_content
      })
      .then(() => {
        setLoading(false)
      })
  }

  // Convert string to slug
  const string_to_slug = (str) => {
    str = str.replace(/^\s+|\s+$/g, '') // trim
    str = str.toLowerCase()

    // remove accents, swap ñ for n, etc
    var from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
    var to = 'aaaaaeeeeiiiioooouuuunc------'

    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
    }

    str = str
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-') // collapse dashes

    return str
  }

  return (
    <>
      <Box mt={0} mb={2}>
        <Grid container alignItems="center">
          <Grid item xs>
            <FormControlLabel
              className="enable-disable-toggle"
              control={
                <Switch
                  checked={enabled}
                  onChange={(_, value) => actions.setOptions((options) => (options.enabled = value))}
                />
              }
              label="Enable"
            />
            <MaterialButton
              className="copy-state-btn"
              size="small"
              variant="outlined"
              color="secondary"
              disabled={!canUndo}
              onClick={() => actions.history.undo()}
              style={{ marginRight: '10px' }}>
              Undo
            </MaterialButton>
            <MaterialButton
              className="copy-state-btn"
              size="small"
              variant="outlined"
              color="secondary"
              disabled={!canRedo}
              onClick={() => actions.history.redo()}
              style={{ marginRight: '10px' }}>
              Redo
            </MaterialButton>
          </Grid>
          <Grid item>
            <MaterialButton
              className="copy-state-btn"
              size="medium"
              variant="contained"
              color="secondary"
              disabled={loading}
              onClick={(e) => {
                if (isnew) {
                  saveArticle(e)
                } else {
                  updateArticle(e)
                }
              }}>
              {loading ? 'Posting...' : 'Save Article'}
            </MaterialButton>
            <MaterialButton
              className="load-state-btn d-none"
              size="small"
              variant="outlined"
              color="secondary"
              onClick={() => setDialogOpen(true)}>
              Load
            </MaterialButton>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="md">
              <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
              <DialogContent>
                <TextField
                  multiline
                  fullWidth
                  placeholder='Paste the contents that was copied from the "Copy Current State" button'
                  size="small"
                  value={stateToLoad || ''}
                  onChange={(e) => setStateToLoad(e.target.value)}
                />
              </DialogContent>
              <DialogActions>
                <MaterialButton onClick={() => setDialogOpen(false)} color="primary">
                  Cancel
                </MaterialButton>
                <MaterialButton
                  onClick={() => {
                    setDialogOpen(false)
                    const json = lz.decompress(lz.decodeBase64(stateToLoad))
                    actions.deserialize(json)
                    setSnackbarMessage('State loaded')
                  }}
                  color="primary">
                  Load
                </MaterialButton>
              </DialogActions>
            </Dialog>
            <Snackbar
              autoHideDuration={1000}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              open={!!snackbarMessage}
              onClose={() => setSnackbarMessage(null)}
              message={<span>{snackbarMessage}</span>}
            />
          </Grid>
        </Grid>
      </Box>

      <TextField
        placeholder="Article Title...."
        color="secondary"
        variant="outlined"
        value={title}
        onChange={({ target }) => setTitle(target.value)}></TextField>

      {postdata.slug && (
        <p className="mt-3">
          Permalink:{' '}
          <a
            href={`/lp-articles/${postdata.slug}`}
            target="_BLANK"
            rel="noreferrer">{`https://counteverypenny.com.au/lp-articles/${postdata.slug}`}</a>
        </p>
      )}
    </>
  )
}
