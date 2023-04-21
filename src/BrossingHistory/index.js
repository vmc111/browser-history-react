import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem/index'

class BrowsingHistory extends Component {
  constructor(props) {
    super(props)

    // Step 1: Initialize state with the list from props
    this.state = {
      list: props.history,
    }
  }

  render() {
    const {list} = this.state
    let historyObject
    if (list.length === 0) {
      historyObject = <h1>There is no history to show</h1>
    } else {
      historyObject = list.map(eachItem => (
        <HistoryItem item={eachItem} key={eachItem.id} />
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
              className="input-element"
              type="text"
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
