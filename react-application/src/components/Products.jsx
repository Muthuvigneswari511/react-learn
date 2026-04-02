import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=8")
      .then((res) => {
        console.log(res.data);   
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          display: "grid",
          backgroundColor:"#eef3ef",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {products.length > 0 ? (
          products.map((p) => (
            <div key={p.id} style={{ border: "1px solid black", border:"none",
          backgroundColor:"#8bdfefa2",borderRadius:"20px",padding: "10px" }}>
                <h4>{p.title}</h4>
                <img src={p.thumbnail} width="100"/>
             <p>{p.price}</p>
              
              <p>₹ {p.rating}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>   
        )}
      </div>
    </div>
  );
};

export default Products;