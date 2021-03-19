import { shortcodes, shortcodesBrackets, shortcodesSingleLine } from '@/utils/shortcodes'

const parseShortcodesInString = (stringToParse) => {
  let sortedShortcodes = {}
  let postContent = []

  // ### Parse shortcode attributes
  //
  // Shortcodes accept many types of attributes. These can chiefly be
  // divided into named and numeric attributes:
  //
  // Named attributes are assigned on a key/value basis, while numeric
  // attributes are treated as an array.
  //
  // Named attributes can be formatted as either `name="value"`,
  // `name='value'`, or `name=value`. Numeric attributes can be formatted
  // as `"value"` or just `value`.
  const parseShortcodeAttributes = (attributesString) => {
    // eslint-disable-next-line max-len
    let attributePattern = /([\w-]+)\s*=\s*"([^"]*)"(?:\s|$)|([\w-]+)\s*=\s*'([^']*)'(?:\s|$)|([\w-]+)\s*=\s*([^\s'"]+)(?:\s|$)|"([^"]*)"(?:\s|$)|(\S+)(?:\s|$)/g
    // Map zero-width spaces to actual spaces.
    attributesString = attributesString.replace(/[\u00a0\u200b]/g, ' ')

    let named = {}
    let numeric = []
    let match
    while ((match = attributePattern.exec(attributesString))) {
      if (match[1]) {
        named[match[1].toLowerCase()] = match[2]
      } else if (match[3]) {
        named[match[3].toLowerCase()] = match[4]
      } else if (match[5]) {
        named[match[5].toLowerCase()] = match[6]
      } else if (match[7]) {
        numeric.push(match[7])
      } else if (match[8]) {
        numeric.push(match[8])
      }
    }
    return {
      named,
      numeric
    }
  }

  const returnShortcodeObject = (
    name,
    indexStart,
    indexEnd,
    type,
    attributesNamed = {},
    attributesNumeric = [],
    content = ''
  ) => {
    return {
      attributes: {
        named: attributesNamed,
        numeric: attributesNumeric
      },
      content,
      indices: {
        end: indexEnd,
        start: indexStart
      },
      name,
      type
    }
  }

  // Return array of shortcodes with their names, attribute, content,
  // and start and end indices within the string searched
  const findBracketShortcodes = (stringToSearch) => {
    const findShortcodeRegExp = new RegExp(
      '\\[(\\[?)(' +
        Object.keys(shortcodesBrackets).join('|') +
        ')(?![\\w-])([^\\]\\/]*(?:\\/(?!\\])[^\\]\\/]*)*?)(?:(\\/)\\]|\\](?:([^\\[]*(?:\\[(?!\\/\\2\\])[^\\[]*)*)(\\[\\/\\2\\]))?)(\\]?)',
      'g'
    )
    let match
    let matches = []
    while ((match = findShortcodeRegExp.exec(stringToSearch)) !== null) {
      // If we matched an escaped shortcode, skip it.
      if (match[1] === '[' && match[7] === ']') {
        continue
      }
      let matchIndex = match.index
      let matchLastIndex = findShortcodeRegExp.lastIndex - 1
      // If we matched a leading `[`, increment the match's starting index.
      if (match[1]) {
        matchIndex++
      }
      // If we matched a trailing `]`, decrement the match's ending index.
      if (match[7]) {
        matchLastIndex--
      }
      const shortcodeAttributes = parseShortcodeAttributes(match[3])
      matches.unshift(
        returnShortcodeObject(
          match[2],
          matchIndex,
          matchLastIndex,
          shortcodesBrackets[match[2]].type,
          shortcodeAttributes['named'],
          shortcodeAttributes['numeric'],
          match[5]
        )
      )
    }
    return matches
  }

  const findSingleLineShortcodes = (stringToSearch, shortcodesSingleLine) => {
    let matches = []
    for (const prop in shortcodesSingleLine) {
      // eslint-disable-next-line no-prototype-builtins
      if (shortcodesSingleLine.hasOwnProperty(prop)) {
        const shortcodeObj = shortcodesSingleLine[prop]
        for (const regexpString of shortcodeObj.regexp) {
          const findShortcodeRegExp = new RegExp(regexpString, 'gi')
          let match
          while ((match = findShortcodeRegExp.exec(stringToSearch)) !== null) {
            let matchIndex = match.index
            let matchLastIndex = findShortcodeRegExp.lastIndex - 1
            matches.unshift(
              returnShortcodeObject(prop, matchIndex, matchLastIndex, shortcodeObj.type, {
                [shortcodeObj.attributesName]: match[shortcodeObj.matchPosition]
              })
            )
          }
        }
      }
    }
    return matches
  }

  const foundShortcodesBrackets = findBracketShortcodes(stringToParse)
  const foundShortcodesSingle = findSingleLineShortcodes(stringToParse, shortcodesSingleLine)
  const foundShortcodes = foundShortcodesBrackets.concat(foundShortcodesSingle)

  const sortShortcodes = (foundShortcodes) => {
    foundShortcodes.map((item) => {
      const { indices } = item
      sortedShortcodes[indices.start] = item
    })
  }

  sortShortcodes(foundShortcodes)

  const shortcodeListToReplace = Object.keys(sortedShortcodes)

  const returnContentObject = (content = '', type = 'string', name, attributesNamed = {}, attributesNumeric = []) => {
    return {
      type,
      content,
      name,
      attributes: {
        named: attributesNamed,
        numeric: attributesNumeric
      }
    }
  }

  if (shortcodeListToReplace.length === 0) {
    postContent.push(returnContentObject(stringToParse))
  }

  shortcodeListToReplace.map((shortcode, i) => {
    const currShortcode = sortedShortcodes[shortcode]
    const nextShortCode = sortedShortcodes[shortcodeListToReplace[i + 1]]
    const shortcodeFunction = shortcodes[currShortcode.name].component
    let replacement
    if (currShortcode.type === 'react') {
      replacement = returnContentObject(
        currShortcode.content,
        'component',
        currShortcode.name,
        currShortcode.attributes.named,
        currShortcode.attributes.numeric
      )
    } else {
      const replacementString = shortcodeFunction(currShortcode.attributes, currShortcode.content)
      replacement = returnContentObject(replacementString)
    }
    if (i === 0) {
      postContent.push(returnContentObject(stringToParse.slice(0, currShortcode.indices.start)))
      postContent.push(replacement)
      if (shortcodeListToReplace.length === 1) {
        postContent.push(returnContentObject(stringToParse.slice(currShortcode.indices.end + 1, stringToParse.length)))
      } else {
        postContent.push(
          returnContentObject(stringToParse.slice(currShortcode.indices.end + 1, nextShortCode.indices.start))
        )
      }
    } else if (i === shortcodeListToReplace.length - 1) {
      postContent.push(replacement)
      postContent.push(returnContentObject(stringToParse.slice(currShortcode.indices.end + 1, stringToParse.length)))
    } else {
      postContent.push(replacement)
      postContent.push(
        returnContentObject(stringToParse.slice(currShortcode.indices.end + 1, nextShortCode.indices.start))
      )
    }
  })

  return postContent
}

export default parseShortcodesInString
