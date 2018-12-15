(async function () {
    let pokemon = sessionStorage.getItem('pokemon');
        const pokeDetails = await $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        $('#name')[0].innerHTML = `${pokeDetails.name}`;
        $('#image').attr('src', `${pokeDetails.sprites.front_default}`);
        $('#weight')[0].innerHTML = `${pokeDetails.weight}`;

        let html = $('#abilities')[0].innerHTML;
        html+='<tr><td><h3 class="text-center"><strong id="name">Description:</strong></h3></td>';
        let counter = 0;
        for (const ability of pokeDetails.abilities) {
            if (counter === 0) {
                html += `<td><h3 id="abilities"><strong>${ability.ability.name}</strong></h3></td></tr>`;

            } else {
                html += `<tr><td></td><td><h3 id="abilities"><strong>${ability.ability.name}</strong></h3></td></tr>`;
            }
            counter++;
        }
        $('#abilities')[0].innerHTML = html;
})();