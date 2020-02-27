'use srict';

var locations = [];
var hrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
function Cookies(location, minCust, maxCust, avgCookie) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookie = avgCookie;
    this.rand = [];
    this.cookies = [];
    this.total = 0;
    locations.push(this);
    console.log('locations arry', locations);

}
Cookies.prototype.randomCust = function () {
    for (var i = 0; i < hrs.length; i++) {
        this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust);
    }

}
Cookies.prototype.cookiePrHr = function () {
    for (var j = 0; j < hrs.length; j++) {
        this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
        console.log(this.cookies);
    }
}
Cookies.prototype.totalcookie = function () {
    var total2 = 0;
    for (var k = 0; k < hrs.length; k++) {
        total2 = total2 + this.cookies[k];
    }
    this.total = total2;
}

var article1 = document.createElement('article');
var tableEl = document.createElement('table');
article1.appendChild(tableEl);

function header() {
    var container = document.getElementById('seattleCookies');
    container.appendChild(article1);
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var thE1 = document.createElement('th');
    trEl.appendChild(thE1);
    thE1.textContent = '';
    for (var j = 0; j < hrs.length; j++) {
        var thE2 = document.createElement('th');
        trEl.appendChild(thE2);
        thE2.textContent = hrs[j];
    }
    var thE3 = document.createElement('th');
    trEl.appendChild(thE3);
    thE3.textContent = 'Daily Location Total';


}


Cookies.prototype.render = function () {
    // console.log(this);
    var trE2 = document.createElement('tr');
    tableEl.appendChild(trE2);
    var tdEl = document.createElement('td');
    trE2.appendChild(tdEl);
    tdEl.textContent = this.location;
    for (var m = 0; m < this.cookies.length; m++) {
        var tdE2 = document.createElement('td');
        trE2.appendChild(tdE2);
        tdE2.textContent = this.cookies[m];
    }
    var tdE3 = document.createElement('td');
    trE2.appendChild(tdE3);
    tdE3.textContent = this.total;
}


function footer() {
    var trE3 = document.createElement('tr');
    tableEl.appendChild(trE3);
    var tdE4 = document.createElement('td');
    trE3.appendChild(tdE4);
    tdE4.textContent = 'Totals';
    var totalSum = 0;
    for (var i = 0; i < hrs.length; i++) {
        var hrsTotal = 0; 
        for (var f = 0; f < locations.length; f++) {
            hrsTotal += locations[f].cookies[i];
        }
        totalSum+=hrsTotal;
        var tdE5 = document.createElement('td');
        trE3.appendChild(tdE5);
        tdE5.textContent = hrsTotal;
    }
    var tdE6 = document.createElement('td');
    trE3.appendChild(tdE6);
    tdE6.textContent = totalSum;

    var trE4 = document.createElement('tr');
    tableEl.appendChild(trE4);
    var tdE7 = document.createElement('td');
    trE4.appendChild(tdE7);
    tdE7.textContent = loc;
}


var Seattle = new Cookies('Seattle', 23, 65, 6.3);
var Tokyo = new Cookies('Tokyo', 3, 24, 1.2);
var Dubai = new Cookies('Dubai', 11, 38, 3.7);
var Paris = new Cookies('Paris', 20, 38, 2.3);
var Lima = new Cookies('Lima', 2, 16, 4.6);

header();
for (var i = 0; i < locations.length; i++) {
    locations[i].randomCust();
    locations[i].cookiePrHr();
    locations[i].totalcookie();
    locations[i].render();
}
footer();


var locationsForm = document.getElementById('Locations');
locationsForm.addEventListener('submit', function (event) {
    // event.preventDefault;
    var loc = event.target.location.value;
    console.log(event.target);
    console.log(loc);
    var miniCust = event.target.minCust.value;
    var maxiCust = event.target.maxCust.value;
    var avrgcookies = event.target.avgCookies.value;
    var cookiesObj = new Cookies(location,minCust,maxCust,avgCookie);
    cookiesObj.randomCust();
    cookiesObj.cookiePrHr();
    cookiesObj.totalcookie();

}
)













// / var hrs = ['6am', '7am', '8am' , '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

// var seattle = {
//     minCust: 23,
//     maxCust: 65,
//     avgCookie: 6.3,
//     rand: [],
//     randomCust: function (min, max) {
//         for (var i = 0; i < hrs.length; i++) {
//             this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust))+ this.minCust);

//         }
//     },
//     cookies: [],
//     cookiePrHr: function () {
//         for (var j = 0; j < hrs.length; j++) {
//             this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
//         }

//     },
//     total: 0,
//     totalcookie: function () {
//         var total2 = 0;
//         for (var k = 0; k < this.cookies.length; k++) {
//             total2 = total2 + this.cookies[k];
//         } this.total = total2;
//     },

//     render: function () {
//         var container = document.getElementById('seattleCookies');

//         var article1 = document.createElement('article');
//         container.appendChild(article1);

//         var h4E1 = document.createElement('h4');
//         article1.appendChild(h4E1);
//         h4E1.textContent = 'Seattle';

//         var ull1 = document.createElement('ul');
//         article1.appendChild(ull1);
//         for (var i = 0; i < this.cookies.length; i++) {
//             var li1 = document.createElement('li');
//             ull1.appendChild(li1);
//             li1.textContent = `${hrs[i]}: ${this.cookies[i]} cookies`;
//         }

//         var li1 = document.createElement('li');
//         ull1.appendChild(li1);
//         li1.textContent = `Total: ${this.total} cookies`;
//     }
// }

// seattle.randomCust();
// seattle.cookiePrHr();
// seattle.totalcookie();
// seattle.render();
// console.log(seattle);


// var Tokyo = {
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2,
//     rand: [],
//     randomCust: function (min, max) {
//         for (var i = 0; i < hrs.length; i++) {
//             this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust))+ this.minCust);

//         }
//     },
//     cookies: [],
//     cookiePrHr: function () {
//         for (var j = 0; j < hrs.length; j++) {
//             this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
//         }

//     },
//     total: 0,
//     totalcookie: function () {
//         var total2 = 0;
//         for (var k = 0; k < this.cookies.length; k++) {
//             total2 = total2 + this.cookies[k];
//         } this.total = total2;
//     },

//     render: function () {
//         var container = document.getElementById('seattleCookies');

//         var article1 = document.createElement('article');
//         container.appendChild(article1);

//         var h4E1 = document.createElement('h4');
//         article1.appendChild(h4E1);
//         h4E1.textContent = 'Tokyo';

//         var ull1 = document.createElement('ul');
//         article1.appendChild(ull1);
//         for (var i = 0; i < this.cookies.length; i++) {
//             var li1 = document.createElement('li');
//             ull1.appendChild(li1);
//             li1.textContent = `${hrs[i]}: ${this.cookies[i]} cookies`;
//         }

//         var li1 = document.createElement('li');
//         ull1.appendChild(li1);
//         li1.textContent = `Total: ${this.total} cookies`;
//     }
// }

// Tokyo.randomCust();
// Tokyo.cookiePrHr();
// Tokyo.totalcookie();
// Tokyo.render();
// console.log(Tokyo);


// var Dubai = {
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.7,
//     rand: [],
//     randomCust: function (min, max) {
//         for (var i = 0; i < hrs.length; i++) {
//             this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust))+ this.minCust);

//         }
//     },
//     cookies: [],
//     cookiePrHr: function () {
//         for (var j = 0; j < hrs.length; j++) {
//             this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
//         }

//     },
//     total: 0,
//     totalcookie: function () {
//         var total2 = 0;
//         for (var k = 0; k < this.cookies.length; k++) {
//             total2 = total2 + this.cookies[k];
//         } this.total = total2;
//     },

//     render: function () {
//         var container = document.getElementById('seattleCookies');

//         var article1 = document.createElement('article');
//         container.appendChild(article1);

//         var h4E1 = document.createElement('h4');
//         article1.appendChild(h4E1);
//         h4E1.textContent = 'Dubai';

//         var ull1 = document.createElement('ul');
//         article1.appendChild(ull1);
//         for (var i = 0; i < this.cookies.length; i++) {
//             var li1 = document.createElement('li');
//             ull1.appendChild(li1);
//             li1.textContent = `${hrs[i]}: ${this.cookies[i]} cookies`;
//         }

//         var li1 = document.createElement('li');
//         ull1.appendChild(li1);
//         li1.textContent = `Total: ${this.total} cookies`;
//     }
// }

// Dubai.randomCust();
// Dubai.cookiePrHr();
// Dubai.totalcookie();
// Dubai.render();
// console.log(Dubai);


// var Paris = {
    // minCust: 20,
    // maxCust: 38,
    // avgCookie: 2.3,
//     rand: [],
//     randomCust: function (min, max) {
//         for (var i = 0; i < hrs.length; i++) {
//             this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust))+ this.minCust);

//         }
//     },
//     cookies: [],
//     cookiePrHr: function () {
//         for (var j = 0; j < hrs.length; j++) {
//             this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
//         }

//     },
//     total: 0,
//     totalcookie: function () {
//         var total2 = 0;
//         for (var k = 0; k < this.cookies.length; k++) {
//             total2 = total2 + this.cookies[k];
//         } this.total = total2;
//     },

//     render: function () {
//         var container = document.getElementById('seattleCookies');

//         var article1 = document.createElement('article');
//         container.appendChild(article1);

//         var h4E1 = document.createElement('h4');
//         article1.appendChild(h4E1);
//         h4E1.textContent = 'Paris';

//         var ull1 = document.createElement('ul');
//         article1.appendChild(ull1);
//         for (var i = 0; i < this.cookies.length; i++) {
//             var li1 = document.createElement('li');
//             ull1.appendChild(li1);
//             li1.textContent = `${hrs[i]}: ${this.cookies[i]} cookies`;
//         }

//         var li1 = document.createElement('li');
//         ull1.appendChild(li1);
//         li1.textContent = `Total: ${this.total} cookies`;
//     }
// }

// Paris.randomCust();
// Paris.cookiePrHr();
// Paris.totalcookie();
// Paris.render();
// console.log(Paris);


// var Lima = {
//     minCust: 2,
//     maxCust: 16,
//     avgCookie: 4.6,
//     rand: [],
//     randomCust: function (min, max) {
//         for (var i = 0; i < hrs.length; i++) {
//             this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust))+ this.minCust);

//         }
//     },
//     cookies: [],
//     cookiePrHr: function () {
//         for (var j = 0; j < hrs.length; j++) {
//             this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
//         }

//     },
//     total: 0,
//     totalcookie: function () {
//         var total2 = 0;
//         for (var k = 0; k < this.cookies.length; k++) {
//             total2 = total2 + this.cookies[k];
//         } this.total = total2;
//     },

//     render: function () {
//         var container = document.getElementById('seattleCookies');

//         var article1 = document.createElement('article');
//         container.appendChild(article1);

//         var h4E1 = document.createElement('h4');
//         article1.appendChild(h4E1);
//         h4E1.textContent = 'Lima';

//         var ull1 = document.createElement('ul');
//         article1.appendChild(ull1);
//         for (var i = 0; i < this.cookies.length; i++) {
//             var li1 = document.createElement('li');
//             ull1.appendChild(li1);
//             li1.textContent = `${hrs[i]}: ${this.cookies[i]} cookies`;
//         }

//         var li1 = document.createElement('li');
//         ull1.appendChild(li1);
//         li1.textContent = `Total: ${this.total} cookies`;
//     }
// }

// Lima.randomCust();
// Lima.cookiePrHr();
// Lima.totalcookie();
// Lima.render();
// console.log(Lima);
