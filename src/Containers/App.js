import React,{Component} from 'react';
import CardList from '../Components/CardList';
import {robots} from '../robots'
import SearchBox from '../Components/SearchBox'
import Scroll from '../Components/Scroll'

class App extends Component{
  constructor(){
    super()
    this.state = {
      filteredRobots: robots,
      robots: robots
    }
  }

  componentDidMount() {
    fetch('https //jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  onSearchChange = (e) =>{
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(e.target.value.toLowerCase());
    })
    this.setState({filteredRobots:filteredRobots})
  }

  render() {
    return (
      <div className ="mainCont">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll >
        <CardList robots={this.state.filteredRobots}/>
        </Scroll>
      </div>
    );
}
}

export default App
