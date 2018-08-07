import React from 'react'
import './style.less'

class AD extends React.Component {
  constructor (props, context) {
    super(props, context)
  }
  render() {
    return (
      <div id="home-ad">
        <h2>超值特惠</h2>
        <ul className="ad-container clear-fix">
          {
            this.props.adList.map((item, index) => {
              return (
                <li key={index.toString()} className="ad-item float-left">
                  <a href={item.link} target="_blank">
                    <img src={item.img} alt={item.title}/>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default AD