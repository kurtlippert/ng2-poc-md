
// function tag(type: string, attributes: object, content?: Array<Function> | string): string
// function tag(type: string, content?: Array<Function> | string): string
// function tag(type: string): ((attributes?, content?) => tag(type, attributes, content)) 
// function tag(type, attributes?, content?): any {
//   `<${type} ${Object.keys(attributes).map((key: string) => `${key.replace('_', '-')}='${attributes[key]}'`).join(' ')}>${content}</div>`

// interface tagReturn {
//   function (attributes?: object, content?: Array<Function> | string): string
//   function (content?: Array<Function> | string): string
// }

// function tagReturn(attributes?: object, content?: Array<Function> | string): string
// function tagReturn(content?: Array<Function> | string): string {
// }

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

interface TagsWithAddedOnBlur extends BaseAttributes {
    onblur?: string
}

interface TagsWithAddedOnFocus extends TagsWithAddedOnBlur {
    onfocus?: string
}

interface TagsWithAddedOnChange extends TagsWithAddedOnFocus {
    onchange?: string
}

interface TagsWithAddedOnSelect extends TagsWithAddedOnChange {
    onselect?: string,
}


const attributeParse = <T>(attributes: T, content: string[]) =>
  Object.entries(attributes)
    .map((entry: [string, string]) =>
      entry[0] === 'attr' ?
      ` ${entry[1]}` :
      ` ${entry[0].replace('_', '-')}='${entry[1]}'`)
        .join('')

export const tag = <T>(type: string) =>
  (attributes: T, content?: string[]) => {
    content = content ? content : []
    return `<${type + attributeParse<T>(attributes, content)}>${content.join('')}</${type}>`
  }

// function tag(type: string): ((attributes: Attributes, content?: string[]) => string)
// function tag(type: string): ((content?: string[]) => string) {
//     return (attributes?: Attributes, content?: string[]) =>
//         `<${type + attributeParse(attributes ? attributes : {}, content ? content : [])}>${content.join('')}</${type}>`
// }


export const div = tag<BaseAttributes>('div')
export const span = tag<BaseAttributes>('div')
export const br = tag<BaseAttributes>('div')
export const center = tag<BaseAttributes>('div')
export const col = tag<BaseAttributes>('div')


// div({})
// div({}, [])

// div([ 'string '])
// div([ 'string' ], [ 'string ' ])
