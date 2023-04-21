import './index.css'

const HistoryItem = props => {
  const {item, key} = props
  console.log(item)

  return (
    <li value={key} className="history-element">
      <p>{item.timeAccessed}</p>
      <div className="logo-title">
        <img src={item.logoUrl} alt="domain logo" className="icon" />
        <div className="titles">
          <p>{item.title}</p>
          <p>{item.domainUrl}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
        />
      </div>
    </li>
  )
}

export default HistoryItem
