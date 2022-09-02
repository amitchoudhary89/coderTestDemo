import React, { useEffect, useState } from "react";
import { getAllUsers } from "../actions/api";
import { Link, useNavigate } from "react-router-dom";

export default function Users() {
  const navigate = useNavigate();
  const profile = JSON.parse(localStorage.getItem("loggedInUser"));
  const [users, setUsers] = useState([]);
  useEffect(() => {
    switch (profile.role) {
      case "admin":
        let users = getAllUsers();
        setUsers(users);
        break;
      case "client":
        let cusers = getAllUsers(profile.objectId);
        setUsers(cusers);
        break;
      default:
        return;
    }
  }, []);

  function logout() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <React.Fragment>
      <p className="logout" onClick={logout}>
        Logout
      </p>
      {users && profile.role !== "user" && (
        <table border="1">
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              return (
                <tr key={u.objectId}>
                  <td>{u.fName}</td>
                  <td>{u.lName}</td>
                  <td>
                    <Link to={`/details/${u.objectId}`}>View Details</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
}
