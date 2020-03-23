import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state ={
    gender: "male",
    like: {
      male: false,
      female: false,
    },
  };

  onChangeGender = (e) =>{
    console.log("onChangeGender");
    this.setState({
      gender: e.target.value,
    });
  };

  onChangeLike = (e) =>{
    console.log("onChangeLike");
    const key = e.target.value;
    // this.setState((state) => ({
    //   like: {
    //     ...state.like,
    //     [key]: !state.like[key],
    //   },
    // }));

    this.setState({
      like: {
        ...this.state.like,
        [key]: !this.state.like[key],
      },
    });
  };

  render(){
    const {gender, like} = this.state;
    return (
      <div className="App">
        {/*Radio Button*/}
        <div>
          Your Gender:
          <input type="radio"
                  value="male"
                  onChange={this.onChangeGender}
                  checked = {gender === "male"}
          />
          <label>Male</label>
          <input type="radio"
                  value="female"
                  onChange={this.onChangeGender}
                  checked = {gender === "female"}
          />
          <label>Female</label>
        </div>

      {/*CheckBox*/}
        <div>
          You like:
          <input type="checkbox" 
                  value="male"
                  onChange={this.onChangeLike} 
                  checked={like.male}
          />
          <label>Male</label>
          <input type="checkbox" 
                  value="female"
                  onChange={this.onChangeLike} 
                  checked={like.female}
          />
          <label>Female</label>
        </div>

        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
