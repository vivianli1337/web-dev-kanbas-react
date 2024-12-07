import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const unenrollUserFromCourse = async (enrollmentId: string) => {
 const response = await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
 return response.data;
};

export const findCoursesForUser = async (userId: string) => {
  const response = await axiosWithCredentials
    .get(`${ENROLLMENTS_API}/${userId}`);
  return response.data;
};

export const createEnrollment = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${ENROLLMENTS_API}/${userId}/${courseId}`);
  return response.data;
};

// export const findUsersForCourse = async (courseId: string) => {
//   const response = await axiosWithCredentials.get(`${ENROLLMENTS_API}/course/${courseId}`);
//   return response.data;
//  };
 