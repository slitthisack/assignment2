/**
Creates a shopping list and displays it on shopping.innerHTML
*/

var list = [];

// executes functions listed here
window.onload= function()
{
	promptUser();
	printList(list);
	printTotal(list);
}


function promptUser() 
{
	var i = 0; // list array index
	alert("To end the shopping list, leave one box blank and hit enter.");

	do 
	{
		// prompt user for required info
		// if any prompt is left blank, end item prompts
		var itemName = prompt("What would you like to buy?");
		if(!itemName) {break;}
		var itemPrice = prompt("What is its price?");
		if(!itemPrice) {break;}
		var itemCount = prompt("How many do you want?");
		if(!itemCount) {break;}

		// append list and increment index i
		list[i++] =
		{
			name: itemName,
			price: itemPrice,
			count: itemCount,
		};

	} while (true)
}


function printTotal(list)
{
	var sum = 0;

	for(var i = 0; i < list.length; i++)
	{
		sum += (list[i].price * list[i].count);
	}

	console.log("Checkout price: $" + sum);

	document.getElementById("checkoutTotal").innerHTML += "<p>Your total is $" + sum.toFixed(2) + "</p>";
}


//Prints the shopping list on the web page by changing the html code
//list: Array of items
function printList(list){
    for(let i = 0; i < list.length; i++){
        document.getElementById("shoppingList").innerHTML += "<tr><td>" + list[i].name  + "</td> <td>" + list[i].price  + "</td> <td>" + list[i].count  +'</td></tr>';
    }
}
