const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b937ba1d39mshe476a729662233dp18f541jsndf371f29e380',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20', options)
	.then(response => response.json())
	.then( data => {
		const list = data.d;

		list.map((item)=>{
			console.log(item)
			const name = item.l;
			const poster = item.i.imageUrl;
			const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
			document.querySelector('.movies').innerHTML += movie;
		})
	})
	.catch(err => console.error(err));
