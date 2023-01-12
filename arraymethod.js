// Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).

// Create Obj which is capable of making an API call
const request = new XMLHttpRequest();

// Open the connection to API with Http method and URL
request.open("Get", "https://restcountries.com/v3.1/all", true);

// Send the request to the server
request.send(null);

// Parse the Text Passed from the server
request.onload = function () {
  const response = JSON.parse(request.responseText);
  console.log(response);

  // a. Get all the countries from the Asia continent /region using the Filter function
  const asia = response.filter((country) => country.region == "Asia");
  console.log(asia);

  // b. Get all the countries with a population of less than 2 lakhs using Filter function
  const population = response.filter((country) => country.population < 200000);
  console.log(population);

  // c. Print the following details name, capital, flag using forEach function
  const result = response.forEach((country) => {
    console.log(`Country Name: ${country.name.common}`);
    if (country.capital !== undefined) {
      console.log(`Country Cpital: ${country.capital[0]}`);
    }
    console.log(`Country Flag: ${country.flag}`);
  });
  console.log(result);

  // d. Print the total population of countries using reduce function
  const populations = response.map((country) => country.population);
  //console.log(populations);
  const populationUsingreduce = populations.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(`Total population of countries: ${populationUsingreduce}.`);

  // e. Print the country which uses US Dollars as currency.
  const usd = response.filter((country) => {
    for (let key in country.currencies) {
      if (country.currencies[key].name === "United States dollar") {
        return country;
      }
    }
  });

  console.log(usd);
};
