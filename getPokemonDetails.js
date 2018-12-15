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
        let pokemon = sessionStorage.getItem('pokemon');
        const pokeDetails = yield $.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        $('#name')[0].innerHTML = `${pokeDetails.name}`;
        $('#image').attr('src', `${pokeDetails.sprites.front_default}`);
        $('#weight')[0].innerHTML = `${pokeDetails.weight}`;
        let html = $('#abilities')[0].innerHTML;
        html += '<tr><td><h3 class="text-center"><strong id="name">Description:</strong></h3></td>';
        let counter = 0;
        for (const ability of pokeDetails.abilities) {
            if (counter === 0) {
                html += `<td><h3 id="abilities"><strong>${ability.ability.name}</strong></h3></td></tr>`;
            }
            else {
                html += `<tr><td></td><td><h3 id="abilities"><strong>${ability.ability.name}</strong></h3></td></tr>`;
            }
            counter++;
        }
        $('#abilities')[0].innerHTML = html;
    });
})();
