var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const pokelist = yield $.get('https://pokeapi.co/api/v2/pokemon/');
        const perRow = 6;
        let counter = 1;
        let html = '<tr>';
        for (const pokemon of pokelist.results) {
            if (counter % perRow === 0) {
                html += `<td><button onclick="setSession('${pokemon.name}')" class="btn btn-secondary btn-lg btn-block">${pokemon.name}</button></td></tr><tr>`;
            }
            else {
                html += `<td><button onclick="setSession('${pokemon.name}')" class="btn btn-secondary btn-lg btn-block">${pokemon.name}</button></td></td>`;
            }
            counter++;
        }
        html += '</tr>';
        $('#poketable')[0].innerHTML = html;
    });
})();
function setSession(data) {
    location.href = 'pokemonInfo.html';
    sessionStorage.setItem('pokemon', data);
}
