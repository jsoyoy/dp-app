import React from 'react';
import HomeAd from '@components/HomeAd'
import { get } from '@fetch'

class AD extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      adList: []
    }
  }
  render() {
    return (
      <div>
        <HomeAd adList={this.state.adList}/>
      </div>
    )
  }
  componentDidMount () {
    get('/api/homead').then(res => {
      res.json().then(data => {
        this.setState({
          adList: data
        })
      })
    })
  }
};


export default AD;