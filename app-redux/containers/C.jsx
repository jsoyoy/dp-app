import React from 'react';

class C extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.changeUserInfo.bind(this)}>修改信息</button>
      </div>
    );
  };
  changeUserInfo() {
    console.log(this.props);
    this.props.actions.updateCityName({
      // userId: '',
      city: 'nanjing'
    })
  }
}
;

export default C;