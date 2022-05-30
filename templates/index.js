//alert("working")


var count_html = document.getElementById("count-num");
var count = 0;


function saveP(){
	var cp = document.getElementById("count-p")
	cp.innerText += count+"-"
}


function count_(){
	count = count+1;
	count_html.innerText=count;
}

function save(){
	saveP();
	count_html.textContent=0
	count=0;
}

function error(){
	document.getElementById("error").textContent="Something went wrong! Please try again later"
}



//     Black Jack

var fCard = getCards()
var sCard = getCards()

var cards =[fCard,sCard]


var sum=fCard+sCard
function start(){
		document.querySelector("#card").textContent ="Cards / "
	var qs = document.querySelector("#new-card")
	
	if (sum==21){
		qs.textContent="You got the black jack!!"
	}else if (sum<21){
		qs.textContent="Do you want to draw new card"
		for(let i=0;i<cards.length;i++){
			document.querySelector("#card").textContent += cards[i] +" "
		}
		document.querySelector("#sum").textContent="sum :"+sum
	}else{
		qs.textContent ="You lose!"
	}
}


function new_(){
	var card = getCards()
	cards.push(card)
	sum += card
	start()
}


function getCards(){
	return Math.floor(Math.random()*12)+1
}