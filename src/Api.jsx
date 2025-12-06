import React, { useState, useEffect } from 'react'; // Added useEffect here
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {data.map((a) => {
        const {id, username, email, address } = a; 
        const fullAddress = address
          ? `${address.street}, ${address.city}`
          : 'Address';

        return (
          <div className="detail" key={id}>
            <h2>{username}</h2>
            <p>{email}</p>
            <p>{fullAddress}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Api;
