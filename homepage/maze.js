
function set_true_gen_maze()
{
    generate_maze = true;
}

function set_false_gen_maze()
{
    generate_maze = false;
}

var rows, cols;
var w = 40;

var maze;

function setup() {
    var can = createCanvas(800, 800);
    can.position(200, 200)
    cols = floor(width / w);
    rows = floor(height / w);
    maze = new Array(rows).fill(0).map(() => new Array(cols).fill(-1));
    frameRate(60);
    for (var x = 0; x < rows; x++) {
        for (var y = 0; y < cols; y++) {
            var cell = new Cell(x, y);
            maze[x][y] = (cell);
        }
    }
}


var frointer = [[0,0]];
var prev = null;

var generate_maze = false;

function draw() {
    background(100);
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            maze[i][j].show();
        }
    }
    if (generate_maze)
    {
        generate();
    }
}

function generate()
{

    var current_index = frointer.pop();
    var current = maze[current_index[0]][current_index[1]];
    if (!current.visited){
        var prev_wall = current_index[2] == 3 ? 1 :
                            current_index[2] == 1 ? 3 :
                            current_index[2] == 2 ? 0 :
                            2;
        current.wall[prev_wall] = false;
        current.visited = true;
        current.highlight();
        if (prev)
        {
            //console.log(current.row, current.col);
            prev.wall[current_index[2]] = false;
        }
        var next = current.get_neg();
        for (var i = 0; i < next.length; i++)
        {
            frointer.push(next[i]);
        }
        prev = current;
    }
}

function Cell(i, j) {
    this.row = i;
    this.col = j;
    this.visited = false;
    this.wall = [true, true, true, true];

    this.highlight = function()
    {
        var x = this.row * w;
        var y = this.col * w;
        noStroke();
        fill(0, 0, 255, 50);
        rect(x, y, w, w);
    }

    this.get_neg = function () {
        var neigh = [];
        // up
        if (this.row > 0) {
            if (!maze[this.row - 1][this.col].visited) {
                neigh.push([this.row - 1, this.col, 3, "left"]);
            }
        }
        // down
        if (this.row < rows - 1) {
            if (!maze[this.row + 1][this.col].visited) {
                neigh.push([this.row + 1, this.col, 1, "right"]);
            }
        }
        // left
        if (this.col > 0){
            if (!maze[this.row][this.col - 1].visited) {
                neigh.push([this.row, this.col - 1, 0, "up"]);
            }
        }
        //right
        if (this.col < cols - 1) {
            if (!maze[this.row][this.col + 1].visited) {
                neigh.push([this.row, this.col + 1, 2, "down"]);
            }
        }
        shuffleArray(neigh);
        return neigh;

    }

    this.show = function () {
        var x = this.row * w;
        var y = this.col * w;
        stroke(255);
        if (this.wall[0]) {
            line(x, y, x + w, y);
        }
        if (this.wall[1]) {
            line(x + w, y, x + w, y + w);
        }
        if (this.wall[2]) {
            line(x + w, y + w, x, w + y);
        }
        if (this.wall[3]) {
            line(x, y + w, x, y);
        }
        if (this.visited)
        {
            noStroke();
            fill(25, 20, 255, 100);
            rect(x, y, w, w);
        }
    }
}




function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

