import * as test from 'tape'
import { div, tag } from './typedom'

test('defined attribute', (t: test.Test) => {
    t.equal(div({ class: 'non-class' }, [ 'this is a div' ]),
            '<div class=\'non-class\'>this is a div</div>')

    t.end()
})

test('custom attributes', (t: test.Test) => {
    t.equal(div({ attr: 'custom-attr=\'customattr\'' }, [ 'this is a div with a custom attribute' ]),
            '<div custom-attr=\'customattr\'>this is a div with a custom attribute</div>')

    t.end()
})

test('custom w/ defined', (t: test.Test) => {
    t.equal( div({ class: 'non-class', attr: 'custom-attr=\'customattr\'' }, [ 'this is a div with a custom attribute' ]),
            '<div class=\'non-class\' custom-attr=\'customattr\'>this is a div with a custom attribute</div>')

    t.end()
})

test('missing attributes', (t: test.Test) => {
    t.equal(div({}, [ 'this is a div with no attributes' ]),
            '<div>this is a div with no attributes</div>')

    t.end()
})

test('empty div', (t: test.Test) => {
    t.equal(div({}),
            '<div></div>')

    t.end()
})

test('custom tag', (t: test.Test) => {
    t.equal(tag('custom-tag', {}),
            '<custom-tag></custom-tag>')

    t.end()
})

test('custom tag w/ attributes and content', (t: test.Test) => {
    t.equal(tag('custom-tag', { class: 'class', attr: 'attribute', nothin: 'something' }, [ 'custom tag content' ]),
            '<custom-tag class=\'class\' attr=\'attribute\' nothin=\'something\'>custom tag content</custom-tag>')

    t.end()
})

test('custom tag w/ attributes and nested html content', (t: test.Test) => {
    t.equal(tag('custom-tag', { class: 'class', attr: 'attribute', nothin: 'something' }, [ div({}, [ 'custom tag content' ]) ]),
            '<custom-tag class=\'class\' attr=\'attribute\' nothin=\'something\'><div>custom tag content</div></custom-tag>')

    t.end()
})
