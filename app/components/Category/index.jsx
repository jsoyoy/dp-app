import React from 'react'
import ReactSwipe from 'react-swipe'
import categoryList from './categoryList'

import './style.less'

class Category extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      index: 0
    }
  }
  render () {
    const swipeOpt = {
      auto: 2000,
      callback: function (index) {
        this.setState({index: index})
      }.bind(this)
    }
    return (
      <div id="home-category">
        <ReactSwipe swipeOptions={swipeOpt}>
          {
            categoryList.map((item, index) => {
              return (
                <div className="carousel-item" key={item.page.toString()}>
                  <ul className="clear-fix">
                    {
                      item.category.map((categoryItem) => {
                        return (
                          <li key={categoryItem.className} className={`float-left ${categoryItem.className}`}>{categoryItem.categoryName}</li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </ReactSwipe>
        <div className="index-container">
          <ul>
            {
              categoryList.map((item, index) => {
                let selected = this.state.index === item.page ? 'selected' : '';
                return <li key={item.page.toString()} className={selected}></li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Category