setInterval(setClock, 1000)

const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
	const currentDate = new Date()
	const secondsRatio = currentDate.getSeconds() / 60
	setRotation(secondHand, secondsRatio)
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()