
const loadComics = async () => {

    const params = new URLSearchParams(window.location.search);

    const comicsRsponse = await getComics(
        params.get('offset') ||  0, 
        params.get('order') || "title" 
    );

    const data = comicsRsponse.data
    const comics = data.results;

    const results = document.getElementById('comics-results');
    const backButton = document.getElementById('back-button');
    const container = document.createElement('div');
    const row = document.createElement('div');

    results.appendChild(container);
    container.appendChild(row);

    container.classList.add('container');
    row.classList.add('row');

    comics.forEach(comic => {
        // console.log(comic)

        const card = document.createElement('div');
        const cardImg = document.createElement('img');
        const cardBody = document.createElement('div');
        const col = document.createElement('div');
        const title = document.createElement('h2');

        // card.addEventListener('click', () => {
        //     loadDetail(comic);
        //     results.classList.add('d-none');
        //     backButton.classList.remove('d-none');
        // })

        card.addEventListener('click', () => {

            params.set('comicId', comic.id);

            window.location.href = window.location.pathname + '/../detail.html?' + params.toString(); 

        })

        backButton.addEventListener('click', () => {
            results.classList.remove('d-none');
            backButton.classList.add('d-none');
        })

        const titleText = document.createTextNode(comic.title);

        card.appendChild(cardImg);
        card.appendChild(cardBody);
        col.appendChild(card);
        cardBody.appendChild(title);
        title.appendChild(titleText);
        
        card.classList.add('card');
        cardImg.classList.add('card-img-top');
        cardBody.classList.add('card-body');
        col.classList.add('col-md-3');
        title.classList.add('h5');

        row.appendChild(col);

        cardImg.setAttribute('src', `${comic.thumbnail.path}.${comic.thumbnail.extension}`);
    });

}

const init = () => {
    loadComics();
}

init();




/**
 * 
 */
const formSearch = document.getElementById('search-comics');

formSearch.addEventListener('submit', e => {

    e.preventDefault();

    const orderBy = e.target["control-order-by"].value

    const params = new URLSearchParams(window.location.search);

    params.set('order', orderBy);
    params.set('offset', 20);

    window.location.href = window.location.pathname + '?' + params.toString();

})



const loadDetail = (comic) => {

    const comicDetail = document.getElementById('comic-detail');

    comicDetail.classList.remove("d-none");

    const title = document.createElement('h3');
    const text = document.createTextNode(comic.title);
    const div = document.createElement('div');

    title.appendChild(text);

    div.appendChild(document.createTextNode(comic.description));

    comicDetail.appendChild(title);
    comicDetail.appendChild(div);

}