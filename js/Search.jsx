const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

// stateless componenet
class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: 'default search term'
    }

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input type='text' className='search-input' placeholder='Search' value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        </header>
        <div className='shows'>
          {data.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show, index) => <ShowCard {...show} key={index} id={index} />)}
        </div>
      </div>
    )
  }
}

module.exports = Search
