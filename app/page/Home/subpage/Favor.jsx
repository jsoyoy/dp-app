import React from 'react'
import { get } from '@fetch'
import HomeFavor from '@components/HomeFavor'

class Favor extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      favoList: [],
      isLoading: false,
      page: 0
    }
  }
  render() {
    return (
      <div>
        <h3 className="home-list-title">猜你喜欢</h3>
        {
          this.state.favoList.length > 0
            ? <HomeFavor favoList={this.state.favoList}/>
            : <div>正在加载中。。。</div>
        }
        <div className="load-more" ref="loadMore" style={{padding : "5px 0"}}>
          {
            <div onClick={this.loadMore.bind(this)}>
              {
                this.state.isLoading ? "正在加载更多..." : ""
              }</div>
          }
        </div>
      </div>
    )
  }
  componentDidMount () {
    this.getFavorList()
    window.addEventListener('scroll', () =>{
      let wrapper = this.refs.loadMore
      let top = wrapper.getBoundingClientRect().top
      let windowHeight = window.screen.height
      if (top && top < windowHeight && !this.state.isLoading) {
        this.loadMore()
      }
    })
  }
  /*加载更多*/
  loadMore () {
    let page = ++this.state.page;
    this.setState({
      page: page,
      isLoading: true
    })
    this.getFavorList(() => {
      this.setState({
        isLoading: false
      })
    });
  }
  /*获取列表数据*/
  getFavorList (cb = null) {
    get(`/api/homelist/${encodeURIComponent(this.props.cityName)}/${this.state.page}`).then(res => {
      res.json().then(list => {
        setTimeout(() => {
          this.setState({
            favoList: this.state.favoList.concat(list.data)
          })
          cb();
        }, 1000)
      })
    })
  }
}

export default Favor