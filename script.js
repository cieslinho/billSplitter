const priceInput = document.querySelector('#price')
const peopleInput = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btn = document.querySelector('.count')
const textError = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {
	if (peopleInput.value == '' || priceInput.value == '' || tip.value == 0) {
		textError.textContent = 'Uzupełnij wszystkie pola'
		costInfo.style.display = 'none'
	} else {
		countTip()
		textError.textContent = ''
	}
}

const countTip = () => {
	const newPrice = parseFloat(priceInput.value)
	const newPeople = parseInt(peopleInput.value)
	const newTip = parseFloat(tip.value)
	const sum = (newPeople + newPrice * newTip) / newPeople
	costInfo.style.display = 'block'
	cost.textContent = sum.toFixed(2)
}

btn.addEventListener('click', showBill)
