import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Footer from "./components/Footer"; 
import Jumbo from "./components/Jumbo";
import puppies from "./puppies.json";
import "./App.css";

let clickedItems = [];
let scoreVar = 0;
let topScore = 0;

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    puppies,
  };

  playGame = id => {
   if (!clickedItems.includes(id)) {
    clickedItems.push(id);
    console.log("UNSHUFFLED:"+puppies);
    this.shuffleArray(puppies);
    console.log("SHUFFLED"+puppies);
    this.setState(puppies);  
    scoreVar++;
    if (scoreVar > topScore) {
      topScore++;
    }

 
   } else {
    scoreVar = 0;
    clickedItems = [];
    console.log("LOOSE");
    this.setState(puppies);
   }
   
  };

 shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav score={scoreVar} topScore={topScore}>Friends List</Nav>
        <Jumbo />
        <Wrapper>
        {this.state.puppies.map(puppies => (
          
          <Card
            playGame={this.playGame}
            id={puppies.id}
            key={puppies.id}
            name={puppies.name}
            image={puppies.image}
          />
        ))}
      </Wrapper>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
