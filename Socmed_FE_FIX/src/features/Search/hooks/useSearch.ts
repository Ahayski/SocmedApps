import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/types/rootState";
import { GET_USERS } from "../../../store/rootReducer";
import { API } from "../../../libs/api";
import { useEffect, useState } from "react";

export function useSearch() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.user);
  console.log(users);

  const [filteredUsers, setFilteredUsers] = useState(users);
  useEffect(() => {
    // Gunakan useEffect untuk memuat data pengguna saat komponen dimuat
    async function fetchData() {
      try {
        const response = await API.get("/users");
        dispatch(GET_USERS(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {}, []);

  const searchUsers = (searchQuery: string) => {
    const filtered = users.filter((user) =>
      user.full_name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return { filteredUsers, searchUsers, users };
}
