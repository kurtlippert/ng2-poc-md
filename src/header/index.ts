import { Component } from '@angular/core'
import { div, tag, span } from '../libs/typedom'
import { style } from 'typestyle'
import { sideNav } from '../sidenav'

const header = style({ color: 'blue' })

@Component({
    selector: 'app-header',
    template:
        div({ class: header }, [ 'the app-header text' ])
})


export class HeaderComponent {
}
