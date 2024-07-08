const shoppingForm = document.getElementById('shopping-form');
const itemList = document.getElementById('item-list');
const markPurchasedBtn = document.getElementById('mark-purchased-btn');
const clearListBtn = document.getElementById('clear-list-btn');


shoppingForm.addEventListener('submit', addItem);


function addItem(event) {
    event.preventDefault();
    const newItem = document.getElementById('item').value;
    if (newItem !== '') {
        const li = document.createElement('li');
        li.textContent = newItem;
        itemList.appendChild(li);
        document.getElementById('item').value = ''; 
    }
}


markPurchasedBtn.addEventListener('click', function() {
    const items = itemList.getElementsByTagName('li');
    for (let item of items) {
        if (!item.classList.contains('purchased')) {
            item.classList.add('purchased');
        }
    }
});


clearListBtn.addEventListener('click', function() {
    itemList.innerHTML = ''; 
});
