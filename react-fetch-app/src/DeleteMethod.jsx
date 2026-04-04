import { useState } from "react";
import axios from "axios";

function DeleteMethod() {
  const [id, setId] = useState("");

  const handleDelete = () => {
    axios
      .delete(
        `https://69c7680963393440b316b4e7.mockapi.io/products/api/v1/product-users/${id}`
      )
      .then(() => {
        console.log("Deleted Successfully");
      });
  };

  return (
    <div>
      <h2>DELETE Method</h2>

      <input
        type="text"
        placeholder="Enter ID"
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteMethod;