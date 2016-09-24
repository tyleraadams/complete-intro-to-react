const React = require('react')
// stateless componenet
const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.object
}

module.exports = Layout

