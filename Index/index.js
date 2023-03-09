const genreOfTheDay = document.getElementById("genreOfTheDay");

if (genreOfTheDay) {
  genreOfTheDay.textContent = await getGenre();
}

async function getGenre() {
  const object = await fetch("https://binaryjazz.us/wp-json/genrenator/v1/genre/");
  const genre = await object.text();
  return genre;
}