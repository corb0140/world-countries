// MAIN PAGE JS

const APP = {
  cardContainer: document.querySelector("main"),
  dataContainer: document.querySelector("ul"),
  countries: document.querySelector(".countries"),
  api: "https://raw.githubusercontent.com/shah0150/data/main/countries_data.json",

  init: function () {
    APP.fetchData();

    APP.dataContainer.innerHTML = "";
    console.log("CONNECTED");
  },

  fetchData: function () {
    const apiURL = APP.api;

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network has found an error: ${error.message}`);
        }

        return response.json();
      })
      .then((sort) => {
        APP.buildHtml(sort);

        APP.countries.addEventListener("change", () => {
          // SORT BY POPULATION
          if (APP.countries.selectedIndex === 1) {
            sort.sort((a, b) => {
              return b.population - a.population;
            });
          }

          // SORT BY LANGUAGE
          if (APP.countries.selectedIndex === 2) {
            sort.sort((a, b) => {
              return b.languages.length - a.languages.length;
            });
          }

          // SORT BY REGION
          if (APP.countries.selectedIndex === 3) {
            sort.sort((a, b) => {
              if (a.region > b.region) {
                return -1;
              } else {
                return +1;
              }
            });
          }

          APP.buildHtml(sort);
        });
      })
      .catch((err) => {
        APP.errorHandler(err);
      });
  },

  buildHtml: function (data) {
    console.log(data);

    document.querySelector(".total").innerHTML = `Total Number: ${data.length}`;
    let countryList = new DocumentFragment();

    data.forEach((country) => {
      let li = document.createElement("li");
      li.innerHTML = `
      <a class="country__link" >
        <h2>${country.name}</h2> 
        <i class="fa-solid fa-arrow-right"></i>
      </a>
   `;

      countryList.appendChild(li);
    });

    APP.dataContainer.innerHTML = "";
    APP.dataContainer.appendChild(countryList);
  },

  buildCountryCard: function (data) {
    console.log(data);
    let card = document.createElement("div");

    card.innerHTML = `
    <div class='country__image'> <img src="" alt="" /> </div>
    <h2 class="country__name"></h2>
    <div class="country__info">
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </div>
    `;

    APP.cardContainer.appendChild(card);
  },

  errorHandler: function (error) {
    console.log(error);
  },
};

document.addEventListener("DOMContentLoaded", APP.init);

// COUNTRY PAGE JS
