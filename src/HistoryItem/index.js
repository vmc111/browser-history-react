import './index.css'

const HistoryItem = props => {
  const {item, key, deleteItem} = props
  const deleteFun = () => {
    deleteItem(item.id)
  }

  return (
    <li value={key} className="history-element">
      <p>{item.timeAccessed}</p>
      <div className="logo-title">
        <div className="titles">
          <img src={item.logoUrl} alt="domain logo" className="icon" />
          <p className="item-title">{item.title}</p>
          <p className="item-url">{item.domainUrl}</p>
        </div>
        <button onClick={deleteFun} type="button" data-testid="delete">
          <img
            data-testid="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
