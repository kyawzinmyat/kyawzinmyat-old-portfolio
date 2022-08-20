function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}



async function prime_gen(upper_limit) // inclusive upper limit
{
    var array = new Array(upper_limit + 1);

    // init array with boolean value false
    array[0] = false;
    array[1] = false;
    for (var i = 2; i < array.length; i++) {
        array[i] = true;
    }
    for (var i = 2; i < Math.sqrt(upper_limit + 1); i++) {
        var box = document.getElementById(`${i}`);
        box.style.background = "green";
        await delay(100);
        if (array[i]) {
            for (var j = i ** 2; j < upper_limit + 1; j += i) {
                var box = document.getElementById(`${j}`);
                box.style.background = "E95858";
                box.style.opacity = i/10;
                await delay(10);
                array[j] = false;
            }
        }
    }

    for (var i = 0; i < array.length; i++)
    {
        var color = "red";
        var box = document.getElementById(`${i}`);
        box.style.opacity = 1;
        if (array[i])
        {
            color = "green";
        }
        box.style.background = color;
    }
    return array;
}

function init_box(upper_limit) {
    var rows = 10;
    var boxes = document.getElementById("boxes");
    boxes.style.display = "grid";
    boxes.style.gridTemplateColumns = "auto ".repeat(rows);
    console.log()
    boxes.style.margin = "4em";
    for (var i = 0; i < upper_limit + 1; i++) {
        boxes.innerHTML += `<p style ="padding: 20px;margin:-1px;border:1px solid black;
        font-size: 20px; text-align:center;" id = ${i}>${i}</p>`
    }
    prime_gen(upper_limit);
}

init_box(20);

