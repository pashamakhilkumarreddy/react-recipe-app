import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import RecipeModal from './RecipeModal';

const Recipe = ({ recipe: recipeDetails }) => {
  const { label, image, calories, url } = recipeDetails.recipe;
  const [showRecipeModal, setRecipeModalDisplay] = useState(false);
  const toggleRecipeModalDisplay = e => {
    e.preventDefault();
    setRecipeModalDisplay(!showRecipeModal);
  }
  return (
    <Fragment>
      <div className="card">
        <div className="card-image">
          <img src={image} className={`is-square`} style={{ width: '-webkit-fill-available' }} alt={label} />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-3 has-text-weight-bold recipe-label">{label}</p>
              <p className="sub-title is-6">
                <em>Calories: {Math.round(calories)}</em>
              </p>
            </div>
          </div>
          <div className="content">
            <div className="buttons">
              <a href={url} className="button is-link" target={`_blank`} rel="noopener noreferrer">
                View Recipe
              </a>
              <span className="button is-light is-link" onClick={toggleRecipeModalDisplay}>
                View Details
              </span>
            </div>
          </div>
        </div>
      </div>
      <RecipeModal recipe={recipeDetails} showModal={showRecipeModal} toggleRecipeModalDisplay={toggleRecipeModalDisplay} />
    </Fragment>
  )
}

Recipe.propTypes = {
  recipe: PropTypes.object
}

export default Recipe;