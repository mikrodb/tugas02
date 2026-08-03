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

export const getMovieDetail = async (id) => {
  try {
    const url = `${baseUrl}/movie/${id}`;
    const options = {
      method: "GET",
      headers: { accept: "application/json", Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    if (!data) {
      throw new Error(data.status_message);
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      status_message: error?.message || "Error while get details movie",
    };
  }
};

// mau menambahkan fitur untuk movie credit
export const getMovieCredits = async (id) => {
  try {
    const url = `${baseUrl}/movie/${id}/credits`;
    const options = {
      method: "GET",
      headers: { accept: "application/json", Authorization: `Bearer ${token}` },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    if (!data) {
      throw new Error(data.status_message);
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      status_message: error?.message || "Error while get movie credits",
    };
  }
};
