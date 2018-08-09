import React from 'react'
import './style.less'

class HomeFavor extends React.Component {
  constructor (props, context) {
    super(props, context);
  }
  render() {
    return (
      <div>
        <ul className="list-container">
          {
            this.props.favoList.map((list, index) => {
              return (
                <li className="list-item clear-fix" key={index.toString()}>
                  <div className="item-img-container float-left">
                    <img src={list.img} alt=""/>
                  </div>
                  <div className="item-content">
                    <div className="item-title-container clear-fix">
                      <h3 className="float-left">{list.title}</h3>
                      <span className="float-right">{list.distance}</span>
                    </div>
                    <p className="item-sub-title">
                      {list.subTitle}
                    </p>
                    <div className="item-price-container clear-fix">
                      <span className="price float-left">￥{list.price}</span>
                      <span className="mumber float-right">已售{list.mumber}</span>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default HomeFavor