// MAIN PAGE JS
const back = document.querySelector(".back");

back.addEventListener("click", () => {
  window.location.reload();
  console.log("clicked");
});

const APP = {
  cardContainer: document.querySelector(".card"),
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
    // let countryList = new DocumentFragment();

    APP.dataContainer.innerHTML = "";

    data.forEach((country) => {
      let li = document.createElement("li");
      li.innerHTML = `
      <a class="country__link" >
        <h2>${country.name}</h2> 
        <i class="fa-solid fa-arrow-right"></i>
      </a>
   `;

      APP.dataContainer.appendChild(li);

      // -------- COUNTRY LINK -------------

      let countryLink = document.querySelectorAll(".country__link");

      countryLink.forEach((link) => {
        link.addEventListener("click", (ev) => {
          ev.stopImmediatePropagation();
          console.log(
            ev.currentTarget.firstElementChild.textContent +
              " Has been selected"
          );

          APP.dataContainer.innerHTML = "";
          APP.buildCountryCard(country);
        });
      });
    });
  },

  buildCountryCard: function (data) {
    console.log(data);

    APP.cardContainer.innerHTML = "";

    APP.cardContainer.innerHTML = `
    <div class='country__image'> <img src="${data.flag}" alt="picture of a flag of ${data.name}" /> </div>
    <h2 class="country__name">${data.name}</h2>
    <div class="country__info">
      <p>capital: ${data.capital}</p>
      <p>population: ${data.population}</p>
      <p>language: ${data.languages}</p>
      <p>region: ${data.region}</p>
      <p>area: ${data.area}</p>
    </div>
    `;

    // APP.cardContainer.appendChild(card);
  },

  errorHandler: function (error) {
    console.log(error);
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
