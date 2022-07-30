
const API = 'https://rickandmortyapi.com/api';

const fetchData = async(urlAPI) =>{
    const response = await fetch(urlAPI);
    const json = await response.json();
    return json;
}

const getData = async(urlAPI) =>{
    try {
        const data = await fetchData(`${urlAPI}/character/`);
        return data
    } catch (error) {
        return console.error(error);
    }
}

(async ()=>{
    try{
        const items = null || document.getElementById('content');
        const data = await getData(API);
        const characters = await data.results.map(item =>{
            return `
            <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${item.image}" alt="${item.name}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
              <p class="text-2xl font-extrabold tracking-tight text-gray-900">${item.name}</p>
                <span aria-hidden="true" class="absolute inset-0"></span>
                <span class="text-2xl font-extrabold tracking-tight text-gray-400">${item.species}</span>
              </h3>
            </div>
          </div>
            `
        }).slice(0,16).join('');
        items.innerHTML = characters;

    }catch (error){
        console.error(error);
    }
})()