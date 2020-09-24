const btnSend = document.querySelector('#send')
const tableElement = document.querySelector('.tableCon tbody')
const tableDiv = document.querySelector('.tableDiv')

const namePage = document.querySelector('.namePage')
const urlPage = document.querySelector('.urlPage')


// Events
loadingEvent()
function loadingEvent(){
	document.addEventListener('DOMContentLoaded', startApp)
	namePage.addEventListener('blur', formValid)
	urlPage.addEventListener('blur', formValid)
	btnSend.addEventListener('click', addPage)
}


function startApp(){
	btnSend.disabled = true
}


function formValid(e){
	if (e.target.value.length > 0) {
		e.target.classList.remove('border', 'border-danger')
		e.target.classList.add('border', 'border-success')
	} else {
		e.target.classList.remove('border', 'border-success')
		e.target.classList.add('border', 'border-danger')
	}

	const exReg = /^(ftp|http|https):\/\/[^ "]+$/
	if (exReg.test(urlPage.value) && namePage.value.length > 0) {
		btnSend.disabled = false
	} else if (exReg.test(urlPage.value) === false) {
		urlPage.classList.add('border', 'border-danger')
		btnSend.disabled = true
	} else {
		btnSend.disabled = true
	}
}

function addPage(e){
	e.preventDefault()

	const row = document.createElement('tr')
	row.innerHTML = `
		<td>${namePage.value}</td>
		<td>
			<a href='${urlPage.value}'>${urlPage.value}</a>
		</td>
	`

	tableElement.appendChild(row)
}