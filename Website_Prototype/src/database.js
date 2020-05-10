
// get item
var db = new Dexie('item_database');
db.version(3).stores({
    item: 'id,src,price'
});

function initDatabase() {
    // get items in bulk
    var items = db.item;

    $('.item-container').empty();
    var html = '<table><thead><tr></tr></thead><tbody>';
    items.toArray()
        .then(item => {
            item.forEach(item => {
                html += '<tr>';
                html += '<td>Name ' + item.id + '</td>';
                html += '<td><img src=' + item.src + '></td>';
                html += '<td>Price: ' + item.price + '</td>';
                html += "</tr>";
            })
            $(html).appendTo('.item-container');
        })
}

$(function () {
    initDatabase()
});

function addItem () {
    var names = $('#itemName').val();
    var prices = $('#itemPrice').val();
    
    db.item.put({
        id: names,
        src: '../Assets/item-ph.jpg',
        price: prices
    })   
}

$('#addButton').click(function (e) { 
    e.preventDefault();
    addItem();
});