var React = require('react')
var ReactDOM = require('react-dom')

var div = React.DOM.div
var MyTitle = require('./MyTitle')
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Props are great', color: 'peru'}),
    React.createElement(MyTitle, {title: 'use your props like a big boy', color: 'mediumaquamarine'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
