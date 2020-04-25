import React from 'react';
import PropTypes from 'prop-types';

const RecipeModal = ({ recipe, showModal, toggleRecipeModalDisplay }) => {
  const { image, label, calories, source, healthLabels, cautions, dietLabels } = recipe.recipe;
  return (
      showModal ? (
      <div className={'modal ' + (showModal ? 'is-active': '')}>
        <div className="modal-background">
          <div className="modal-content" style={{ 'margin': 'auto', 'height': '100vh', 'display': 'flex', 'flexDirection': 'row nowrap', 'alignItems': 'center', 'justifyContent': 'center', 'padding': '0 1rem', maxHeight: 'unset' }}>
            <div className="card">
              <div className="card-image" style={{ 'backgroundImage': `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', 'width': '100%', 'height': '300px' }}>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-2 has-text-weight-bold recipe-label" style={{ maxWidth: '30rem' }}>{label}</p>
                    <p className="sub-title is-6">
                      <em>Calories: {Math.round(calories)}</em>
                    </p>
                    <p>
                      Source: <strong>{source}</strong>
                    </p>
                  </div>
                </div>
                <div className="content">
                  <div className="recipe-labels health-labels tags">
                    <span className="tags-label">Health Labels</span>
                    {healthLabels.map((tag, index) => <span key={index.toString()} className="tag is-primary is-light">{tag}</span>)}
                  </div>
                  <div className="recipe-labels caution-labels tags">
                    <span className="tags-label">Cautions</span>
                    {cautions.map((tag, index) => <span key={index.toString()} className="tag is-danger is-light">{tag}</span>)}
                  </div>
                  <div className="recipe-labels diet-labels tags">
                    <span className="tags-label">Diet Labels</span>
                    {dietLabels.map((tag, index) => <span key={index.toString()} className="tag is-info is-light">{tag}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={toggleRecipeModalDisplay}></button>
        </div>
      </div>) : null
  )
}

RecipeModal.propTypes = {
  recipe: PropTypes.object,
  showModal: PropTypes.bool
}

export default RecipeModal;