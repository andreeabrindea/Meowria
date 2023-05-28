import { useState, useEffect } from 'react';
import TopBar from '../topbar/TopBar';
import './account.css';
import user from './user.png';
import jwt from 'jwt-decode';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Account() {
  const [records, setRecords] = useState([]);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = Cookies.get('sessionToken');
    if (sessionToken) {
      const decodedToken = jwt(sessionToken);
      const userId = decodedToken.user_id;

      fetch(`https://meowriabackend.fly.dev/api/records/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          setRecords(data);
          return axios.get(`https://meowriabackend.fly.dev/api/users/${userId}`);
        })
        .then((response) => {setUsername(response.data[0].username);
        console.log(response.data[0].username);})
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, [username]);

  const handleLogout = () => {
    Cookies.remove('sessionToken');
    navigate('/login');
  };

  return (
    <div className="account">
      <div className="topBar">
        <TopBar />
      </div>
      <div className="account-wrapper">
        <div className="symptoms-table">
          <h1>Recent symptoms:</h1>
          {records && records.length > 0 ? (
            <table id="symptoms-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Symptoms</th>
                  <th>Possible Diagnostic</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id}>
                    <td>{record.date}</td>
                    <td>{record.symptoms}</td>
                    <td>{record.disease}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No records found.</p>
          )}
        </div>
        <div className="user-details">
          <img className="userImg" src={user} alt="user" id="user-image" />
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p id="username">{username}</p>
              <button id="logout-button" onClick={handleLogout}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
