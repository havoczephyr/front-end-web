console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted!');
}


let form = document.querySelector('form#contact');

const cat = document.getElementById("sun-yoga")
cat.addEventListener('mouseover', () => alert('sun cat blesses you!'))

form.addEventListener('submit', handleSubmit);