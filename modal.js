var buttonOpen = document.getElementById('btnOpenModal');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var buttonClose = document.getElementById('btnCloseModal');
var buttonConfirm = document.getElementById('btnConfirm');
var outputString = document.querySelector('#quote');
var textEdit = document.querySelector('.modal textarea');

var quote = 'Hey, Javascript is Awesome!';
var editedQuote = '';

outputString.textContent = quote;

function closeModal() {
	modal.style.display = 'none';
	backdrop.style.display = 'none';
}

buttonOpen.addEventListener('click', () => {
	modal.style.display = 'block';
	backdrop.style.display = 'block';
	textEdit.value = quote;
	editedQuote = quote;
});

buttonClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

buttonConfirm.addEventListener('click', () => {
	closeModal();
	if(editedQuote.trim().length > 0) {
		quote = editedQuote;
		outputString.textContent = quote;
	}
})

textEdit.addEventListener('input', () => {
	editedQuote = textEdit.value;
})


