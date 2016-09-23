const React = require('react')
const data = require('../public/data')

// stateless componenet
const Search = () => (
  <div className='container'>
    {data.shows.map((show) => {
      return <h3>{show.title}</h3>
    })}
  </div>
)

module.exports = Search
