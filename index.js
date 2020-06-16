import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React from CodezTech',
      myArr: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"]
    };
  }
  onDelete(data) {
    var abc = this.state.myArr.filter((val, index) => {
       return data!==val;
    })
    console.log(this.state);

    this.setState({myArr:abc});
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Welcome to React Tutorial, I am your Instructor Atique Ahmed
        </p>
        <p><strong><u>{this.props.msg}</u></strong></p>
        <p> Name : {this.props.myData.name}</p>
        <p> YouTube :  <a href={this.props.myData.youTube} target="_blank">{this.props.myData.youTube}</a></p>
        <p> GitHub : <a href={this.props.myData.gitHub} target="_blank">{this.props.myData.gitHub}</a></p>
        <p><strong><u>React Array Example from state</u></strong></p>
        {this.state.myArr.map((data, cnt) => (
          <ul key={cnt}> 
            <li>{data}<span style={{color: "red", cursor: "pointer"}} onClick={() => this.onDelete(data)}> X</span></li>
        </ul>
        ))}
      </div>
    );
  }
}

var myObj = {
   name: 'CodezTech',
   youTube: 'https://www.youtube.com/c/CodezTech',
   gitHub: 'https://github.com/codeztech-atique'
};

// var myArr = ["First", "Second", "third", "fourth", "fifth", "sixth"];
render(<App msg="React Object Example" myData={myObj} />, document.getElementById('root'));
