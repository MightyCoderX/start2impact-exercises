import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) =>
{
    return(
        <div className={style.recipe}>
            <h1 className="title">{title}</h1>
            <p>{Number(calories).toFixed()} kcal</p>
            <img className={style.image} src={image} alt={title} />
            <ul>
                {ingredients.map((ingredient, index) =>(
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recipe;