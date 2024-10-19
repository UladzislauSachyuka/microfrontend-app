import React, { useState, useEffect } from "react";
import "./UserList.css";  

interface User {
  name: string;
  age: number;
  city: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_USER_LIST_API_URL}/users.json`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="userList">
      <h2>User list</h2>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.name}>
            <span>{user.name}</span>, {user.age} - {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
