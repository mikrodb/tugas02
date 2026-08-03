const baseUrl = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_TOKEN;

export const searchMovies = async (keyword, page = 1) => {
  try {
    const url = `${baseUrl}/search/movie?query=${keyword}&page=${page}`;
    const options = {
      method: "GET",
      headers: { accept: "application/json", Authorization: `Bearer ${token}` },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error searching movies:", error);
    return null;
  }
};

export const discoverSearchMovie = async (keyword, page = 1) => {
  try {
    const url = `${baseUrl}/discover/movie`;
    const options = {
      method: "GET",
      headers: { accept: "application/json", Authorization: `Bearer ${token}` },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error searching movies:", error);
    return null;
  }
};
