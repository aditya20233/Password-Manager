import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {key1: '', key2: '', key3: '', key4: '', key5: [], key6: ''}

  OnChange1 = event => {
    this.setState({key1: event.target.value})
  }

  OnChange2 = event => {
    this.setState({key2: event.target.value})
  }

  OnChange3 = event => {
    this.setState({key3: event.target.value})
  }

  OnChange4 = event => {
    this.setState({key4: event.target.checked})
  }

  OnChange6 = event => {
    this.setState({key6: event.target.value})
  }

  OnSubmit = event => {
    event.preventDefault()
    const {key1, key2, key3} = this.state

    const usersu = {
      id: uuidv4(),
      website: key1,
      username: key2,
      password: key3,
    }
    this.setState(prevState => ({
      key1: '',
      key2: '',
      key3: '',
      key6: '',
      key5: [...prevState.key5, usersu],
    }))
  }

  del = id => {
    const {key5} = this.state
    const newList = key5.filter(forEach => forEach.id !== id)
    this.setState({key5: newList})
  }

  render() {
    const {key1, key2, key3, key4, key5, key6} = this.state
    const item1 = key4
    const filteredList = key5.filter(forEach => forEach.website.includes(key6))
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="img0"
          alt="app logo"
        />
        <div className="arrange1">
          <div className="card1">
            <form className="form1">
              <h1 className="head1">Add New Password</h1>
              <div className="card2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  className="img3"
                  alt="website"
                />
                <input
                  className="input1"
                  type="text"
                  placeholder="Enter Website"
                  value={key1}
                  onChange={this.OnChange1}
                />
              </div>
              <div className="card2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  className="img3"
                  alt="username"
                />
                <input
                  className="input1"
                  type="text"
                  placeholder="Enter Username"
                  value={key2}
                  onChange={this.OnChange2}
                />
              </div>
              <div className="card2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  className="img3"
                  alt="password"
                />
                <input
                  className="input1"
                  type="password"
                  placeholder="Enter Password"
                  value={key3}
                  onChange={this.OnChange3}
                />
              </div>
              <button className="button" type="submit" onClick={this.OnSubmit}>
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="img1"
            alt="password manager"
          />
        </div>
        <div className="arrange2">
          <div className="card3">
            <div className="card4">
              <h1 className="head1">Your Passwords</h1>
              <p className="para1">{filteredList.length}</p>
            </div>
            <div className="card4">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="img4"
                alt="search"
              />
              <input
                className="input2"
                type="search"
                value={key6}
                onChange={this.OnChange6}
                placeholder="Search"
              />
            </div>
          </div>
          <hr className="hori" />
          <div className="card5">
            <input
              id="input3"
              type="checkbox"
              className="input3"
              checked={key4}
              onChange={this.OnChange4}
            />
            <label htmlFor="input3" className="label">
              Show passwords
            </label>
          </div>
          {filteredList.length !== 0 && (
            <>
              <ul className="ul-list">
                {filteredList.map(forEach => (
                  <PasswordItem
                    item={forEach}
                    del={this.del}
                    item1={item1}
                    key={forEach.id}
                  />
                ))}
              </ul>
            </>
          )}
          {filteredList.length === 0 && (
            <div className="card9">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                className="img12"
                alt="no passwords"
              />
              <p className="head1">No passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
