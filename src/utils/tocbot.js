import React from 'react'
import * as tocbot from 'tocbot'

const TOCBOT_OPTIONS = {
  tocSelector: '.js-toc',
  contentSelector: '.js-toc-content',
  headingSelector: 'h2, h3, h4',
  positionFixedSelector: '.js-toc',
  includeHtml: true,
  hasInnerContainers: true,
  headingsOffset: 40,
  scrollSmoothOffset: -40
}

export default class Tocbot extends React.Component {
  componentDidMount() {
    if (tocbot) {
      tocbot.init(Object.assign({}, TOCBOT_OPTIONS, this.props))
    }
    // let pageAside = document.querySelector('#page-aside')
    // let footer = document.querySelector('#footer')

    // function checkOffset() {
    //   function getRectTop(el) {
    //     let rect = el.getBoundingClientRect()
    //     return rect.top
    //   }

    //   if (
    //     getRectTop(pageAside) + document.body.scrollTop + pageAside.offsetHeight >=
    //     getRectTop(footer) + document.body.scrollTop - 10
    //   )
    //     pageAside.classList.add('position-absolute')
    //   if (document.body.scrollTop + window.innerHeight < getRectTop(footer) + document.body.scrollTop)
    //     pageAside.classList.remove('position-absolute') // restore when you scroll up

    //   // pageAside.innerHTML = document.body.scrollTop + window.innerHeight
    // }

    // document.addEventListener('scroll', function () {
    //   checkOffset()
    // })
  }

  componentWillUnmount() {
    if (tocbot) {
      tocbot.destroy()
    }
  }

  render() {
    return null
  }
}
