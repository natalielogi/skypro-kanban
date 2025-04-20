import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
  try {
    const response = await axios.post(
      `${API_URL}/login`,
      {
        login,
        password,
      },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка входа");
  }
}

export async function signUp({ login, name, password }) {
  try {
    const response = await axios.post(
      "https://wedev-api.sky.pro/api/user",
      {
        login,
        name,
        password,
      },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка регистрации");
  }
}
