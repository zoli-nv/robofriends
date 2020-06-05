import React, { Component } from 'react';

class ErrorBoundry extends Component{
  constructor(props){
    super(props);
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error){
    return { hasError: true};
  }

  componentDidCatch(error, info){
    console.log(info.componentStack);
  }

  render(){
      if(this.state.hasError){
        return <h1>Uppss... error</h1>
      }

      return this.props.children;
  }
}

export default ErrorBoundry;