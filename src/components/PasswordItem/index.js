import './index.css'

const PasswordItem = props => {
  const {item, item1, del} = props
  const {id, website, username, password} = item
  const delu = () => {
    del(id)
  }

  return (
    <li className="li-list">
      <div className="contu">{username[0]}</div>
      <div className="contu1">
        <p className="para5">{website}</p>
        <p className="para5">{username}</p>
        {!item1 && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            className="img7"
            alt="stars"
          />
        )}
        {item1 && <p className="para5">{password}</p>}
      </div>
      <button className="button2" type="button" onClick={delu} testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="img6"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
