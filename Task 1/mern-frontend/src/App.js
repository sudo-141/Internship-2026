import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const fetchProducts = () => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, description })
    })
      .then(res => res.json())
      .then(() => {
        setName("");
        setPrice("");
        setDescription("");
        setShowForm(false);
        fetchProducts();
      });
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE"
    }).then(() => fetchProducts());
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #bbb",
    outline: "none",
    marginBottom: "14px",
    boxSizing: "border-box"
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f6fa" }}>

      {/* SIDEBAR */}
      <div
        style={{
          width: isSidebarOpen ? "220px" : "70px",
          backgroundColor: "#1e1e2f",
          color: "white",
          padding: "20px 10px",
          transition: "width 0.3s ease",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            textAlign: "right",
            fontSize: "22px",
            cursor: "pointer",
            marginBottom: "20px"
          }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "❌" : "☰"}
        </div>

        {isSidebarOpen && (
          <>
            <h2>My Store</h2>
            <p style={{ opacity: 0.8 }}>MERN Demo</p>
          </>
        )}

        <ul style={{ listStyle: "none", padding: 0, marginTop: "30px" }}>
          <li
            style={{ marginBottom: "20px", cursor: "pointer" }}
            onClick={() => setShowForm(false)}
          >
            📦 {isSidebarOpen && "Products"}
          </li>

          <li
            style={{ marginBottom: "20px", cursor: "pointer" }}
            onClick={() => setShowForm(true)}
          >
            ➕ {isSidebarOpen && "Add Product"}
          </li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "30px" }}>

        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Products for Sale
        </h1>

        {/* ADD PRODUCT FORM */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            style={{
              maxWidth: "420px",
              margin: "0 auto 30px",
              padding: "25px",
              borderRadius: "12px",
              backgroundColor: "#fff",
              boxShadow: "0 6px 18px rgba(0,0,0,0.1)"
            }}
          >
            <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
              Add Product
            </h3>

            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              style={inputStyle}
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={e => setPrice(e.target.value)}
              required
              style={inputStyle}
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              style={{
                ...inputStyle,
                height: "90px",
                resize: "none"
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "15px",
                cursor: "pointer"
              }}
            >
              Add Product
            </button>
          </form>
        )}

        {/* PRODUCT LIST */}
        {!showForm && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            {products.map(product => (
              <ProductCard
                key={product._id}
                id={product._id}                 
                name={product.name}
                price={product.price}
                description={product.description}
                onDelete={deleteProduct}         
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
