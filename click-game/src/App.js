import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Footer from "./components/Footer"; 
import Jumbo from "./components/Jumbo";
import puppies from "./puppies.json";
import "./App.css";

let clickedItems = [];

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    puppies
  };

  playGame = id => {
   if (!clickedItems.includes(id)) {
    clickedItems.push(id);
    console.log(clickedItems);
  //  randomizePics();
   } else {
    console.log("LOOSE");
   }
   
  };

 // randomizePics = id => {
  //  console.log(true);
 // }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav>Friends List</Nav>
        <Jumbo />
        <Wrapper>
        {this.state.puppies.map(puppies => (
      
          <Card
            playGame={this.playGame}
            id={puppies.id}
            key={puppies.id}
            name={puppies.name}
            image={puppies.image}
            occupation={puppies.occupation}
            location={puppies.location}
          />
        ))}
      </Wrapper>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
