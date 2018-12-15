(async function() {
    const pokelist = await $.get('https://pokeapi.co/api/v2/pokemon/');
    const perRow = 6;
    let counter = 1;

    let html = '<tr>';
    
    for(const pokemon of pokelist.results) {
        if(counter%perRow===0){
            html += `<td><button onclick="setSession('${pokemon.name}')" class="btn btn-secondary btn-lg btn-block">${pokemon.name}</button></td></tr><tr>`;
        }else{
            html += `<td><button onclick="setSession('${pokemon.name}')" class="btn btn-secondary btn-lg btn-block">${pokemon.name}</button></td></td>`;
        }
        counter++;
    }

    html += '</tr>';

    $('#poketable')[0].innerHTML = html;
})();

function setSession(data:string){
    location.href= 'pokemonInfo.html';
    sessionStorage.setItem('pokemon',data);
}