function ProductCard({ name, price, description, image, onDelete }) {
  return (
    <div className="card">
      {onDelete && (
        <button className="card-delete-btn" onClick={onDelete}>
          ✖
        </button>
      )}

      {/* Show image if valid, else placeholder */}
      {image ? (
        <img
          src={image}
          alt={name}
          style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "160px",
            background: "#ccc",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#555",
            fontWeight: "bold",
          }}
        >
          No Image
        </div>
      )}

      <h3>{name}</h3>
      <p>{description}</p>
      <h4>₹ {price}</h4>
    </div>
  );
}

export default ProductCard;
