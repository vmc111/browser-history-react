import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem/index'

class BrowsingHistory extends Component {
  constructor(props) {
    super(props)

    // Step 1: Initialize state with the list from props
    this.state = {
      list: props.history,
      searchInput: '',
    }
  }

  changeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteFun = id => {
    const {list} = this.state

    const newList = list.filter(eachItem => eachItem.id !== id)

    this.setState({list: newList})
  }

  render() {
    const {list, searchInput} = this.state
    const listToShow = list.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    let historyObject
    if (listToShow.length === 0) {
      historyObject = (
        <div className="div-h1">
          <p>There is no history to show</p>
        </div>
      )
    } else {
      historyObject = listToShow.map(eachItem => (
        <HistoryItem
          item={eachItem}
          key={eachItem.id}
          deleteItem={this.deleteFun}
        />
      ))
    }

    return (
      <div className="main-container">
        <div className="nav-bar">
          <img
            className="history-icon"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
          />
          <div className="search-container">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png "
              alt="search"
            />
            <input
              onChange={this.changeInput}
              className="input-element"
              type="search"
              placeholder="Search history"
            />
          </div>
        </div>
        <ul className="list-container">{historyObject}</ul>
      </div>
    )
  }
}

export default BrowsingHistory
