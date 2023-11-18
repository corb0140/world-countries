(() => {
  getWorldCountries();
})();

function getWorldCountries() {
  fetch(
    "https://raw.githubusercontent.com/shah0150/data/main/countries_data.json"
  )
    .then((response) => {
      console.log(response);

      if (!response) {
        throw new Error("Error Occurred");
      } else {
        return response.json();
      }
    })
    .then((sort) => {
      const countries = document.querySelector(".countries");

      countries.addEventListener("change", () => {
        // SORT BY POPULATION
        if (countries.selectedIndex === 1) {
          let countryList = new DocumentFragment();

          sort.sort((a, b) => {
            return b.population - a.population;
          });

          document.querySelector(".container ul").innerHTML = "";

          sort.forEach((country, index) => {
            let item = document.createElement("li");
            item.innerHTML = `
            <div>
              <img src="${country.flag}"></> 
            </div>
            
            <div>
             <h2>${country.name}</h2>

              <p class="sorting-text"> ${country.population} </p>
              <p class="sorting-text"> ${country.languages} </p>
              <p class="sorting-text"> ${country.region} </p>
            </div>
            `;
            countryList.appendChild(item);
          });

          document.querySelector(".container ul").appendChild(countryList);
        }

        // SORT BY LANGUAGE
        if (countries.selectedIndex === 2) {
          let countryList = new DocumentFragment();

          sort.sort((a, b) => {
            console.log(a.languages.length);

            if (a.languages.length > b.languages.length) {
              return -1;
            } else if (b.languages.length > a.languages.length) {
              return +1;
            }
          });

          document.querySelector(".container ul").innerHTML = "";

          sort.forEach((country, index) => {
            let item = document.createElement("li");
            item.innerHTML = `
            <div>
              <img src="${country.flag}"></> 
            </div>
            
            <div>
             <h2>${country.name}</h2>

              <p class="sorting-text"> ${country.population} </p>
              <p class="sorting-text"> ${country.languages} </p>
              <p class="sorting-text"> ${country.region} </p>
            </div>
            `;
            countryList.appendChild(item);
          });

          document.querySelector(".container ul").appendChild(countryList);
        }

        // SORT BY REGION
        if (countries.selectedIndex === 3) {
          let countryList = new DocumentFragment();

          sort.sort((a, b) => {
            if (a.region > b.region) {
              return +1;
            } else if (b.region > a.region) {
              return -1;
            }
          });

          document.querySelector(".container ul").innerHTML = "";

          sort.forEach((country, index) => {
            let item = document.createElement("li");
            item.innerHTML = `
            <div>
              <img src="${country.flag}"></> 
            </div>
            
            <div>
             <h2>${country.name}</h2>

              <p class="sorting-text"> ${country.population} </p>
              <p class="sorting-text"> ${country.languages} </p>
              <p class="sorting-text"> ${country.region} </p>
            </div>
            `;

            countryList.appendChild(item);
          });

          document.querySelector(".container ul").appendChild(countryList);
        }
      });

      return sort;
    })
    .then((data) => {
      let countryList = new DocumentFragment();
      let totalCountries;

      data.forEach((country, index) => {
        totalCountries = data.length;
        document.querySelector(
          ".total"
        ).innerHTML = `Total Number: ${totalCountries}`;

        let item = document.createElement("li");
        item.innerHTML = `
        <div>
        <img src="${country.flag}"></> 
        </div>
        
       
        <div>
        <h2>${country.name}</h2>

        <p class="sorting-text"> ${country.population} </p>
        <p class="sorting-text"> ${country.languages} </p>
        <p class="sorting-text"> ${country.region} </p>
        </div>
         
        `;

        countryList.appendChild(item);
      }); //end for each
      document.querySelector(".container ul").appendChild(countryList);
    });
}
