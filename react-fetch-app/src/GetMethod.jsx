import { useEffect, useState } from "react";
import axios from "axios";

function GetMethod() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://69c7680963393440b316b4e7.mockapi.io/products/api/v1/product-users")
      .then((response) => {
        setData(response.data); // axios la data inside 'data'
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>

      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default GetMethod;