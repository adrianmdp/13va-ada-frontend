const select = document.getElementById("select-order");
const selectCh = document.getElementById("select-type");

const params = new URLSearchParams(window.location.search);

// http://localhost/comics/index.html?order=-title

select
  .querySelector(`option[value="${params.get("order")}"]`)
  .setAttribute("selected", "selected");

selectCh
  .querySelector(`option[value="${params.get("type")}"]`)
  .setAttribute("selected", "selected");

// select
//   .querySelector(`option[value="-title"]`)
//   .setAttribute("selected", "selected");
