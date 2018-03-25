import React, {Component} from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import cardsFile from "./cards.json";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import CardChoice from "./components/CardChoice";
import "./App.css";





class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cards: cardsFile,
    cardPicks: [],
    score: 0,
    score2:0,
    message: "Welcome to DBZ clicky"


  };

  shuffleCards = (id) => {
  	// Make a copy of state, we do not want to mutate the original
  	const newState = Object.assign({}, this.state)

    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const cardsSorted = this.state.cards.sort(function(a, b){return 0.5 - Math.random()});
    /*check to see if the id is inside the card Picks array, if true, game lost, else push id into the array
    */


    // newState.cards = this.state.cards.sort(function(a, b){return 0.5 - Math.random()})
    if( newState.cardPicks.includes(id)){
    	newState.score= 0
    	newState.cardPicks = []
    	newState.cards = this.state.cards.sort()
      console.log(newState.cards, "Hi")
      newState.message = "You guessed incorrectly!"
    }  else {
    	newState.cardPicks.push(id)
    	newState.score++
    	newState.cards = this.state.cards.sort((a, b)=> (0.5 - Math.random()))
      newState.message ="You guessed correctly!"
    }
    // Set this.state.friends equal to the new friends array
    this.setState(newState);
  };

    render() {
    return (
    <div>
    <Navbar 
    message={this.state.message}
    score={this.state.score}
    score2={this.state.score2}
    />
     <Header />
     <Main />
      <Wrapper>
        <Title></Title>
        {this.state.cards.map(card => (
          <CardChoice
            shuffleCards={this.shuffleCards}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
     <Footer/>
  	</div>
    );
  }

}

export default App;
