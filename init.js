if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
			navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
					console.log('我注册成功了666');
			}, function (err) {
					console.log('我注册失败了');
			});
	});
}
