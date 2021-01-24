import http from "../config/http";

const getAllUsers = async (data) => {
  return http.get(`/user`, data);
};

const getFriendship = (friend) => {
  return http.get(`/friends`, friend);
}

const addFriendsService = (friend) => http.post(`/friends`,
  {
    data: { "_id": friend._id }
  }
)
const removeFriendsService = (friend) => http.delete(`/friends`,
  {
    data: { "_id": friend._id }
  }
)


const addEducationService = (education) => {
  return http.post(`/education`, education);
};
const removeEducationService = (education) => http.delete(`/education`,
  {
    data: { "_id": education._id }
  }
)
export { getAllUsers, addEducationService, removeEducationService, getFriendship, addFriendsService, removeFriendsService };
