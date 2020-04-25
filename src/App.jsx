import React, { Fragment, Component } from 'react';
import Routes from './routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Form from './components/Form';
import Recipe from './components/Recipe';
import './App.css';

const EDAMAM_API_KEY = '816ab3e584b78b7feadb7f8990d423c7';

const EDAMAM_APP_ID = 'e8d11354';

const HEROKU = 'https://cors-anywhere.herokuapp.com/';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      message: 'No Recipes here!'
    }
  }

  getRecipe = async (e) => {
    try {
      e.preventDefault();
      const recipeName = e.target.elements.recipeName.value;
      const recipesData = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_API_KEY}&from=0&to=12`, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const formattedRecipes = await recipesData.json();
      if (formattedRecipes.count) {
        this.setState({
          recipes: formattedRecipes.hits
        });
      } else {
        this.setState({
          message: `No recipes found for ${recipeName}, please try a different recipe`
        })
      }
    } catch (err) {
      console.error(err);
    }
  }

  componentDidMount = () => {
    const recipes = localStorage.getItem('recipes');
    if (recipes) {
      const formattedRecipes = JSON.parse(recipes);
      this.setState({
        recipes: formattedRecipes
      })
    }
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', recipes);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main className="container" style={{ paddingBottom: '8rem' }}>
          <Form getRecipe={this.getRecipe} />
          <div className="columns is-vcentered is-mobile mt-1 is-multiline recipe-cards">                         
            {
              this.state.recipes.length ?
              this.state.recipes.map((recipe, index) => 
                <div key={index.toString()} className="column is-full-mobile is-4-tablet is-4-desktop is-4-widescreen is-3-fullhd">
                  <Recipe recipe={recipe} />
                </div>
              ) : 
              <div className="column is-10 mt-auto">
                <h1 className="is-title is-2 has-text-weight-bold no-recipes-text break-text">
                  {this.state.message}
                </h1>
              </div>
            }
            <Routes />
          </div>
        </main>
        <Footer />
      </Fragment>
    )
  }
}
