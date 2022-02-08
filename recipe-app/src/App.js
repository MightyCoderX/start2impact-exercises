import env from 'react-dotenv';
import { useEffect, useState } from 'react';
import './App.css';

import Recipe from './Components/Recipe';

const App = () =>
{
    const APP_ID = 'c089caf1';
    const APP_KEY = env.APP_KEY;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    useEffect(() =>
    {
        getRecipes();
    }, [query]);

    const getRecipes = async () =>
    {
        const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e =>
    {
        setSearch(e.target.value);
    };

    const getSearch = e =>
    {
        e.preventDefault();

        if(!search.trim()) return false; 
        setQuery(search);
        setSearch('');
    };

    return(
        <div className="App">
            <h1 className="app-title">Search Recipe</h1>
            <form className="search-form" onSubmit={getSearch}>
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => recipe.recipe).map(({ label, calories, image, ingredients }) => (
                    <Recipe key={calories+label}
                        title={label} 
                        calories={calories}
                        image={image}
                        ingredients={ingredients}
                    >
                    </Recipe>
                ))}
            </div>
            
        </div>
    );
} 

export default App;
