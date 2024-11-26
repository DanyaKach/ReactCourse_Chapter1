import axios from "axios";

export const fetchUsers = async () => {
  const response = await axios.get("https://reqres.in/api/users");
  return response.data.data; 
};

export const deleteUserById = (users, id) => {
  return users.filter((user) => user.id !== id);
};
