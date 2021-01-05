import React, { Component }from 'react';
import CardList from '../components/CardList.js';
import Searchbox from '../components/Searchbox.js';
import Scroll from '../components/Scroll.js';
import './App.css'


class App extends Component {

   constructor() {
       super()
       this.state = {
           robots : [],
           searchfeild: ''
        }
   }

   componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {
           return response.json();
        })
        .then(users => {
            this.setState({ robots: users })
        })
   }

   onSearchChange = (event) => {
       this.setState({
           searchfeild: event.target.value
       })
       console.log(this.state.searchfeild)
    }

    render(){

        const filteredRobot = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase())
        })

        if(this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return(
            <div className = 'tc'>
                <h1 className = 'f1'>Robofriends</h1>
                <Searchbox searching = {this.onSearchChange} />
                <Scroll>
                    <CardList robots= {filteredRobot} />
                </Scroll>
            </div>
            )
        }
    }
    
}

export default App;