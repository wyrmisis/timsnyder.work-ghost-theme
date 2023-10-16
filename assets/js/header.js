document.querySelector('[data-tip-jar]')
	?.addEventListener('pointerdown', spawnTipModal)

document.querySelector('[data-work-together]')
	?.addEventListener(
		'pointerdown',
		(e) => {
			e.preventDefault();
			e.stopPropagation();
			Tally.openPopup('w471qk', {
				layout: 'modal',
				width: 700,
				autoClose: 5000,
			});			
		}
	);

document.querySelector('[data-contact-me]')
	?.addEventListener(
		'pointerdown',
		(e) => {
			e.preventDefault();
			e.stopPropagation();
			Tally.openPopup('woR0Qe', {
				layout: 'modal',
				width: 700,
				autoClose: 5000,
			});			
		}
	);

function spawnTipModal(e) {
	e.preventDefault();
	e.stopPropagation();

	// The containing dialog for the rest of this function
	const modal = document.createElement('dialog');
	modal.setAttribute('class', 'tipjar-dialog');

	// The Ko-fi Iframe
	const tipjarFrame = document.createElement('iframe');
	tipjarFrame.setAttribute('src', 'https://ko-fi.com/wyrmisis/?hidefeed=true&widget=true&embed=true&preview=true')
	tipjarFrame.setAttribute('id', 'kofiframe');

	// The close button
	const close = document.createElement('button');
	close.setAttribute('class', 'close-button');
	close.setAttribute('type', 'button');
	close.setAttribute('title', 'Close the tip jar dialog');

	// The box-icon for the close button
	const closeX = document.createElement('box-icon');
	closeX.setAttribute('name', 'x');

	// Bind events to the created elements
	modal.addEventListener('pointerdown', (e) => {
		if (event.target !== modal) return;
		modal.close();
		modal.remove();
	})
	closeX.addEventListener('pointerdown', () => {
		modal.close();
		modal.remove();
	});
	
	close.append(closeX);
	modal.append(tipjarFrame);
	modal.append(close);
	document.querySelector('body').append(modal);
	
	modal.showModal();
}
