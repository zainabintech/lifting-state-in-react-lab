
// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
    const handleClick = (ingredient) => {
      console.log(ingredient);
      props.removeFromBurger(ingredient);
    };
    return (
      <ul>
        {props.stack.map((ingredient, index) => {
          return (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => handleClick(ingredient)}>X</button>
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default BurgerStack;
  