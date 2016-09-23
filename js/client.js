/* globals React ReactDOM */
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Props are great', color: 'peru'}),
    React.createElement(MyTitle, {title: 'use your props like a big boy', color: 'mediumaquamarine'})
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
