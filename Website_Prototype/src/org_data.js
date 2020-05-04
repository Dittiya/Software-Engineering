var db = new Dexie('item_database');
db.version(3).stores({
    item: 'id,src,price'
});

// populate database
$(document).ready(function () {
    var items = [];
    var i = 0;
    while (i < 5) {
        items.push({
            id: 'item' + i,
            src: '../Assets/item-ph.jpg',
            price: Math.floor(Math.random() * 401) + 100
        })
        i++;
    }
    db.item.bulkPut(items)
        .catch(Dexie.BulkError, function (e) {
            console.log(e);
        })
});

function initDatabase() {
    // get items in bulk
    var items = db.item;

    $('.item-container').empty();
    var html = '<table><thead><tr>...</tr></thead><tbody>';
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

$('.search-button').click(function () {
    $('.item-container').empty();
    var query = $('.search-term').val();
    var items = db.item;
    var html = '<table><thead><tr>...</tr></thead><tbody>';

    items.where('id')
        .equalsIgnoreCase(query)
        .toArray()
        .then(item => {
            $('.item-container').empty();
            if (query) {
                item.forEach(item => {
                    html += '<tr>';
                    html += '<td>Name ' + item.id + '</td>';
                    html += '<td><img src=' + item.src + '></td>';
                    html += '<td>Price: ' + item.price + '</td>';
                    html += "</tr>";
                })
                $(html).appendTo('.item-container');
            } else {
                initDatabase();
            }
        })
});

$(function () {
    initDatabase();
});