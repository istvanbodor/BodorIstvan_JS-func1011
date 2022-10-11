


/*
function fvNeve(param1, param2) {
    console.log(param1);
}


let masikFv = function (param1, param2) {
    console.log(param1);
};



let init = function () {
    console.log('Page loaded');
}
*/
/*
document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded');
    document.getElementById('szinezes').addEventListener('click', function() {
        document.body.style.backgroundColor = 'lightblue';
    });
});
*/

/*function osszeHasonlit(a, b) {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1
        }
        else {
            return 0;
        }
}
*/

// let t = [4, 78, 715, -99 ];
/*t.sort((a, b)=>{
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1
    }
    else {
        return 0;
    }

});*/
/*
t.sort((a, b) => {return a-b});
t = t.filter((e) => { return e > 0;});
t = t.map( e => e.toFixed(2));
console.log(t);

// Mellékhatás - side effect
function kettonelNagyobb (t) {
    return t.filter(e => e > 2);
}



document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded');
    let idozito;
    document.getElementById('szinezes').addEventListener('click', () => {
        document.body.style.backgroundColor = 'lightblue';
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
        }, 2000);
        if (idozito !== undefined) {
            clearInterval(idozito);
        }
       
        idozito = setInterval(() => {
            console.log(document.body.style.backgroundColor);
        }, 1000);
    });

    

});

*/

document.addEventListener('DOMContentLoaded', () => {
    console.log('Betöltve');
    let t = [];
    for (let i =0; i <20; i++) {
        t.push((Math.random() *30 +1).toFixed());
    }
    let t2 =[];
    t2 = t.filter(e => e%5==0);
    console.log(t);
    console.log(t2);
    document.getElementById('szinezes').addEventListener('click', () => {

        t2 = t.filter(e => e%5==0);
    });

    document.getElementById('hozzaad').addEventListener('click', () => {

       t2.push(document.getElementById('hozzaadando').value);
       console.log(t2);
    });
    let list = [new Szazlabu(100), new Szazlabu(10)];
    document.getElementById('listagomb').addEventListener('click', () => szazlabuMegjelenites('lista', list));


})


class Szazlabu{
    labakSzama;
    constructor(labakSzama)
    {
        this.labakSzama = labakSzama;
    }
    toString()
    {
        return this.labakSzama +  ' Lábú százlábú';
    }

}


function labakbolSzazlabuak(t)
{
    return t.map(e => new Szazlabu(e));
}

function szazlabuMegjelenites(id, lista)
{
    let szulo = document.getElementById(id);
        lista.forEach(element =>  {
            let gyerek = document.createElement('li');
            gyerek.textContent = element.toString();
            szulo.appendChild(gyerek);
            
        });



}