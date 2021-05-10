import { sleep } from "./util";

export const login = async (state, email, password) => {
  await sleep(2000);

  const usuario = state?.users.find(
    (user) => user.email === email && user.password === password
  );

  if (!usuario) {
    // throw new Error("Usuário inválido");
    throw console.error("Usuário inválido");
  }
  return usuario;
};

export const getAuthenticatedUser = async (state, email) => {
  // await sleep(2000);

  const usuario = state?.users.find((user) => user.email === email);

  return usuario;
};

export const resetPassword = async (email, password) => {
  await sleep(2000);
};

export const authenticate = async (name, username, email, password) => {
  await sleep(2000);

  return {
    name,
    username,
    email,
    password,
  };
};
