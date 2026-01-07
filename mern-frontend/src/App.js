import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";


import laptopImg from "./assets/laptop.jpg";
import mobileImg from "./assets/mobile.jpg";
import headphonesImg from "./assets/headphones.jpg";
import graphicsCardImg from "./assets/graphicscard.jpg";
import keyboardImg from "./assets/keyboard.jpg";

function App() {
  const [products, setProducts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false); 
  const [isCollapsed, setIsCollapsed] = useState(false); 


  const fetchProducts = () => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit/Adding new product
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(() => {
        fetchProducts();
        setFormData({ name: "", price: "", description: "", image: "" });
        setMessage("✅ Product added successfully!");
        setTimeout(() => setMessage(""), 2000);
      })
      .catch(err => console.error("Error adding product:", err));
  };

  // Deleting a product
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch(`http://localhost:5000/api/products/${id}`, { method: "DELETE" })
        .then(res => res.json())
        .then(() => {
          fetchProducts(); // Refresh product list
          setMessage("✅ Product deleted successfully!");
          setTimeout(() => setMessage(""), 2000);
        })
        .catch(err => console.error("Error deleting product:", err));
    }
  };

  
  const productsWithImages = products.map((product) => {
    if (product.image) return product; 

    const name = product.name.toLowerCase();

    if (name.includes("laptop")) return { ...product, image: laptopImg };
    if (name.includes("graphics")) return { ...product, image: graphicsCardImg };
    if (name.includes("keyboard")) return { ...product, image: keyboardImg };
    if (name.includes("headphone")) return { ...product, image: headphonesImg };
    if (name.includes("mobile") || name.includes("phone")) return { ...product, image: mobileImg };

    return product; 
  });

  return (
    <div className="app-container">
      <h1 style={{ textAlign: "center" }}>Products Dashboard</h1>

      <div className="app-layout">
        {/* Sidebar */}
        <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
          <button
            className="collapse-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? "➡" : "⬅"}
          </button>

          {!isCollapsed && (
            <>
              <h2>Actions</h2>
              <button onClick={() => setShowForm(!showForm)}>
                {showForm ? "Close Form" : "Add Product"}
              </button>
            </>
          )}
        </div>

        {/* Main content */}
        <div className="main-content">
          {message && <p className="success-message">{message}</p>}

          {showForm && (
            <form onSubmit={handleSubmit} className="product-form">
              <input
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
              />
              <input
                name="image"
                placeholder="Image URL (optional)"
                value={formData.image}
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              />
              <button type="submit">Add Product</button>
            </form>
          )}

          {/* Product Cards */}
          <div className="cards-container">
            {productsWithImages.map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
                onDelete={() => handleDelete(product._id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
