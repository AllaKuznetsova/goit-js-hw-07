const listCategoriesRef = document.querySelector('#categories');
const itemCategoriesRef = document.querySelectorAll('.item');

const countCategories =  (value) => {
return console.log(`В списке ${value.children.length} категории.`);
}

countCategories(listCategoriesRef);


itemCategoriesRef.forEach(item => {
    const titleRef=item.querySelector('h2');
    const itemListRef=item.querySelectorAll('ul');
    itemListRef.forEach(item=> console.log(`категория: ${titleRef.textContent}, Количество элементов: ${item.querySelectorAll('li').length}`))
})




