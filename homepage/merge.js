async function merge(left, right) {
    var l = 0;
    var r = 0;
    var result = [];
    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l]);
            l += 1;
        }
        else {
            result.push(right[r]);
            r += 1;
        }
    }

    while (r < right.length) {
        result.push(right[r]);
        r += 1
    }

    while (l < left.length) {
        result.push(left[l]);
        l += 1;
    }
    return result;
}




async function draw_test2(s, e, result)
{
    for (var i = s; i < e; i ++)
    {
        var box = document.getElementById(suffix + i);
        //var next = document.getElementsByClassName(`${result[i]}`);
        box.style.backgroundColor = "#00ffff";
        var b_h = box.style.height;
        await delay(de/12000);
        box.style.height = `${result[i - s] * 0.8}em`;
    }
}







async function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(42);
        }, delayInms);
    });
}




async function sort(array, start, end) {
    console.log(array)
    if (array.length > 1) {
        while(!start_)
        {
            await delay(1);
        }
        var middle = Math.round((array.length) / 2);
        var left = await sort(array.slice(0, middle), start, middle);
        var right = await sort(array.slice(middle, array.length), middle, end);
        result = await merge(left, right, start, end);
        await draw_test2(start, end, result);
        return result;
    }
    return array;
}

function start_sort(test) {
    make_box(test);
    sort(test, 0 , test.length);
}

var max_height = 20;
var suffix = "index_";

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
        box.innerHTML += `<p id = index_${i}
        class = "${array[i]}"
        style = "width:${width}%;
        height: ${max_height}em; background-color: #00ffff; color:white;
        border: 1px solid white"></p>`;
        j = "";
    }
}

var start_ = false;
var stop_ = false;
var called = false;

function start(event) {
    reset_boxes();
    if (!called) {
        start_sort([...test]);
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

var p;

function add(event) {
    var num = document.getElementById("num");
    test = Array.from({length: parseInt(num.value)}, () => Math.floor(Math.random() * 50));
    de = ((test.length) + 1 / test.length) / 10;
    num.value = "";
    reset_boxes();
}


function restart() {
    reset_boxes()
    start_sort([...test])
}


function reset_boxes()
{
    var box = document.getElementById("box");
    box.innerHTML = '';
}


var length = 50;



var test = Array.from({length: 100}, () => Math.floor(Math.random() * 40));
var de = ((test.length) + 1 / test.length) / test.length;
