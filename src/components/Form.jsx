import React, { Fragment } from 'react';

const Form = ({getRecipe}) => {
  return (
    <Fragment>
      <div className={`columns is-centered is-mobile mt-1`}>
        <div className={`column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-half-widescreen is-half-fullhd`}>
          <form onSubmit={getRecipe}>
            <div className={`field has-addons justify-center`}>
              <div className={`control`}>
                <input type="text" name="recipeName" className={`input`} id="recipes" placeholder="Search for awesome recipes" />
              </div>
              <div className={`control`}>
                <button className={`button is-info`}>Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Form;