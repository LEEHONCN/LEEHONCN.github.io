console.log('加载了sw')
self.addEventListener('fetch', function(event) {
	console.log('fetch')
	event.respondWith(async function() {
		 try{
			 var res = await fetch(event.request);
			 var cache = await caches.open('cache');
			 cache.put(event.request.url, res.clone());
			 return res;
		 }
		 catch(error){
			 return caches.match(event.request);
			}
		}());
});
