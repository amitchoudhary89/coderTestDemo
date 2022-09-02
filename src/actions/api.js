import user from "../../server/user.json";
export function getAllUsers(clientId = null) {
  if (!clientId) {
    return user;
  } else {
    return user.filter((u) => u.clientId === clientId);
  }
}

export function loginUser(username, pass) {
  return user.filter((u) => u.Username === username && u.password === pass);
}

export function getUserDetails(userId) {
  return user.filter((u) => u.objectId === userId);
}

export function addUser(payload) {}
