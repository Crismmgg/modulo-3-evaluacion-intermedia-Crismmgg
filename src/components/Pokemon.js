import React from "react";

function Pokemon(props) {
  console.log(props);
  const types = props.pokemon.types;
  console.log(types);
  return (
    <li className="border--medium">
      <img className="pokemon-image" src={props.pokemon.url} alt={props.pokemon.name}></img>
      <h2 className="pokemon-title">{props.pokemon.name}</h2>
      <ul className="pokemon-list">
        {types.map((type, index) => {
          return (
            <li className="pokemon-type" key={index}>
              {type}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Pokemon;
