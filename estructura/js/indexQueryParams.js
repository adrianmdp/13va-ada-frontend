const loadComics = async () => {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("p")) || 1;
  const order = params.get("order");
  const query = params.get("query");

  const comicsRsponse = await getComics(page, order, query);

  const data = comicsRsponse.data;
  const comics = data.results;

  const results = document.getElementById("comics-results");
  results.innerHTML = "";
  const backButton = document.getElementById("back-button");
  const container = document.createElement("div");
  const row = document.createElement("div");

  results.appendChild(container);
  container.appendChild(row);

  container.classList.add("container");
  row.classList.add("row");

  comics.forEach((comic) => {
    const card = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardBody = document.createElement("div");
    const col = document.createElement("div");
    const title = document.createElement("h2");

    card.addEventListener("click", () => {
      params.set("comicId", comic.id);

      window.location.href =
        window.location.pathname + "/../detail.html?" + params.toString();
    });

    backButton.addEventListener("click", () => {
      results.classList.remove("d-none");
      backButton.classList.add("d-none");
    });

    const titleText = document.createTextNode(comic.title);

    card.appendChild(cardImg);
    card.appendChild(cardBody);
    col.appendChild(card);
    cardBody.appendChild(title);
    title.appendChild(titleText);

    card.classList.add("card");
    cardImg.classList.add("card-img-top");
    cardBody.classList.add("card-body");
    col.classList.add("col-6");
    title.classList.add("h5");

    row.appendChild(col);

    cardImg.setAttribute(
      "src",
      `${comic.thumbnail.path}.${comic.thumbnail.extension}`
    );
  });

  renderPagination(Math.ceil(data.total / 20));
};

const formSearch = document.getElementById("search-comics");

formSearch.addEventListener("submit", (e) => {
  e.preventDefault();

  const orderBy = e.target["control-order-by"].value;
  const query = e.target["control-query"].value;
  const type = e.target["control-type"].value;

  const params = new URLSearchParams(window.location.search);

  params.set("order", orderBy);
  params.set("offset", 20);
  params.set("type", type);
  params.set("query", query);

  window.location.href = window.location.pathname + "?" + params.toString();
});

const loadDetail = (comic) => {
  const comicDetail = document.getElementById("comic-detail");

  comicDetail.classList.remove("d-none");

  const title = document.createElement("h3");
  const text = document.createTextNode(comic.title);
  const div = document.createElement("div");

  title.appendChild(text);

  div.appendChild(document.createTextNode(comic.description));

  comicDetail.appendChild(title);
  comicDetail.appendChild(div);
};

const renderPagination = (totalPages) => {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("p")) || 1;

  const buttons = [
    {
      text: "<<",
      class: "btn",
      onClick: function () {
        params.set("p", 1);
        window.location.href =
          window.location.pathname + "?" + params.toString();
      },
    },
    {
      text: page - 1,
      class: "btn",
      onClick: function () {
        params.set("p", page - 1);
        window.location.href =
          window.location.pathname + "?" + params.toString();
      },
    },
    {
      text: page,
      class: "btn",
    },
    {
      text: page + 1,
      class: "btn",
      onClick: function () {
        params.set("p", page + 1);
        window.location.href =
          window.location.pathname + "?" + params.toString();
      },
    },
    {
      text: ">>",
      class: "btn",
      onClick: function () {
        params.set("p", totalPages);
        window.location.href =
          window.location.pathname + "?" + params.toString();
      },
    },
  ];

  const pagination = document.createElement("div");
  pagination.setAttribute("id", "pagination");
  pagination.classList.add("pagination");

  buttons.forEach((button) => {
    const buttonNode = document.createElement("button");
    const textNode = document.createTextNode(button.text);
    buttonNode.appendChild(textNode);
    buttonNode.classList.add(button.class);

    buttonNode.addEventListener("click", button.onClick);

    pagination.appendChild(buttonNode);
  });
  document.body.appendChild(pagination);
};

const init = () => {
  loadComics();
};

init();
