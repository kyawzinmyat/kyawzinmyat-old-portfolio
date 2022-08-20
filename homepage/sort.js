

var box = document.getElementById("box");



//var test = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
//var test2 = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
var test = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
var test2 = [...test];

var width;

var max_height = 20;

async function bubble_sort(array) {
    make_box([...test]);

    var counter = -1;
    while (counter != 0) {
        counter = 0;
        for (var i = 0; i < array.length - 1; i++) {
            while (!start_) {
                let delayres = await delay(10);
            }
            var suffix = "index_";
            var current = document.getElementById(suffix + i);
            var next = document.getElementById(suffix + (i + 1));
            if (array[i] > array[i + 1]) {
                current.style.backgroundColor = "green";
                next.style.backgroundColor = "red";
                let delayres = await delay(de);
                var temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                counter += 1;
                current.style.height = `${array[i] * 0.8}em`;
                next.style.height = `${array[i + 1] * 0.8}em`;
                if (p) {
                    next.innerHTML = array[i + 1];
                    current.innerHTML = array[i];
                }
            }
            current.style.backgroundColor = "#00ffff";
            next.style.backgroundColor = "#00ffff";
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

function start(event) {
    if (!called) {
        bubble_sort([...test]);
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
    de = ((test.length) + 1 / test.length) / test.lenght;
    num.value = "";
}


function restart() {
    var box = document.getElementById("box");
    while (box.lastChild) {
        box.lastChild.remove();
    }
    bubble_sort([...test]);
}

var p = false;



function make_box(array) {
    if (array.length < 20) {
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

de = ((test.length) + 1 / test.length) / test.lenght;
