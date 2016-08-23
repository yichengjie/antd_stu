import React,{Component} from 'react' ;
import { DatePicker,message,Row,Col } from 'antd';
import Base from './base.js';
export default class Demo01 extends Base {
  constructor(props) {
    super(props) ;
    this.state = {
        date:'',
        text:''
    } ;
  }
  handleChange(date){
    //message.info('你选择的日期是 : ' + date.toString()) ;
    this.setState({date}) ;
  }
  handleInputName (e){
    var value = e.target.value;
    this.setState({text:value}) ;
    console.info(value) ;
  }
  toRender(){
    return (
      <div>
         <Row>
           <Col span={8}>
            <DatePicker onChange = {value => this.handleChange(value)} />
           </Col>
         </Row>

         <Row>
           <Col span={8}>
            <DatePicker onChange = {value => this.handleChange(value)} />
           </Col>
         </Row>

         <Row>
            <Col span={8}>
                <input onChange = {this.handleInputName.bind(this)} />
            </Col>
         </Row>

         <Row>
            <Col span={8}>
                <span style={{ marginTop: 20 }}>当前日期：{this.state.text}</span>
            </Col>
         </Row>
      </div>
    ) ;
  }
}
