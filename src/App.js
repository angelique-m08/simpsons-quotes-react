import React from 'react';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import QuoteCard from './components/QuoteCard';
import './components/QuoteCard.css';
import axios from 'axios';

const sampleQuote = {
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  quote: "I hope I didn't brain my damage.",
};

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote: sampleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0],
        });
    });
  }

  render() {
    return (
      <div className="Navbar QuoteCard">
        <Navbar />
        <QuoteCard quote={sampleQuote} />
        <QuoteCard quote={this.state.quote} />
        <button type="button" onClick={this.getQuote} className="button">Get new quote</button>
      </div>
    );
  }
}

export default App;
