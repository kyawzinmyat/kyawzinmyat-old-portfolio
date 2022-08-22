function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    });
}



async function prime_gen(upper_limit) // inclusive upper limit
{
    var array = new Array(parseInt(upper_limit));
    // init array with boolean value false
    array[0] = false;
    array[1] = false;
    for (var i = 2; i < array.length; i++) {
        array[i] = true;
    }
    for (var i = 2; i < Math.sqrt(upper_limit); i++) {
        var box = document.getElementById(`${i}`);
        if (!box.style.background)
        {
            box.style.background = `#00ff0${i}`;
        }
        box.style.opacity = 10 / i;
        if (array[i]) {
            for (var j = i ** 2; j < upper_limit; j += i) {
                var box = document.getElementById(`${j}`);
                box.style.background = "#E3242B";
                await delay(100);
                array[j] = false;
            }
        }
    }

    for (var i = 0; i < array.length; i++)
    {
        var color = "#E3242B";
        var box = document.getElementById(`${i}`);
        box.style.opacity = 1;
        if (array[i])
        {
            color = "springgreen";
        }
        box.style.background = color;
    }
    return array;
}





function init_box(event) {
    event.preventDefault();
    var boxes = document.getElementById("boxes");
    boxes.innerHTML = "";
    var upper_limit = document.querySelector("input").value;
    var width = document.body.style.width / Math.ceil(Math.sqrt(upper_limit+1))
    for (var i = 0; i < upper_limit; i++) {
        boxes.innerHTML += `<p style ="padding-left:1em;padding-right:3em;padding-top:1em;border:1px solid black;
        font-size: 20px;width:${width}%;height:auto;" id = ${i}>${i}</p>`
    }
    prime_gen(upper_limit);
}

