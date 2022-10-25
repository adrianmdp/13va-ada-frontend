const params = new URLSearchParams(window.location.search);

console.log(params.get('comicId'));


const loadComic = async () => {

    const response = await fetch('') // Buscar por id - devuelve un solo comic

}

const init = () => {
    loadComic();
}

init();