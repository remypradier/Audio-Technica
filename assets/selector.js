var button_right = document.querySelector("#button_right");
var button_left = document.querySelector("#button_left");
var products = document.getElementsByClassName("product");
var product_active = 1;

button_right.addEventListener("click", function()
{
	for(var i = 0; i < products.length; i++)
	{
		products[i].classList.remove("product_active");
	}
	if(product_active < 2)
	{
		product_active++;
	}
	else
	{
		product_active = 0;
	}
	products[product_active].classList.add("product_active");	
});

button_left.addEventListener("click", function()
{
	for(var i = 0; i < products.length; i++)
	{
		products[i].classList.remove("product_active");
	}
	if(product_active > 0)
	{
		product_active--;
	}
	else
	{
		product_active = 2;
	}
	products[product_active].classList.add("product_active");	
});