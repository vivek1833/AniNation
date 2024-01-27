const API = "https://api-aniwatch.onrender.com/anime";

// Get home page
const homePage = async () => {
  try {
    const res = await fetch(`${API}/home`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get Genre wise anime
const genre = async (props) => {
  try {
    const res = await fetch(`${API}/genre/${props.name}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get movies
const movie = async (props) => {
  try {
    const res = await fetch(`${API}/movie?page=${props.page}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get anime info
const getAnime = async (props) => {
  try {
    const res = await fetch(
      `https://api-aniwatch.onrender.com/anime/info?id=${props.title}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get Total Anime Episodes
const getEpisode = async (props) => {
  try {
    const res = await fetch(
      `https://api-aniwatch.onrender.com/anime/episodes/${props.title}`
    );
    const data = await res.json();
    return data.episodes;
  } catch (err) {
    console.error(err.message);
  }
};

// Search Anime
const getSearch = async (props) => {
  try {
    const res = await fetch(
      `https://api-aniwatch.onrender.com/anime/search?q=${props.anime}`
    );

    const data = await res.json();
    return data.animes;
  } catch (error) {
    console.error(error);
  }
};

// Get a particular episode
const getLink = async (props) => {
  try {
    const res = await fetch(
      `https://api-aniwatch.onrender.com/anime/episode-srcs?id=${props.id}&server=vidstreaming&category=sub`
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err.message);
  }
};

export { homePage, genre, movie, getAnime, getEpisode, getSearch, getLink };
