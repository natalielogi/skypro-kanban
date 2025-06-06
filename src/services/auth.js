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
    const { user } = response.data;

    localStorage.setItem("userName", user.name);
    localStorage.setItem("userEmail", user.login);
    localStorage.setItem("token", user.token);

    console.log("Вход выполнен:", response.data);
    console.log(user.token);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка входа");
  }
}

export async function signUp({ login, name, password }) {
  try {
    const response = await axios.post(API_URL, {
      login,
      name,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem("userName", user.name);
    localStorage.setItem("userEmail", user.login);
    localStorage.setItem("token", token);
    console.log("Ответ от регистрации:", response.data);

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "Ошибка регистрации");
  }
}
