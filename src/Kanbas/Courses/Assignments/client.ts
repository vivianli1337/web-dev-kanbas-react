import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const fetchAllAssignments = async () => {
  const { data } = await axiosWithCredentials.get(ASSIGNMENTS_API);
  return data;
};
export const deleteAssignment = async (id: string) => {
    const { data } = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${id}`);
    return data;
  };
  export const updateAssignment= async (assignment: any) => {
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
  };
  