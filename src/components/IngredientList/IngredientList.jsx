const IngredientList = (props) => {
    const handleClick = (ingredient) => {
      console.log(ingredient);
      props.addToBurger(ingredient);
    };
  
    return (
      <ul>
        {props.ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => handleClick(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;