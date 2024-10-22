let numVar1 = 0;
let numVar2 = 5;
let varText = "Next";

let minNum = 0;
let maxNum = 10;

let itemList=["item 1", "item 2", "item 3"];

document.getElementById('plusBtn1').addEventListener('click',function(){
    numVar1 += 1;
    document.getElementById('numVar1').textContent = numVar1;
});

document.getElementById('minusBtn1').addEventListener('click',function(){
    numVar1 -= 1;
    document.getElementById('numVar1').textContent = numVar1;
});

document.getElementById('plusBtn2').addEventListener('click',function(){
    if (numVar2 < maxNum)
    {
        numVar2 += 1;
        document.getElementById('numVar2').textContent = numVar2;
    }
    valuecheck();
});

document.getElementById('minusBtn2').addEventListener('click',function(){
    if (numVar2 > minNum)
        {
            numVar2 -= 1;
            document.getElementById('numVar2').textContent = numVar2;
        }
    valuecheck();
});


function valuecheck() {
    const var2 = document.getElementById('numVar2');
    if (numVar2 == minNum){
        var2.style.color="red";
    }
    else if (numVar2 == maxNum){
        var2.style.color = "blue";
    }
    else{
        var2.style.color="black";
    }
}

document.getElementById('changeBtn').addEventListener('click',function() {
    toggleState= !toggleState;
    document.getElementById('varText').textContent = toggleState ? 'Next' : 'Back';
});

function updateList(){
    const items = document.getElementById('itemList');
    items.innerHTML='';

    itemList.forEach((item, index) => {
        const newItem = document.createElement('li');
        newItem.className = 'list-group-item mb-2'
        newItem.textContent=item;
        items.appendChild(newItem);
    })
}

updateList();
let maxItems=10
let minItems=1

document.getElementById('addItem').addEventListener('click', function() {
    if (itemList.length < maxItems){
        itemList.push(`Item ${itemList.length + 1}`);
        updateList();

    }else{
        alert('Maxitems reached');
    }
})

document.getElementById('removeItem').addEventListener('click', function() {
    if (itemList.length > minItems){
        itemList.pop();
        updateList();
    }else{
        alert('cannot remove this item list');
    }
})







