const API = "https://api-aniwatch.onrender.com/anime";

const homePage = async () => {
  try {
    const res = await fetch(`${API}/home`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const genre = async (props) => {
  try {
    const res = await fetch(`${API}/genre/${props.name}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const movie = async (props) => {
  try {
    const res = await fetch(`${API}/movie?page=${props.page}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { homePage, genre, movie };
