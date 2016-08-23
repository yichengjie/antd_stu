import React, { Component } from 'react';
export default class Base extends Component {
    constructor(props) {
      super(props);
    }

    renderLoading(){
      return (<div className="no-data">
          <img src="http://gtms04.alicdn.com/tps/i4/T1hPyYFD0kXXa679Pe-40-40.gif"
            width="20" />
       </div>) ;
    }

    renderIOError(){
        return (<div onClick={this.componentDidMount.bind(this)}
                    className="no-data">{this.state.msg || "请求失败"}
                </div>)
    }

    renderError(){
        return (<div className="no-data"
                    onClick={this.componentDidMount.bind(this)}>数据格式不正确
                </div>) ;
    }

    render() {
        if (this.state.loading) {
            return this.renderLoading() ;
        }
        if (this.state && this.state.success == false) {
            return this.renderIOError() ;
        } else {
            try {
                return this.toRender();
            } catch (e) {
                if (navigator.userAgent.indexOf("MSIE 8.0") == -1){
                    console.log(e, this);
                }
                return this.renderError();
            }
        }
    }
}
