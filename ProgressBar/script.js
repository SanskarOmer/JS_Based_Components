// Glass card download with progress bar and percentage
const downloadBtn = document.getElementById('downloadBtn');
const progressBar = document.getElementById('progressBar');
const progressPercent = document.getElementById('progressPercent');

downloadBtn.addEventListener('click', () => {
	downloadBtn.disabled = true;
	let progress = 0;
	progressBar.style.width = '0%';
	progressPercent.textContent = '0%';
	const interval = setInterval(() => {
		if (progress >= 100) {
			clearInterval(interval);
			downloadBtn.disabled = false;
			progressPercent.textContent = 'Done!';
			setTimeout(() => {
				progressPercent.textContent = '100%';
			}, 1200);
		} else {
			progress += Math.floor(Math.random() * 8) + 2;
			if (progress > 100) progress = 100;
			progressBar.style.width = progress + '%';
			progressPercent.textContent = progress + '%';
		}
	}, 180);
});
