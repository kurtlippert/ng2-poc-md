interface BaseAttributes {
  class?: string,
  id?: string,
  style?: string,
  onclick?: string,
  ondbclick?: string,
  onmousedown?: string,
  onmousemove?: string,
  onmouseout?: string,
  onmouseover?: string,
  onmouseup?: string,
  onkeydown?: string,
  onkeypress?: string,
  onkeyup?: string,
  attr?: string,
}

interface BodyTag extends BaseAttributes {
    onload?: string,
    onunload?: string
}

interface TagsWithAddedOnAbort extends BaseAttributes {
    onabort?: string
}

interface TagsWithAddedOnBlurFocus extends BaseAttributes {
    onblur?: string
    onfocus?: string
}

interface TagsWithAddedOnChange extends TagsWithAddedOnBlurFocus {
    onchange?: string
}

interface TagsWithAddedOnSelect extends TagsWithAddedOnChange {
    onselect?: string,
}


// complicated attribute parsing logic
// i.e. sometimes we include 
const attributeParse = <T>(attributes: T, content: string[]) =>
  Object.entries(attributes)
    .map((entry: [string, string]) =>
      entry[0] === 'attr' ?
      ` ${entry[1]}` :
      ` ${entry[0]}='${entry[1]}'`)
        .join('')

// helper function for quickly adding html elements (div, span, ul, etc.)
// returning a typed function that accepts the attributes and content for a tag
const htmltag = <T>(type: string) =>
  (attributes: T, content?: string[]) => {
    content = content ? content : []
    return `<${type + attributeParse<T>(attributes, content)}>${content.join('')}</${type}>`
  }

// for when a user wants to create custom tags
// TODO: attribute logic in separate function
// TODO: consider re-formate for readability
// NOTE: chose not to re-use 'htmltag' because we lose our typings in the currying process
export const tag = (type: string, attributes: object, content?: string[]) => {
    content = content ? content : []
    return (
        `<${type + Object.entries(attributes).map((entry: [string, string]) =>
            ` ${entry[0]}='${entry[1]}'`).join('')}>${content.join('')}</${type}>`
    )
}

// tag helpers
// NOTE: some tags offer different attributes, hence the generics

// tag helpers with just the base attributes
export const div = htmltag<BaseAttributes>('div')
export const span = htmltag<BaseAttributes>('span')

export const ul = htmltag<BaseAttributes>('ul')
export const li = htmltag<BaseAttributes>('li')

export const table = htmltag<BaseAttributes>('table')
export const tbody = htmltag<BaseAttributes>('tbody')
export const td = htmltag<BaseAttributes>('td')
export const tr = htmltag<BaseAttributes>('tr')
export const thead = htmltag<BaseAttributes>('thead')

export const h1 = htmltag<BaseAttributes>('h1')
export const h2 = htmltag<BaseAttributes>('h2')
export const h3 = htmltag<BaseAttributes>('h3')
export const h4 = htmltag<BaseAttributes>('h4')
export const h5 = htmltag<BaseAttributes>('h5')
export const h6 = htmltag<BaseAttributes>('h6')
export const hr = htmltag<BaseAttributes>('hr')

export const fieldset = htmltag<BaseAttributes>('fieldset')
export const br = htmltag<BaseAttributes>('br')
export const option = htmltag<BaseAttributes>('option')
export const center = htmltag<BaseAttributes>('center')
export const col = htmltag<BaseAttributes>('col')
export const colgroup = htmltag<BaseAttributes>('colgroup')

// tag helpers with added onblur and onfocus
export const a = htmltag<TagsWithAddedOnBlurFocus>('a')
export const button = htmltag<TagsWithAddedOnBlurFocus>('button')
export const form = htmltag<TagsWithAddedOnBlurFocus>('form')
export const label = htmltag<TagsWithAddedOnBlurFocus>('label')

// tag helpers with added onchange (these also add onblur / focus)
export const select = htmltag<TagsWithAddedOnChange>('select')

// tag helpers with added onselect (these also add on blur, focus, select)
export const input = htmltag<TagsWithAddedOnSelect>('input')
export const textarea = htmltag<TagsWithAddedOnSelect>('textarea')
