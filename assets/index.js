const API = 'https://spotify23.p.rapidapi.com/artist_singles/?id=35l9BRT7MXmM8bv2WDQiyB&offset=0&limit=8';
const content=null || document.getElementById("content");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8db2191d3bmshe0947ac9874b367p11acd3jsn6aed412852dd',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    response = await fetch(urlApi, options);
    data = await response.json();
    return data;
}

(async() => {
    try {
        const canciones = await fetchData(API, options);
        let view = `${canciones.data.artist.discography.singles.items.map(cancion=> `
        <div class="group relative">
        <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${cancion.releases.items[0].coverArt.sources[0].url}" alt="" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
        <h3 class="text-md text-gray-700 font-extrabold">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${cancion.releases.items[0].name}
        </h3>
        </div>
  </div>
        `).slice(0,8).join("")}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();