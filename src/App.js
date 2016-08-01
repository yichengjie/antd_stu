import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import { DatePicker,message } from 'antd';
//import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export class App extends Component {
  constructor(props){
    super(props) ;
    this.state = {
        date:'',
        text:''
    } ;
  }
  handleChange(date){
    message.info('你选择的日期是 : ' + date.toString()) ;
    this.setState({date}) ;
  }
  handleInputName (e){
    var value = e.target.value;
    this.setState({text:value}) ;
    console.info(value) ;
  }
  render() {
    return (
      <div>
        <Counter increment={1} color={NICE} /><br/>
        <Counter increment={5} color={SUPER_NICE} /><br/>
        <DatePicker onChange = {value => this.handleChange(value)} /><br/>
        <DatePicker onChange = {value => this.handleChange(value)} /><br/>
        <input onChange = {this.handleInputName.bind(this)} /><br/>
        <div style={{ marginTop: 20 }}>当前日期：{this.state.text}</div>
      </div>
    );
  }
}
