const countriesAPI = "https://restcountries.com/v2/all";

const countriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const data = await response.json();
    data.forEach((country) => {
      console.log({
        name: country.name,
        capital: country.capital,
        language: country.languages[0].name,
        population: country.population,
        area: country.area,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

countriesData();
