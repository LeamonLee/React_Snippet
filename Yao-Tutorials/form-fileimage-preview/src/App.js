import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state ={
    img: '',
    file:null,
  }

  onChange = (e)=>{
    const file = e.target.files.item(0);
    const fr = new FileReader();  // Browser內建的類別 可以讀取選中的檔案
    fr.addEventListener("load", this.fileLoaded);
    fr.readAsDataURL(file);
    this.setState({
      file,
    });
  }

  fileLoaded = (e) =>{
    this.setState({
      img: e.target.result,
    })
  }

  onSubmit = () =>{
    // Method1: json base64
    // axios.post("/img", {img: this.state.img})

    // Method2: multipart
    // const form = new FormData();
    // form.append(this.state.file);
    // axios.post("/img", {form})
  }

  render(){
    return (
      <div className="App">
        <input type="file" onChange={this.onChange}/>
        <img width="100%" src={this.state.img}/>
        <button onSubmit={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
