
const baseURL = "https://gateway.marvel.com/v1/public";
const apikey = "b6849df79c330ccc82de737b5bf46124";


const getComics = async (page, orderBy) => {

    const offset = (page - 1) * 20;

    const response = await fetch(`${baseURL}/comics?apikey=${apikey}&offset=${offset}&orderBy=${orderBy}`)
    const data = await response.json();
    return data;

}