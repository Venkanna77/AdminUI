import "./styles.css";
import { useEffect, useState } from "react";
import Pagination from "./componenets/Pagination";
import Users from "./componenets/Users";
import axios from "axios";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      setUserData(res.data);
    };
    fetchUsers();
  }, []);

  const lastIndex = currentPage * 10;
  const firstIndex = lastIndex - 10;
  const currentUsers = userData.slice(firstIndex, lastIndex);
  const paginate = (number) => setCurrentPage(number);

  return (
    <main className="container">
      <nav className="d-flex space-between align-items-center">
        <h1 className="mr-auto">Admin UI</h1>
        <input className="h-25" type="text" />
      </nav>
      <Users users={currentUsers} />
      <Pagination totalUsers={userData.length} paginate={paginate} />
    </main>
  );
}
