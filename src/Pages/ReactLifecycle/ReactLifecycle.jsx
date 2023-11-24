import React, { Component } from 'react'
import Child from "./Child.jsx"

export default class ReactLifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:1,
            likeObject:{},
            like:1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps')
        currentState.number = currentState.number * 2
        return currentState
    }

    shouldComponentUpdate(newProps,newState){
        console.log('shouldComponentUpdate');
        return true
        }
    render() {
        console.log('render')
        return (
            <div>
                <h3>LifeCycle</h3>
                <p>Number: {this.state.number}</p>
                <button className='btn btn-primary' onClick={()=>{
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>

                <button className='btn btn-danger' onClick={()=>{ 
                    this.setState({
                        like:this.state.like + 1
                    })
                }}>Like</button>
                <Child like ={this.state.like}/>
            </div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate');
    }
}
