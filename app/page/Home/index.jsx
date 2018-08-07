import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import AD from './subpage/AD'

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader cityName="北京">header</HomeHeader>
        <Category>category</Category>
        <AD>AD</AD>
      </div>
    )
  }
}

export default Home