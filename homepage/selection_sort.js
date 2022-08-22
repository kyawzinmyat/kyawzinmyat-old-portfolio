var test = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
var test2 = [...test];
var suffix = "index_";



var width;
var box = document.getElementById("box");

async function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(42);
        }, delayInms);
    });
}

var max_height = 20;


async function selection_sort(test) {
    make_box(test);
    for (var i = test.length - 1; i >= 0; i--) {
        var current = document.getElementById(suffix + i);
        current.style.backgroundColor = "green";
        var max = 0;
        while (!start_)
        {
            await delay(1);
        }
        for (var j = 1; j < i + 1; j++) {
            if (test[j] > test[max]) {
                await delay(de);
                var next = document.getElementById(suffix + j);
                next.style.backgroundColor = "red";
                max = j;
                await delay(de);
                next.style.backgroundColor = "black";
            }
        }
        var temp = test[i];
        test[i] = test[max];
        test[max] = temp;
        var next = document.getElementById(suffix + max);
        current.style.height = `${test[i] * 0.8}em`;
        next.style.height = `${test[max] * 0.8}em`;
        current.style.backgroundColor = "black";
        next.style.backgroundColor = "black";
    }
}





var start_ = false;
var stop_ = false;
var called = false;

function start(event) {
    if (!called) {
        reset_boxes();
        selection_sort([...test]);
        called = true;
    }
    if (!start_) {
        start_ = true;
        return;
    }
    start_ = false;
}

function stop(event) {
    if (!start_) {
        start_ = true;
        return;
    }
    start_ = false;
}


function add(event) {
    var num = document.getElementById("num");
    test = Array.from({length: parseInt(num.value)}, () => Math.floor(Math.random() * 50));
    de = ((test.length) + 1 / test.length) / 10;
    reset_boxes()
    num.value = "";
}


function restart() {
    reset_boxes()
    selection_sort([...test]);
}

var p = false;



function make_box(array) {
    if (test2.length < 20) {
        p = true;
    }
    width = 100 / array.length;
    for (var i = 0; i < array.length; i++) {
        max_height = Math.min(array[i] * 2, max_height);
        max_height = array[i] * 0.8;
        var j;
        if (p) {
            j = array[i];
        }
        else {
            j = '';
        }
        box.innerHTML += `<p id = index_${i} style = "width:${width}%;
        height: ${max_height}em; background-color: black; color:white;
        border: 1px solid white">${j}</p>`;
        j = "";
    }
}

function reset_boxes()
{
    var box = document.getElementById("box");
    box.innerHTML = '';
}

var de = ((test.length) + 1 / test.length) / test.length;