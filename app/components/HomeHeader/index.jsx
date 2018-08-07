import React from 'react'
import { Link } from 'react-router'
import './style.less'

class HomeHeader extends React.Component {
  render () {
    return (
      <div id="home-header" className="clear-fix">
        <div className="home-header-left float-left">
          <Link to="/City">{this.props.cityName}</Link>
          &nbsp;
          <i className="icon-angle-down"></i>
        </div>
        <div className="home-header-right float-right">
          <i className="icon-user"></i>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"></i>
            <input type="text" placeholder="请输入关键字"/>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHeader