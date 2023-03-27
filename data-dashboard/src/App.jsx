import { useState, useEffect } from 'react'
import './App.css'
import DataTable from './Components/dataTable';
import Card from './Components/card';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [numRecipeData, setNumRecipeData] = useState(0);
  const [healthyData, setHealthyData] = useState(0);
  const [readyTime, setReadyTime] = useState(0);

  const[filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [checked, setCheckedState] = useState(false);

  const [recipeList, setRecipeList] = useState(null);

  const getNumRecipes = () => {
    setNumRecipeData(Object.keys(recipeList.recipes).length);
  }

  const getHealthyRecipes = () => {
    let numHealthy = 0;
    for(let i = 0; i < Object.keys(recipeList.recipes).length; i++) {
      if(recipeList.recipes[i].healthScore >= 10) {
        numHealthy++;
      }
    }
    setHealthyData(numHealthy);
  }

  const getAvgReadyTime = () => {
    let sumReadyTime = 0;
    let avgReadyTime = 0;
    for(let i = 0; i < Object.keys(recipeList.recipes).length; i++) {
      sumReadyTime += recipeList.recipes[i].readyInMinutes
    }
    avgReadyTime = sumReadyTime / Object.keys(recipeList.recipes).length;

    setReadyTime(avgReadyTime);
  }

  // useEffect only runs when recipeList changes
  useEffect(() => {
    if(recipeList) {
      getNumRecipes();
      getHealthyRecipes();
      getAvgReadyTime();
    }
    
  }, [recipeList]);

  useEffect(() => {
    const fetchAllRecipeData = async () => {
    const URL = `https://api.spoonacular.com/recipes/random?number=15&apiKey=${ACCESS_KEY}`;
    const response = await fetch(URL);
    const json = await response.json();
    console.log(json.recipes);
    setRecipeList(json);
  };
    fetchAllRecipeData().catch(console.error);}, []);

 
  return (
    <div className="App">
      <div className='navigation'>
        <h1 className='header'>RecipeDash🍱</h1>
        <h2 className='nav_element'>🏠 Dashboard</h2>
        <h2 className='nav_element'>🔍 Search</h2>
        <h2 className='nav_element'>❗ About</h2>
      </div>
      <div className='statistics'>
        <Card title="Num Recipes" data={numRecipeData} />
        <Card title="Healthy Recipes" data={healthyData} />
        <Card title="Average Cooking Time" data={readyTime} /> 
      </div>
      <div className='list card'>
        <div className='search'>
          <input
          type="text"
          placeholder="Search by name..."
          onChange={event => setSearchInput(event.target.value)}
          />
          <label className='check_container'>
          Healthy Recipes
          <input type="checkbox"
          checked={checked}
          onChange={event => setCheckedState(!checked)}></input>
          </label>
        </div>
        {recipeList ? (
          <DataTable recipeList={recipeList} searchInput={searchInput} checked={checked}/>
        ) : (
        <div className='data_table'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cooking Time</th>
                <th>Health Score</th>
                <th>Source</th>
                <th>Image</th>
              </tr>
              <tr></tr>
            </thead>
          </table>
        </div>
          )
        }
      </div>
      
      
      
    </div>
  )
}

export default App;
