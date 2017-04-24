
import * as test from 'tape'
import { div, tag } from './typedom'

test('defined attribute', (t: test.Test) => {
    t.equal('<div class=\'non-class\'>this is a div</div>',
            div({ class: 'non-class' }, [ 'this is a div' ]))

    t.end()
})

test('custom attributes', (t: test.Test) => {
    t.equal('<div custom-attr=\'customattr\'>this is a div with a custom attribute</div>',
            div({ attr: 'custom-attr=\'customattr\'' }, [ 'this is a div with a custom attribute' ]))

    t.end()
})

test('custom w/ defined', (t: test.Test) => {
    t.equal('<div class=\'non-class\' custom-attr=\'customattr\'>this is a div with a custom attribute</div>',
            div({ class: 'non-class', attr: 'custom-attr=\'customattr\'' }, [ 'this is a div with a custom attribute' ]))

    t.end()
})

test('missing attributes', (t: test.Test) => {
    t.equal('<div>this is a div with no attributes</div>',
            div({}, [ 'this is a div with no attributes' ]))

    t.end()
})

test('empty div', (t: test.Test) => {
    t.equal('<div></div>',
            div({}))

    t.end()
})

test('custom tag', (t: test.Test) => {
    t.equal('<custom-tag></custom-tag>',
            tag('custom-tag')({}))
})
