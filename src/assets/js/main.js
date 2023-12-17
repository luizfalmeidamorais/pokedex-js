const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
    <li class="flex flex-col m-2 p-4 rounded-2xl ${pokemon.type}">
        <span class="text-black opacity-[.3] text-right text-[.625rem]">#${
          pokemon.number
        }</span>
        <span class="capitalize text-white mb-1">${pokemon.name}</span>

        <div class="flex flex-row items-center justify-between">
            <ol class="p-0 m-0 list-none">
                  ${pokemon.types
                    .map(
                      (type) =>
                        `<li class="text-white py-1 px-2 my-1 mx-0 text-[.625rem] rounded-2xl brightness-110 text-center ${type}">${type}</li>`
                    )
                    .join("")}
            </ol>

            <img src="${pokemon.photo}" alt="${
    pokemon.name
  }" class="max-w-[100%] h-[70px]" />
        </div>
    </li>
    `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});
