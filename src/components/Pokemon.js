import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
  const types = props.pokemon.types;
  return (
    <li className='pokemon'>
      <img className='pokemon__image' src={props.pokemon.url} alt={props.pokemon.name}></img>
      <h2 className='pokemon__title'>{props.pokemon.name}</h2>
      <ul className='pokemon__list'>
        {types.map((type, index) => {
          return (
            <li className='pokemon__type' key={index}>
              {type}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

Pokemon.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Pokemon;
