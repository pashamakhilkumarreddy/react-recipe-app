import React, { Fragment, Component } from 'react';
import Routes from './routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Form from './components/Form';
import './App.css';

const SPOONACULAR_API_KEY  = 'f013b0c0e08b4cea970de4c6a4718426';

const RAPID_API_KEY = 'd62d9155c0msh4d1dbd0d7687fb1p16ed84jsn09f7fadcda67';

const HEROKU = 'https://cors-anywhere.herokuapp.com';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  getRecipe = async (e) => {
    e.preventDefault();
    try {
      const recipeName = e.target.elements.recipeName.value;
      const recipesData = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search/?query=${recipeName}`, {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': RAPID_API_KEY
        }
      });
      const recipes = recipesData.json();
      console.log(recipes);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main className="container">
          <Form getRecipe={this.getRecipe} />
          <Routes />
        </main>
        <Footer />
      </Fragment>
    )
  }
}
