var seattle = {
    minCust : 23,
    maxCust : 65,
    avgCookie : 6.3,
    rand : 0,
    randomCust: function(min,max) {
        this.rand = getrandomNum(min,max);
    },
    render : function() {
    //   var container = document.getElementsByName('html');

      
        var body1 = document.getElementsByName('body');
    //    html.appendChild(body1);
       
        var article1 = document.createElement('article');
       body.appendChild(article1);
       
        var h4E1 = document.createElement('h4');
        articl.appendChild(h4E1);
        h4E1.textContent = 'Seattle';

        var ull1 = document.createElement('ul');
        for(var i=0; i<hrs.lenght ; i++) {
            var li1 = document.createElement('li');
            ull1.appendChild(li1);
            
        }
        
        // var li1 = document.createElement('li');
        // ull1.appendChild(li1);
        // li1.textContent = '6am: ';

        // var li2 = document.createElement('li');
        // ull1.appendChild(li2);
        // li2.textContent = '7am: ';

        // var li3 = document.createElement('li');
        // ull1.appendChild(li3);
        // li3.textContent = '8am: ';

        // var li4 = document.createElement('li');
        // ull1.appendChild(li4);
        // li4.textContent = '9am: ';

        // var li5 = document.createElement('li');
        // ull1.appendChild(li5);
        // li5.textContent = '10am: ';

        // var li6 = document.createElement('li');
        // ull1.appendChild(li7);
        // li7.textContent = '11am: ';

        // var li8 = document.createElement('li');
        // ull1.appendChild(li8);
        // li8.textContent = '12am: ';

        // var li9 = document.createElement
    }
    
}
seattle.randomCust(23,65);
seattle.render();
console.log(seattle);

function getrandomNum(min,max) {
    var newNum = Math.floor(Math.random()* (max-min) + min);
return newNum;
}

function cookiePerHr(avgCookie,rand) {
    avgCookie
    rand
    var hrs = [6,7,8,9,10,11,12,1,2,3,4,5,6,7]
    for (var i=0; i<hrs.lenght; i++){
        console.log(hrs[i]);
        custHr = avgCookie * rand
        // var custHr = Math.floor(Math.random() * (max - min) + min);
        console.log (custHr);
    }
    return custHr;
}
cookiePerHr(avgCookie,rand);
       


 



