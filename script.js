function f1(a, b){
    if (a > b) {
        console.log(a + ' > ' + b);
        return;
    }
    if (a < b) {
        console.log(a + ' < ' + b);
        return;
    }
    if (a === b) {
        console.log(a + ' === ' + b);
        return;
    }
    if (a == b) {
        console.log(a + ' == ' + b);
        return;
    }
}

let isNum = function (str) {
    if ((str % 10) === 0){
        console.log('TRUE');

    } else {
        console.log('FALSE');
    }

}

var clicks = 0;

function howManyClicks(x = clicks){
    if (isNaN(Number(+x))) {
        return;
    }

    if (x !== clicks) {
        clicks = x;
    }

    clicks++;
    alert(clicks);
}