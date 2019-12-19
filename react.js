// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.

import React, { Component } from 'react'

class Answer1 extends Component {
  render(){
    return(
      <>
        I am a component!
      <\>
    )
  }
}

// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// for(let i=0; i<names.length; i++){
//   console.log(`${names[i]} is ${names[i].length} characters long.`)
// }

console.log("\nQuestion 2\n");

const mapSolution = names.map((value) => console.log(`${value} is ${value.length} characters long.`))




// 3. Destructure the following variables out of state.

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

let { name, home, dislikes } = this.state

console.log("\nQuestion 3\n");
console.log(name);
console.log(home);
console.log(dislikes);



// 4. Write a React method that would add one and update the state of the count each time the method is called.

this.state = {
  count: 0
}
//something like this?
handleIncrement = () => {
  let increment = this.state.count + 1
  this.setState({count: increment})
}



// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:
// original
// import React, { Component } from 'react';
//
// class Recipes{
//   constructor(props){
//     super(props)
//     this.state = {
//       recipes:
//         {name: 'Meatballs'},
//         {name: 'Mac & Cheese'}
//     }
//   }
//
//   render() {
//     return(
//       let recipe = recipes.map(recipe => {
//         return(
//           <li key={recipe.name}>{recipe.name}</li>
//         )
//       })
//       <ul>
//         {recipe}
//       </ul>
//     )
//   }
// }
// export default Recipes

//mine - see screenshots
import React, { Component } from 'react';

class Recipes extends Component{ //should extend component
  constructor(props){
    super(props)
    this.state = {
      recipes: [
        {name: 'Meatballs'}, // should be organized differently.
        {name: 'Mac & Cheese'} // let's try an array :D
      ]
    }
  }

  render() {

    let { recipes } = this.state // allows recipes shorthhand to be valid


    let recipe = recipes.map(recipe => { //this variable should exist in
      return(
        <li key={recipe.name}>{recipe.name}</li> // (cont.) render()'s scope
      )
    })

    return(
      <ul>
        {recipe}
      </ul>
    )
  }
}
