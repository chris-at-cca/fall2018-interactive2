
window.addEventListener('keydown',keyListener)
window.addEventListener('mousewheel',cancelScroller)
window.addEventListener('resize',cancelScroller)

var cards = document.querySelectorAll('.card')

const SPACE_CODE = 32
const UP_CODE = 38
const DOWN_CODE = 40

var scrollTarget = 0

const scrollRamp = 0.35
var animator = 0

function keyListener(e){
	switch(e.keyCode){
		case SPACE_CODE:
			return pageUpdate(e,1)
		break;
		case DOWN_CODE:
			return pageUpdate(e,1)
		break;
		case UP_CODE:
			return pageUpdate(e,-1)
		break;
	}
	cancelScroller()
}

function pageUpdate(e,change){
	let index = Math.floor(window.scrollY / window.innerHeight)
	scrollTarget = (index + change) * window.innerHeight
	if(scrollTarget != document.body.clientHeight){
		if((change > 0 && cards[index + change].classList.contains('build')) ||
			(change < 0 && cards[index].classList.contains('build'))){
			// jump if a build
			window.scrollTo(0,scrollTarget)
		} else {
			// otherwise smooth scroll
			window.requestAnimationFrame(scroller)
		}
	}
	let priorVideo = cards[index].querySelector('video')
	if(priorVideo) priorVideo.pause()
	if(cards[index + change]){
		let video = cards[index + change].querySelector('video')
		let notes = cards[index + change].getAttribute('notes')
		let wasCurrent = document.querySelector('.current')
		if(wasCurrent) wasCurrent.classList.remove('current')
		cards[index + change].classList.add('current')
		console.clear()
		if(notes){
			notes = notes.replace(/			/g,'')
			console.log(notes)
		}
		if(video) video.play()
	}
	e.stopPropagation()
	e.preventDefault()
	return false;
}

function scroller(){
	if(Math.abs((window.scrollY - scrollTarget)*scrollRamp) < 1){
		window.scrollTo(0,scrollTarget)
	} else {
		window.scrollTo(0,window.scrollY - (window.scrollY - scrollTarget)*scrollRamp)
		animator = window.requestAnimationFrame(scroller)
	}
}
function cancelScroller(){
	window.cancelAnimationFrame(animator)
}