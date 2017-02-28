var button_right = document.querySelector("#button_right");
var button_left = document.querySelector("#button_left");
var products = document.getElementsByClassName("product");
var div = document.getElementsByClassName("product_content");
var save_product;

products[0].innerHTML = products[3].innerHTML;
products[1].innerHTML = products[4].innerHTML;
products[5].innerHTML = products[2].innerHTML; 

div[0].classList.remove("opacity");

button_right.addEventListener("click", function()
{
	div[3].classList.remove("opacity");

	for(var i = 0; i < div.length; i++)
	{
		div[i].classList.add("moove_right");
	}

	var couldown = setInterval(function()
	{	
	save_product = products[0].innerHTML;
	products[0].innerHTML = products[5].innerHTML;
	products[5].innerHTML = products[4].innerHTML;
	products[4].innerHTML = products[3].innerHTML;
	products[3].innerHTML = products[2].innerHTML;
	products[2].innerHTML = products[1].innerHTML;
	products[1].innerHTML = save_product;

	div[3].classList.add("opacity");

	for(var j = 0; j < div.length; j++)
	{
		div[j].classList.remove("moove_right");
	}
		clearInterval(couldown);
	}, 1500);	
});

button_left.addEventListener("click", function()
{
	div[3].classList.remove("opacity");

	for(var i = 0; i < div.length; i++)
	{
		div[i].classList.add("moove_left");
	}

	var couldown = setInterval(function()
	{	
	save_product = products[5].innerHTML;

	products[5].innerHTML = products[0].innerHTML;
	products[0].innerHTML = products[1].innerHTML;
	products[1].innerHTML = products[2].innerHTML;
	products[2].innerHTML = products[3].innerHTML;
	products[3].innerHTML = products[4].innerHTML;
	products[4].innerHTML = save_product;

	div[3].classList.add("opacity");

	for(var j = 0; j < div.length; j++)
	{
		div[j].classList.remove("moove_left");
	}
		clearInterval(couldown);
	}, 1500);	
});