import React from 'react'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import AD from './subpage/AD'
import Favor from './subpage/Favor'

class Home extends React.Component {
  render() {
    return (
      <div>
        <HomeHeader cityName="北京">header</HomeHeader>
        <Category></Category>
        <AD/>
        <Favor cityName="北京"/>
      </div>
    )
  }
}

export default Home