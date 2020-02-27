'use strict';
 var hrs = ['6am', '7am', '8am' , '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

 var seattle = {
     minCust: 23,
     maxCust: 65,
     avgCookie: 6.3,
     rand: [],
     randomCust: function (min, max) {
         for (var i = 0; i < hrs.length; i++) {
             this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust))+ this.minCust);

         }
     },
     cookies: [],
     cookiePrHr: function () {
         for (var j = 0; j < hrs.length; j++) {
             this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
         }

     },
     total: 0,
     totalcookie: function () {
         var total2 = 0;
         for (var k = 0; k < this.cookies.length; k++) {
             total2 = total2 + this.cookies[k];
         } this.total = total2;
     },

     render: function () {
         var container = document.getElementById('seattleCookies');

         var article1 = document.createElement('article');
         container.appendChild(article1);

         var h4E1 = document.createElement('h4');
         article1.appendChild(h4E1);
         h4E1.textContent = 'Seattle';

         var ull1 = document.createElement('ul');
         article1.appendChild(ull1);
         for (var i = 0; i < this.cookies.length; i++) {
             var li1 = document.createElement('li');
             ull1.appendChild(li1);
             li1.textContent = `${hrs[i]}: ${this.cookies[i]} cookies`;
         }

         var li1 = document.createElement('li');
         ull1.appendChild(li1);
         li1.textContent = `Total: ${this.total} cookies`;
     }
 }

 seattle.randomCust();
 seattle.cookiePrHr();
 seattle.totalcookie();
 seattle.render();
 console.log(seattle);


 var Tokyo = {
     minCust: 3,
     maxCust: 24,
     avgCookie: 1.2,
     rand: [],
     randomCust: function (min, max) {
         for (var i = 0; i < hrs.length; i++) {
             this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust))+ this.minCust);

         }
     },
     cookies: [],
     cookiePrHr: function () {
         for (var j = 0; j < hrs.length; j++) {
             this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
         }

     },
     total: 0,
     totalcookie: function () {
         var total2 = 0;
         for (var k = 0; k < this.cookies.length; k++) {
             total2 = total2 + this.cookies[k];
         } this.total = total2;
     },

     render: function () {
         var container = document.getElementById('seattleCookies');

         var article1 = document.createElement('article');
         container.appendChild(article1);

         var h4E1 = document.createElement('h4');
         article1.appendChild(h4E1);
         h4E1.textContent = 'Tokyo';

         var ull1 = document.createElement('ul');
         article1.appendChild(ull1);
         for (var i = 0; i < this.cookies.length; i++) {
             var li1 = document.createElement('li');
             ull1.appendChild(li1);
             li1.textContent = `${hrs[i]}: ${this.cookies[i]} cookies`;
         }

         var li1 = document.createElement('li');
         ull1.appendChild(li1);
         li1.textContent = `Total: ${this.total} cookies`;
     }
 }

 Tokyo.randomCust();
 Tokyo.cookiePrHr();
 Tokyo.totalcookie();
 Tokyo.render();
 console.log(Tokyo);


 var Dubai = {
     minCust: 11,
     maxCust: 38,
     avgCookie: 3.7,
     rand: [],
     randomCust: function (min, max) {
         for (var i = 0; i < hrs.length; i++) {
             this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust))+ this.minCust);

         }
     },
     cookies: [],
     cookiePrHr: function () {
         for (var j = 0; j < hrs.length; j++) {
             this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
         }

     },
     total: 0,
     totalcookie: function () {
         var total2 = 0;
         for (var k = 0; k < this.cookies.length; k++) {
             total2 = total2 + this.cookies[k];
         } this.total = total2;
     },

     render: function () {
         var container = document.getElementById('seattleCookies');

        var article1 = document.createElement('article');
         container.appendChild(article1);

         var h4E1 = document.createElement('h4');
         article1.appendChild(h4E1);
         h4E1.textContent = 'Dubai';

         var ull1 = document.createElement('ul');
         article1.appendChild(ull1);
         for (var i = 0; i < this.cookies.length; i++) {
             var li1 = document.createElement('li');
             ull1.appendChild(li1);
             li1.textContent = `${hrs[i]}: ${this.cookies[i]} cookies`;
         }

         var li1 = document.createElement('li');
         ull1.appendChild(li1);
         li1.textContent = `Total: ${this.total} cookies`;
     }
 }

 Dubai.randomCust();
 Dubai.cookiePrHr();
 Dubai.totalcookie();
 Dubai.render();
 console.log(Dubai);


 var Paris = {
     minCust: 20,
     maxCust: 38,
     avgCookie: 2.3,
     rand: [],
     randomCust: function (min, max) {
         for (var i = 0; i < hrs.length; i++) {
             this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust))+ this.minCust);

         }
     },
     cookies: [],
     cookiePrHr: function () {
         for (var j = 0; j < hrs.length; j++) {
             this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
         }

     },
     total: 0,
     totalcookie: function () {
         var total2 = 0;
         for (var k = 0; k < this.cookies.length; k++) {
             total2 = total2 + this.cookies[k];
         } this.total = total2;
     },

     render: function () {
         var container = document.getElementById('seattleCookies');

         var article1 = document.createElement('article');
         container.appendChild(article1);

         var h4E1 = document.createElement('h4');
         article1.appendChild(h4E1);
         h4E1.textContent = 'Paris';

         var ull1 = document.createElement('ul');
         article1.appendChild(ull1);
         for (var i = 0; i < this.cookies.length; i++) {
             var li1 = document.createElement('li');
             ull1.appendChild(li1);
             li1.textContent = `${hrs[i]}: ${this.cookies[i]} cookies`;
         }

        var li1 = document.createElement('li');
         ull1.appendChild(li1);
         li1.textContent = `Total: ${this.total} cookies`;
     }
 }

 Paris.randomCust();
 Paris.cookiePrHr();
 Paris.totalcookie();
 Paris.render();
 console.log(Paris);


 var Lima = {
     minCust: 2,
     maxCust: 16,
     avgCookie: 4.6,
     rand: [],
     randomCust: function (min, max) {
         for (var i = 0; i < hrs.length; i++) {
             this.rand.push(Math.floor(Math.random() * (this.maxCust - this.minCust))+ this.minCust);

         }
     },
     cookies: [],
     cookiePrHr: function () {
         for (var j = 0; j < hrs.length; j++) {
             this.cookies.push(Math.floor(this.avgCookie * this.rand[j]));
         }

     },
     total: 0,
     totalcookie: function () {
         var total2 = 0;
         for (var k = 0; k < this.cookies.length; k++) {
             total2 = total2 + this.cookies[k];
         } this.total = total2;
     },

     render: function () {
         var container = document.getElementById('seattleCookies');

         var article1 = document.createElement('article');
         container.appendChild(article1);
         var h4E1 = document.createElement('h4');
         article1.appendChild(h4E1);
        h4E1.textContent = 'Lima';

         var ull1 = document.createElement('ul');
         article1.appendChild(ull1);
         for (var i = 0; i < this.cookies.length; i++) {
             var li1 = document.createElement('li');
             ull1.appendChild(li1);
             li1.textContent = `${hrs[i]}: ${this.cookies[i]} cookies`;
        }

         var li1 = document.createElement('li');
         ull1.appendChild(li1);
         li1.textContent = `Total: ${this.total} cookies`;
     }
 }

 Lima.randomCust();
 Lima.cookiePrHr();
 Lima.totalcookie();
 Lima.render();
 console.log(Lima);