var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render() {
    return(
      div(null,
        h1(null, 'CHECK OUT THIS STUFF')
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle);
var MyFirstComponent = (
  div(null,
    MyTitleFactory(null),
    React.createElement(MyTitle, null)
  )
)
ReactDOM.render(MyFirstComponent, document.getElementById('app'))
