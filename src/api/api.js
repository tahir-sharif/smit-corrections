// const url = "https://smitbs.herokuapp.com/api";
const url = "http://localhost:5000/api";

export const api = {
  // Authentication
  register: () => ({
    url: `${url}/users/register`,
    method: "post",
  }),
  getuser: () => ({
    url: `${url}/users/getCurrentUser`,
    method: "get",
  }),
  getAdminUser: () => ({
    url: `${url}/admin/getCurrentUser`,
    method: "get",
  }),
  updateAdminUser: () => ({
    url: `${url}/admin/updateUser`,
    method: "post",
  }),
  adminLogin: () => ({
    url: `${url}/admin/login`,
    method: "post",
  }),
  login: () => ({
    url: `${url}/users/login`,
    method: "post",
  }),
  logout: () => ({
    url: `${url}/users/logout`,
    method: "post",
  }),
  addCourses: () => ({
    url: `${url}/courses/addCourse`,
    method: "get",
  }),
  getCourses: () => ({
    url: `${url}/courses/getCourses`,
    method: "get",
  }),
  addCourses: () => ({
    url: `${url}/courses/addCourse`,
    method: "post",
  }),
  enrollInCourse: (courseId) => ({
    url: `${url}/courses/enroll/${courseId}`,
    method: "post",
  }),
};
export const apiUrl = url;
