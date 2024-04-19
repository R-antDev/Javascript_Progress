const catsAPI = "https://api.thecatapi.com/v1/breeds";

const catsData = async () => {
  try {
    const response = await fetch(catsAPI);
    const data = await response.json();
    return data.map((cat) => cat.name);
  } catch (error) {
    console.log(error);
  }
};

catsData().then((names) => {
  let catNames = names;
  console.log(catNames);
});
