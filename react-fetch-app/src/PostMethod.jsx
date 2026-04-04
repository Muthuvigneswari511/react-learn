import { useState } from "react";
import axios from "axios";

function PostMethod() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://69c7680963393440b316b4e7.mockapi.io/products/api/v1/product-users", {
        name: name,
      })
      .then((res) => {
        console.log("Data Added:", res.data);
      });
  };

  return (
    <div>
      <h2>POST Method</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default PostMethod;