import http from "../config/http";

const getAllUsers = async (data) => {
  return http.get(`/user`, data);
};

const addEducationService = (education) => {
  return http.post(`/education`, education);
};
const removeEducationService = (education) => http.delete(`/education`,
  {
    data: { "_id": education._id }
  }
)
export { getAllUsers, addEducationService, removeEducationService };
