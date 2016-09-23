const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

// stateless componenet
const MyFirstComponent = () => (
  <div>
    <MyTitle title='Whatevs' color='rebeccapurple' />
    <MyTitle title='LOL' color='papayawhip' />
    <MyTitle title='OMG OMG' color='#f06d06' />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
