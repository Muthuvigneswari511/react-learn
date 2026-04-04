import { useState } from "react";
import axios from "axios";

function PutMethod() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleUpdate = () => {
    axios
      .put(
        `https://69c7680963393440b316b4e7.mockapi.io/products/api/v1/product-users/${id}`,
        { name: name }
      )
      .then((res) => {
        console.log("Updated:", res.data);
      });
  };

  return (
    <div>
      <h2>PUT Method</h2>

      <input
        type="text"
        placeholder="Enter ID"
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter New Name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default PutMethod;