const baseURL = "https://gateway.marvel.com/v1/public";
const apikey = "b6849df79c330ccc82de737b5bf46124";

const getComics = async (page, orderBy, query) => {
  const offset = (page - 1) * 20;

  let url = `${baseURL}/comics?apikey=${apikey}&limit=50`;

  if (offset) url += `&offset=${offset}`;

  if (orderBy) url += `&orderBy=${orderBy}`;

  if (query !== "") url += `&titleStartsWith=${query}`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};
