import React, { Component, PureComponent } from 'react'

/*
  PureComponent giống hệt component, tuy nhiên không có lifeccycle shouldComponentUpdate vì pure sẽ xử lý ngầm để nhận dạng props component có thay đổi hay không

  Lưu ý: Nhận viết sự thay đổi props trên primitive value(boolean,string number, undefined, null)
  Nếu props là reference value (object,array) thì khi handle setState ở component cha thì nhớ clone ra{Ơ..} hoặc [...] hoặc dùng cloneDeep của lodash
 */
export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log('constructor child')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child')
        return null
    }

    shouldComponentUpdate(newProps,newState) {


        console.log('shouldComponentUpdate child')
        return true;
    }

    render() {
        console.log('render child')
        return (
            <div className='p-5 bg-dark text-white text-center'>Like:{this.props.like}</div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount child')
    }

 componentDidUpdate(prevProps,prevState){
    console.log('componentDidUpdate child');
    }


}
