window.setupMastheadStars = (starcount) => {
  const starset = document.querySelector('.masthead');
  const stars = new DocumentFragment;

  for(let i = 0; i < starcount; i++)
    stars.append(createStar())

  starset.append(stars);
}

function createStar() {
  const zDistance = Math.floor(Math.random() * 3) * -1;
  const scale = 1 + Math.abs(zDistance);
	const star = document.createElement('i');
	
  star.setAttribute('class', 'masthead__star');

	const getAxialBias = () => !!(Math.floor(
		Math.random() * 10
	) % 2);

	const positionWithoutAxialBias = () =>
		Math.random() * 10000 / 100;
	
	const getPosition = () =>
		getAxialBias()
			? positionWithAxialBias()
			: positionWithoutAxialBias();

	const top = Math.random() * 10000 / 100;
	const left = Math.random() * 10000 / 100;

	star.style.top = `${top}%`;
	star.style.left = `${left}%`;

  star.style.animationDelay = `${Math.floor(Math.random() * 6000)}ms`;
  star.style.transform = `translateZ(${zDistance}px)`;
  
	return star;
}

function positionWithAxialBias() {
	const lowerProtectedBound = 0.33;
	const upperProtectedBound = 0.66;
	let position = Math.random() / 2;
	position = (position < lowerProtectedBound
		? position
		: position + upperProtectedBound) * 10000 / 100;
	if (position > 100) return positionWithAxialBias();
	return position; 
}