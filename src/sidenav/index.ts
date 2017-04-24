
import { Component } from '@angular/core'
import { div } from '../libs/typedom'
// 
 const items = [1, 2, 3, 4, 5]
// // 
// // function tag(type: string, attributes: object, content?: Array<Function> | string): string
// // function tag(type: string, content?: Array<Function> | string): string
// // function tag(type: string): ((attributes?, content?) => tag(type, attributes, content)) 
// // function tag(type, attributes?, content?): any {
// //   `<${type} ${Object.keys(attributes).map((key: string) => `${key.replace('_', '-')}='${attributes[key]}'`).join(' ')}>${content}</div>`
// 
//  interface tagReturn {
//    function (attributes?: object, content?: Array<Function> | string): string
//    function (content?: Array<Function> | string): string
//  }
// 
// // function tagReturn(attributes?: object, content?: Array<Function> | string): string
// // function tagReturn(content?: Array<Function> | string): string {
// // }
// 
// interface Attributes {
//   class?: string,
//   attr?: string,
// }
// 
// const attributeParse = (attributes: Attributes, content: string[]) =>
//   Object.entries(attributes)
//     .map((entry: [string, string]) =>
//       entry[0] === 'attr' ?
//       ` ${entry[1]}` :
//       ` ${entry[0].replace('_', '-')}='${entry[1]}'`)
//         .join('')
// 
// const tag = (type: string) =>
//   (attributes: Attributes, content: string[]) =>
//     `<${type + attributeParse(attributes, content)}>${content.join('')}</${type}>`
// 
// export const div = tag('div')

// div({ class: 'stuff', prop: 'random_prop=\'randomprop\'' }, [ 'stuff' ])

// div({ class: 'something', attr: 'something else', blah: 'wha??' }, [
//   div({}, [])
// ])

// div({}, 'content')
// div({},
//   div({},
//     div({})
//   ),
//   div({})
// )
//   div({}))

// function div = 
// 
// export const div = (attributes: object, content?: Array<Function> | string) =>
//   `<div ${Object.keys(attributes).map((key: string) => `${key.replace('_', '-')}='${attributes[key]}'`).join(' ')}>${content}</div>`
// 
// export const div = (content?: Array<Function> | string) =>
//   `<div>${content}</div>`


const _template = items.map((i: number) => div({ class: 'non-class', attr: 'fake_attr=\'fakeattr\'' }, [ 'this is a div' ])).join('')

@Component({
  selector: 'app-sidenav',
  template: _template,
})

export class SideNavComponent {
}
