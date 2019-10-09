import React, { Component } from 'react';
import {ReactiveBase} from '@appbaseio/reactivesearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
<ReactiveBase
app="elasticsearch" credentials="zKZ2-6VWTreAac4YtkZlog"
theme={{
	typography: {
	  fontFamily:
		  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
	  fontSize: "16px"
	},
	colors: {
	  textColor: "red",
	  backgroundColor: "#212121",
	  primaryTextColor: "red",
	  primaryColor: "#2196F3",
	  titleColor: "#fff",
	  alertColor: "#d9534f",
	  borderColor: "#666"
	}
  }} >
	Hello from Reactive Search
</ReactiveBase>
      </div>
    );
  }
}

export default App;
