

var box = document.getElementById("box");



var test = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
var test2 = [...test];


var width;

var max_height = 20;

async function insertion_sort(array) {
    make_box(array);
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            while (!start_)
            {
                await delay(1);
            }
            var suffix = "index_";
            var current = document.getElementById(suffix + i);
            var next = document.getElementById(suffix + j);
            if (array[i] > array[j]) {
                current.style.backgroundColor = "grey";
                next.style.backgroundColor = "yellow";
                let delayres = await delay(de);
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                current.style.backgroundColor = "#00ffff";
                next.style.backgroundColor = "#00ffff";
                current.style.height = `${array[i] * 0.8}em`;
                next.style.height = `${array[j] * 0.8}em`;
            }
        }
    }
}




function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}

var start_ = false;
var stop_ = false;
var called = false;

function start() {
    if (!called) {
        reset_boxes()
        insertion_sort([...test]);
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
    reset_boxes();
    insertion_sort([...test]);
}


function reset_boxes()
{
    var box = document.getElementById("box");
    box.innerHTML = '';
}

var p = false;
var de = ((test.length) + 1 / test.length) / test.length;


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
        height: ${max_height}em; background-color: #00ffff; color:white;
        border: 1px solid white"></p>`;
        j = "";
    }
}