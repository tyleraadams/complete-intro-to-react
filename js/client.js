var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render() {
    return(
      div(null,
        h1(null, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle);
var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Props are great'}),
    React.createElement(MyTitle, {title: 'use your props like a big boy'})
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
