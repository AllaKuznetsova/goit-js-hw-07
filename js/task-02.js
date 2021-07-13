const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

const listRef= document.querySelector('#ingredients');


const makeListIngredients = array => {
  return array.map(ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    return ingredientItem;
  });
};

const elements = makeListIngredients(ingredients);
listRef.append(...elements);



