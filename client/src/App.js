import React from 'react';
import axios from "axios";
import './App.css';
import styled from 'styled-components';
import PlayerCard from './components/PlayerCard'
import NavBar from './components/Navbar'

const CardList = styled.div`
  margin: 0 auto; 
  width: 90%;
`

class App extends React.Component {

  state = {
    players: []
  };


  componentDidMount = async () => {
     await axios.get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response);
        this.setState({ players: response.data });
      })
      .catch(err => console.log(err));
  }

  render() {  
    return (
      <div className="container">
        <NavBar/>
        <CardList className="App">
        <PlayerCard players={this.state.players}/>
      </CardList>
      </div>
    ) 
}
}


export default App;
