import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Dashboard(){
  const [list, setList] = useState([])
  const [pokemon, setPokemon] = useState([]);
  const [suggest, setSuggest] = useState({
    value: '',
    suggestions: []
  })


  useEffect(() => {
    loadPokemon()
  }, [])


  async function loadPokemon(){
    const rez = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=1118')
    const data = await rez.json();
    console.log(data)
    setList(data.results)
    // setPokemon(data.slice())
    console.log(list)
    // console.log(data.results)
  }

  

  return (
    <div>
    <div className="vw-100 vh-100 primary-color d-flex justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Pokemon Weakness</h1>
        <p className="lead">
          Input your Pokemon team to identify their weaknesses
        </p>
        <hr className="my-4" />
      </div>
    </div>
  </div>
  </div>
  
  )
}

export default Dashboard

// import React from "react";
// import { Link } from "react-router-dom";

// export default () => (
//   <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
//     <div className="jumbotron jumbotron-fluid bg-transparent">
//       <div className="container secondary-color">
//         <h1 className="display-4">Food Recipes</h1>
//         <p className="lead">
//           A curated list of recipes for the best homemade meal and delicacies.
//         </p>
//         <hr className="my-4" />
//         <Link
//           to="/recipes"
//           className="btn btn-lg custom-button"
//           role="button"
//         >
//           View Recipes
//         </Link>
//       </div>
//     </div>
//   </div>
// );