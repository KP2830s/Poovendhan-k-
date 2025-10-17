import React, { Component } from 'react'

export default class calss extends Component {
    constructor(props){
        super(props);
        this.state={hasError:false};
    }
    static getDerivedStateFromError(error){
        return {hasError:true};
    }

    componentDidCatch(error, info){
        console.error('Error caught by boundary:', error,info );
    }
  render() {
    if(this.state.hasError){
        return<div className='alert alert-danger'>something went wrong.</div>
    }
    return this.props.children;
  }
}

