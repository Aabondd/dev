"use strict";

import { heros } from "../data/people.js";

const results = document.querySelector("#results");
const sort = document.querySelector("#sort");
const filmsLabel = document.querySelector("label");
let filteredDataAtoZ;
let betta;

let rowData = "";
let sortData = "";
let children = document.getElementById("results").children;

/********************* Live Search Updates ************************************ */
const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

const searchMovieHero = async (searchText) => {
  //Optional get data from API
  // const res = await fetch('https://swapi.dev/api/people')
  // const heros = await res.json()

  let matches = heros.filter((hero) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return hero.name.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }
  console.log(matches);

  outputHtml(matches);
};

const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `<div class="card card-body mb-1">
        <h4 class="text-primary">${match.name}</h4>
        <small>Skin color: ${match.skin_color} / Eye color: ${match.eye_color}</small>
        </div>`
      )
      .join("");
    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchMovieHero(search.value));

/********************************************************* */

async function asyncFetch(value) {
  const res = await fetch(`https://swapi.dev/api/${value}/`);
  const data = await res.json();

  displayResults(data, value);

  //   console.log(children[0]);

  function outputCardInfo() {
    if (value === "films") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          console.log("Hellooooooo");
          console.log(data.results[i].opening_crawl);
          children[i].innerHTML = `
            <div class="card p-3 m-3 films" style="opacity:.8">
                <h4 class="card-title text-center">${data.results[i].title}</h4>
                <div class="card-content">
                    <span style="text-decoration:underLine">Producer:</span>: ${data.results[i].producer}<br>
                    <span style="text-decoration:underLine">Director:</span>: ${data.results[i].director}<br>
                    <span style="text-decoration:underLine">Release Date:</span>: ${data.results[i].release_date}<br>
                    <span style="text-decoration:underLine">Episode :</span>: ${data.results[i].episode_id}<br>
                    <span style="text-decoration:underLine">Director:</span>: ${data.results[i].director}<br>
                    <span style="text-decoration:underLine">Release Date:</span>: ${data.results[i].release_date}<br>
                    <p class="text-center">${data.results[i].opening_crawl}</p>
                </div>
                </div>
            `;
        });
      }
    } else if (value === "people") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          console.log("Hellooooooo");
          console.log(data.results[i].opening_crawl);
          children[i].innerHTML = `
            <div class="card p-3 m-3 people" style="opacity:.8">
                <h4 class="card-title text-center">${data.results[i].name}</h4>
                <div class="card-content">
                <span style="text-decoration:underLine">Birth Year:</span>: ${data.results[i].birth_year}<br>
                <span style="text-decoration:underLine">Gender:</span>: ${data.results[i].gender}<br>
                <span style="text-decoration:underLine">Height:</span>: ${data.results[i].height}<br>
                <span style="text-decoration:underLine">Skin Color:</span>: ${data.results[i].skin_color}<br>
                <span style="text-decoration:underLine">Hair Color:</span>: ${data.results[i].hair_color}<br>
                <span style="text-decoration:underLine">Mass:</span>: ${data.results[i].mass}<br>
                </div>
                </div>
            `;
        });
      }
    } else if (value === "vehicles") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          console.log("Hellooooooo");
          console.log(data.results[i].opening_crawl);
          children[i].innerHTML = `
            <div class="card p-3 m-3 vehicles" style="opacity:.8">
                <h4 class="card-title text-center">${data.results[i].name}</h4>
                <div class="card-content">
                <span style="text-decoration:underLine">Model :</span>: ${data.results[i].model}<br>
                    <span style="text-decoration:underLine">Vehicle Class:</span>: ${data.results[i].vehicle_class}<br>
                    <span style="text-decoration:underLine">Crew :</span>: ${data.results[i].crew}<br>
                    <span style="text-decoration:underLine">Max Speed :</span>: ${data.results[i].max_atmosphering_speed}<br>
                    <span style="text-decoration:underLine">Manufacturer :</span>: ${data.results[i].manufacturer}<br>
                    <span style="text-decoration:underLine">Const :</span>: ${data.results[i].release_date}<br>
                    <span style="text-decoration:underLine">Cargo Capacity :</span>: ${data.results[i].cargo_capacity}<br>
                </div>
                </div>
            `;
        });
      }
    } else if (value === "planets") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          console.log("Hellooooooo");
          console.log(data.results[i].opening_crawl);
          children[i].innerHTML = `
            <div class="card p-3 m-3 planets" style="opacity:.8">
                <h4 class="card-title text-center">${data.results[i].name}</h4>
                <div class="card-content">
                <span style="text-decoration:underLine">Diameter :</span>: ${data.results[i].diameter}<br>
                    <span style="text-decoration:underLine">Climate :</span>: ${data.results[i].climate}<br>
                    <span style="text-decoration:underLine">Terrain :</span>: ${data.results[i].terrain}<br>
                    <span style="text-decoration:underLine">Population :</span>: ${data.results[i].population}<br>
                    <span style="text-decoration:underLine">Gravity :</span>: ${data.results[i].gravity}<br>
                    <span style="text-decoration:underLine">Orbital Period :</span>: ${data.results[i].orbital_period}<br>
                    <span style="text-decoration:underLine">Surface Water :</span>: ${data.results[i].surface_water}<br>
                </div>
                </div>
            `;
        });
      }
    } else if (value === "species") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          console.log("Hellooooooo");
          console.log(data.results[i].opening_crawl);
          children[i].innerHTML = `
            <div class="card p-3 m-3 species" style="opacity:.8">
                <h4 class="card-title text-center">${data.results[i].name}</h4>
                <div class="card-content">
                    <span style="text-decoration:underLine">Classification :</span>: ${data.results[i].classification}<br>
                    <span style="text-decoration:underLine">Language :</span>: ${data.results[i].language}<br>
                    <span style="text-decoration:underLine">Skin Colors :</span>: ${data.results[i].skin_colors}<br>
                    <span style="text-decoration:underLine">Hair Colors :</span>: ${data.results[i].hair_colors}<br>
                    <span style="text-decoration:underLine">Eye Colors :</span>: ${data.results[i].eye_colors}<br>
                    <span style="text-decoration:underLine">Average Height :</span>: ${data.results[i].average_height}<br>
                    <span style="text-decoration:underLine">Average Lifespan :</span>: ${data.results[i].average_lifespan}<br>
                </div>
                </div>
            `;
        });
      }
    } else if (value === "starships") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          console.log("Hellooooooo");
          console.log(data.results[i].opening_crawl);
          children[i].innerHTML = `
            <div class="card p-3 m-3 starships" style="opacity:.8">
                <h4 class="card-title text-center">${data.results[i].name}</h4>
                <div class="card-content">
                    <span style="text-decoration:underLine">Model :</span>: ${data.results[i].model}<br>
                    <span style="text-decoration:underLine">Class :</span>: ${data.results[i].starship_class}<br>
                    <span style="text-decoration:underLine">Max Speed :</span>: ${data.results[i].max_atmosphering_speed}<br>
                    <span style="text-decoration:underLine">Passengers :</span>: ${data.results[i].passengers}<br>
                    <span style="text-decoration:underLine">Manufacturer :</span>: ${data.results[i].manufacturer}<br>
                    <span style="text-decoration:underLine">Crew :</span>: ${data.results[i].crew}<br>
                    <span style="text-decoration:underLine">Cost :</span>: ${data.results[i].cost_in_credits}<br>
                </div>
                </div>
            `;
        });
      }
    }
  }

  outputCardInfo();
}

function displayResults(data, value) {
  let output = "";
  if (value === "films") {
    data.results.forEach((item) => {
      output += `
            <div class="card p-3 m-3 films" style="opacity:.8">
            <h4 class="card-title text-center">${item.title}</h4>
            <a href="#" class="text-center"><img src="https://img.icons8.com/fluent/35/000000/more.png"/> Read more <img src="https://img.icons8.com/nolan/24/more-than.png"/></a>
           </div>`;
    });
  } else {
    data.results.forEach((item) => {
      output += `
      <div class="card p-3 m-3 films" style="opacity:.8">
      <h4 class="card-title text-center">${item.name}</h4>
      <a href="#" class="text-center"><img src="https://img.icons8.com/fluent/35/000000/more.png"/> Read more <img src="https://img.icons8.com/nolan/24/more-than.png"/></a>
     </div>`;
    });
  }

  results.innerHTML = output;

  sort.innerHTML = `<div class="mx-auto"><button type="button" class="btn btn-sm btn-outline-light" id="sort-btn">
Sort A-Z
</button>
</div>`;
  document.querySelector("#sort-btn").addEventListener("click", handleSort);

  /*** */

  /**** */

  const newDataByName = data.results.sort(compareValues("name"));
  filteredDataAtoZ = newDataByName;
  const newDataByTitle = data.results.sort(compareValues("title"));
  rowData = newDataByTitle;
}
document.querySelector("#tabs").addEventListener("click", (e) => {
  asyncFetch(e.target.textContent.trim().toLowerCase());
  betta = e.target.textContent.trim().toLowerCase();
  console.log(betta);
});

function handleSort(e) {
  console.log("/-----------------------------------/");
  console.log(rowData);
  console.log(betta);

  //   filmsLabel.classList.contains("active");
  let active = filmsLabel.classList.contains("active");
  let data;
  /** */
  if (active === true) {
    displayR(rowData, "films");
    console.log("Active true");
    data = rowData;
  } else {
    displayR(filteredDataAtoZ, "planets");
    console.log("Active False");
    data = filteredDataAtoZ;
  }
  /*** */

  console.log(children);

  let activeEl = document
    .querySelector(".active")
    .textContent.trim()
    .toLowerCase();
  console.log("active element ", activeEl);

  let value = activeEl;
  function outputCardInfo() {
    if (value === "films") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          children[i].innerHTML = `
            <div class="card p-3 m-3 films" style="opacity:.8">
                <h4 class="card-title text-center">${data[i].title}</h4>
                <div class="card-content">
                    <span style="text-decoration:underLine">Producer:</span>: ${data[i].producer}<br>
                    <span style="text-decoration:underLine">Director:</span>: ${data[i].director}<br>
                    <span style="text-decoration:underLine">Release Date:</span>: ${data[i].release_date}<br>
                    <span style="text-decoration:underLine">Episode :</span>: ${data[i].episode_id}<br>
                    <span style="text-decoration:underLine">Director:</span>: ${data[i].director}<br>
                    <span style="text-decoration:underLine">Release Date:</span>: ${data[i].release_date}<br>
                    <p class="text-center">${data[i].opening_crawl}</p>
                </div>
                </div>
            `;
        });
      }
    } else if (value === "people") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          children[i].innerHTML = `
            <div class="card p-3 m-3 people" style="opacity:.8">
                <h4 class="card-title text-center">${data[i].name}</h4>
                <div class="card-content">
                <span style="text-decoration:underLine">Birth Year:</span>: ${data[i].birth_year}<br>
                <span style="text-decoration:underLine">Gender:</span>: ${data[i].gender}<br>
                <span style="text-decoration:underLine">Height:</span>: ${data[i].height}<br>
                <span style="text-decoration:underLine">Skin Color:</span>: ${data[i].skin_color}<br>
                <span style="text-decoration:underLine">Hair Color:</span>: ${data[i].hair_color}<br>
                <span style="text-decoration:underLine">Mass:</span>: ${data[i].mass}<br>
                </div>
                </div>
            `;
        });
      }
    } else if (value === "vehicles") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          children[i].innerHTML = `
            <div class="card p-3 m-3 vehicles" style="opacity:.8">
                <h4 class="card-title text-center">${data[i].name}</h4>
                <div class="card-content">
                <span style="text-decoration:underLine">Model :</span>: ${data[i].model}<br>
                    <span style="text-decoration:underLine">Vehicle Class:</span>: ${data[i].vehicle_class}<br>
                    <span style="text-decoration:underLine">Crew :</span>: ${data[i].crew}<br>
                    <span style="text-decoration:underLine">Max Speed :</span>: ${data[i].max_atmosphering_speed}<br>
                    <span style="text-decoration:underLine">Manufacturer :</span>: ${data[i].manufacturer}<br>
                    <span style="text-decoration:underLine">Const :</span>: ${data[i].release_date}<br>
                    <span style="text-decoration:underLine">Cargo Capacity :</span>: ${data[i].cargo_capacity}<br>
                </div>
                </div>
            `;
        });
      }
    } else if (value === "planets") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          children[i].innerHTML = `
            <div class="card p-3 m-3 planets" style="opacity:.8">
                <h4 class="card-title text-center">${data[i].name}</h4>
                <div class="card-content">
                <span style="text-decoration:underLine">Diameter :</span>: ${data[i].diameter}<br>
                    <span style="text-decoration:underLine">Climate :</span>: ${data[i].climate}<br>
                    <span style="text-decoration:underLine">Terrain :</span>: ${data[i].terrain}<br>
                    <span style="text-decoration:underLine">Population :</span>: ${data[i].population}<br>
                    <span style="text-decoration:underLine">Gravity :</span>: ${data[i].gravity}<br>
                    <span style="text-decoration:underLine">Orbital Period :</span>: ${data[i].orbital_period}<br>
                    <span style="text-decoration:underLine">Surface Water :</span>: ${data[i].surface_water}<br>
                </div>
                </div>
            `;
        });
      }
    } else if (value === "species") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          children[i].innerHTML = `
            <div class="card p-3 m-3 species" style="opacity:.8">
                <h4 class="card-title text-center">${data[i].name}</h4>
                <div class="card-content">
                    <span style="text-decoration:underLine">Classification :</span>: ${data[i].classification}<br>
                    <span style="text-decoration:underLine">Language :</span>: ${data[i].language}<br>
                    <span style="text-decoration:underLine">Skin Colors :</span>: ${data[i].skin_colors}<br>
                    <span style="text-decoration:underLine">Hair Colors :</span>: ${data[i].hair_colors}<br>
                    <span style="text-decoration:underLine">Eye Colors :</span>: ${data[i].eye_colors}<br>
                    <span style="text-decoration:underLine">Average Height :</span>: ${data[i].average_height}<br>
                    <span style="text-decoration:underLine">Average Lifespan :</span>: ${data[i].average_lifespan}<br>
                </div>
                </div>
            `;
        });
      }
    } else if (value === "starships") {
      for (let i = 0; i < children.length; i++) {
        children[i].addEventListener("click", (e) => {
          children[i].innerHTML = `
            <div class="card p-3 m-3 starships" style="opacity:.8">
                <h4 class="card-title text-center">${data[i].name}</h4>
                <div class="card-content">
                    <span style="text-decoration:underLine">Model :</span>: ${data[i].model}<br>
                    <span style="text-decoration:underLine">Class :</span>: ${data[i].starship_class}<br>
                    <span style="text-decoration:underLine">Max Speed :</span>: ${data[i].max_atmosphering_speed}<br>
                    <span style="text-decoration:underLine">Passengers :</span>: ${data[i].passengers}<br>
                    <span style="text-decoration:underLine">Manufacturer :</span>: ${data[i].manufacturer}<br>
                    <span style="text-decoration:underLine">Crew :</span>: ${data[i].crew}<br>
                    <span style="text-decoration:underLine">Cost :</span>: ${data[i].cost_in_credits}<br>
                </div>
                </div>
            `;
        });
      }
    }
  }

  outputCardInfo();
  //*
}
//******
function displayR(data, value) {
  let output = "";
  if (value === "films") {
    data.forEach((item) => {
      output += `
              <div class="card p-3 m-3 films" style="opacity:.8">
              <h4 class="card-title text-center">${item.title}</h4>
              <a href="#" class="text-center"><img src="https://img.icons8.com/fluent/35/000000/more.png"/> Read more <img src="https://img.icons8.com/nolan/24/more-than.png"/></a>
             </div>`;
    });
  } else {
    data.forEach((item) => {
      output += `
        <div class="card p-3 m-3 films" style="opacity:.8">
        <h4 class="card-title text-center">${item.name}</h4>
        <a href="#" class="text-center"><img src="https://img.icons8.com/fluent/35/000000/more.png"/> Read more <img src="https://img.icons8.com/nolan/24/more-than.png"/></a>
       </div>`;
    });
  }

  results.innerHTML = output;
}

//----- Sort func ----

function compareValues(key, order = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

//-------------------------
