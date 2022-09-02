import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getUserDetails } from "../actions/api";

export default function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const userId = params.userId;
  const [details, setDetails] = useState([]);
  const profile = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    setDetails(getUserDetails(userId)[0]);
  }, []);

  function logout() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <React.Fragment>
      {profile.role !== "user" && <Link to="/users"> Back </Link>}
      <p className="logout" onClick={logout}>
        Logout
      </p>
      {details && (
        <table>
          <tr>
            <td>First Name:</td>
            <td>{details.fName}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{details.lName}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{details.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{details.phone}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{details.address}</td>
          </tr>
        </table>
      )}
    </React.Fragment>
  );
}
