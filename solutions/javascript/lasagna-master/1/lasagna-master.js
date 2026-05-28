/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime){
  if(remainingTime===0) return 'Lasagna is done.'
  if( remainingTime === undefined ) return 'You forgot to set the timer.'
  else{
    return 'Not done, please wait.'
  }
}
export function preparationTime(layers,value=2){
  
    return value*layers.length;
  
}
export function quantities(ingredients){
  let noodle=0;
  let sauce=0;
  for (let ingredient of ingredients){
    if(ingredient ==='noodles')
      noodle+=50;
  
  else if(ingredient=== 'sauce')
    sauce+=0.2;
  }
  return {
    noodles :noodle,
    sauce :sauce
  };
    
}

export function addSecretIngredient(friendsList,myList){
  myList.push(friendsList.at(-1));
}

export function scaleRecipe (recipe,value=1)
{
  let myRecipe={}
  for(let items in recipe){
     myRecipe[items]= (recipe[items]/2)*value;   
  }
  return myRecipe;
}









