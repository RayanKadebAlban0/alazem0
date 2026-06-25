import { usersMock } from "../mocks/users";

const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getUsers = async () => {
  await delay(1000);

  return usersMock;
};