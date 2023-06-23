import './App.css';
import React, { Component } from 'react';
import { people } from './People';
import Searchbox from './Searchbox';
import Card from './Card';


class App extends Component  {
  constructor(){
    super()
    this.state={
      robots:[],
      searchfield:''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots : users}));
}

  onSearchchange = (event)=>{
    this.setState({searchfield:event.target.value})

  }
  render(){
    const filteredRobots = this.state.robots.filter(R=>{  
      return R.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
    <div>
    <div className='text-center bg-teal-200 sticky top-0 z-30'> 
    <h1 className='text-6xl  p-5 italic'> ROBO FRIENDS</h1>
    <Searchbox  searchchange={this.onSearchchange}> 

    </Searchbox>
    </div>
    <div className='grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3  gap-4 p-5 text-center '>
      {filteredRobots.map((p,key) =>  <Card key={key} name = {p.name} id = {p.id} mail = {p.email} />)}
    </div>
    </div> 
    );
  } 
  
}

export default App;
