import { Component } from '@angular/core'
import { div, tag, span } from '../libs/typedom'
import { style } from 'typestyle'

const items = [1, 2, 3, 4, 5]

export const sideNav = style({ color: 'red' })

@Component({
  selector: 'app-sidenav',
  template:
    div({}, [
      div({ attr: 'fake-attr="attr"', class: sideNav }, [ 'Hello World!' ]),
      items.map(i => div({}, [ 'repeated 5 times' ])).join(''),
      span({ attr: '(click)=\'updatePerson("name")\'', class: sideNav }, [ 'clicking this will update person' ])
    ]),
})

export class SideNavComponent {
  person = {
    name: 'Joh Doe',
    address: {
      street: '1 happy st.',
      zip: 27638
    }
  }

  updatePerson(name: string) { console.log(name) }
}
