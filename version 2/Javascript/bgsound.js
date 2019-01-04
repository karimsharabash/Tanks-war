var soundSwitch = document.getElementById('sound'),
		bgMusic = document.getElementById('bg-music');

		soundSwitch.addEventListener('click', function() {
			if (soundSwitch.checked) {
				bgMusic.pause();
			} else {
				bgMusic.play();
			}
		});
