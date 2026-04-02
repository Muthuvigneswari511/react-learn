import { useEffect, useState } from "react";

function GetMethod() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://69c7680963393440b316b4e7.mockapi.io/products/api/v1/product-users/${id}`)
      .then(response => response.json())   // convert to JSON
      .then(result => setData(result))     // store in state
      .catch(error => console.log(error)); // error handle
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>
  );
}

export default GetMethod;