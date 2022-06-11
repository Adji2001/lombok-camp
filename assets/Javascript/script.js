const submit = document.getElementById('submit');
const username = document.form.username;
const textarea = document.form.textarea;
const bar = document.querySelector('.bar');
const nav = document.querySelector('.navHidden')

submit.addEventListener('click', () => {
	if (username.value == '' || textarea.value == '') {
		alert("Form tidak boleh kososng!");
	} else {
		alert(`Terimakasih ${username.value} atas feedbacknya`);
	}
});

bar.addEventListener('click', () => {
	nav.classList.toggle('see');
})