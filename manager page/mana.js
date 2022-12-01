function add() {
    let newItem=prompt("Add Item Here!")
    var list = document.getElementById('list'),
        item = document.createElement('li');
    item.innerHTML = '<input type="checkbox" />' + newItem;
    list.appendChild(item);
}

function rem() {
    var list = document.getElementById('list'),
        items = Array.prototype.slice.call(list.childNodes),
        item;
    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            list.removeChild(item);
        }
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function add1() {
    let newItem=prompt("Add Item Here!")
    var list = document.getElementById('list1'),
        item = document.createElement('li');
    item.innerHTML = '<input type="checkbox" />' + newItem;
    list.appendChild(item);
}

function rem1() {
   
    var list = document.getElementById('list1'),
        items = Array.prototype.slice.call(list.childNodes),
        item;
    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            list.removeChild(item);
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function add2() {
    let newItem=prompt("Add Item Here!")
    var list = document.getElementById('list2'),
        item = document.createElement('li');
    item.innerHTML = '<input type="checkbox" />' + newItem;
    list.appendChild(item);
}

function rem1() {
 
    var list = document.getElementById('list2'),
        items = Array.prototype.slice.call(list.childNodes),
        item;
    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            list.removeChild(item);
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function add3() {
   
    var list = document.getElementById('list3'),
        item = document.createElement('li');
    item.innerHTML = '<input type="checkbox" />' + newItem;
    list.appendChild(item);
}

function rem3() {
   
    var list = document.getElementById('list3'),
        items = Array.prototype.slice.call(list.childNodes),
        item;
    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            list.removeChild(item);
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function add4() {
    let newItem=prompt("Add Item Here!")
    var list = document.getElementById('list4'),
        item = document.createElement('li');
    item.innerHTML = '<input type="checkbox" />' + newItem;
    list.appendChild(item);
}

function rem3() {
    var list = document.getElementById('list4'),
        items = Array.prototype.slice.call(list.childNodes),
        item;
    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            list.removeChild(item);
        }
    }
}



