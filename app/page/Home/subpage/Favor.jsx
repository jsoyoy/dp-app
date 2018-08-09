import React from 'react'
import { get } from '@fetch'
import HomeFavor from '@components/HomeFavor'

class Favor extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      favoList: [],
      isLoadMore: false,
      page: 0
    }
  }
  render() {
    return (
      <div>
        <h3 className="home-list-title">猜你喜欢</h3>
        {
          this.state.favoList.length > 0 ?
            <HomeFavor favoList={this.state.favoList}/> :
            <div>正在加载中。。。</div>
        }

        <div className="load-more">正在加载更多。。。</div>
      </div>
    )
  }
  componentDidMount () {
    this.getFavorList()
    this.loadMore()
  }
  /*加载更多*/
  loadMore () {
    this.setState({
      page: this.state.page++
    })
    this.getFavorList()
  }
  /*获取列表数据*/
  getFavorList () {
    get(`/api/homelist/${encodeURIComponent(this.props.cityName)}/${this.state.page}`).then(res => {
      res.json().then(list => {
        setTimeout(() => {
          this.setState({
            favoList: list.data
          })
        }, 2000)
      })
    })
  }
}

export default Favor