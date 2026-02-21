import { useState } from "react";

const PostRequestComp = () => {

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [availability, setAvailability] = useState(false);
  const [brand, setBrand] = useState("");

  const handler = async (e) => {
    e.preventDefault();  //This prevents the page reload.

    const product = {
      name,
      desc,
      brand,
      price,
      availability
    };

    console.log(product);

    try {
      const response = await fetch("http://localhost:8080/api/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
      });

      if (!response.ok) {
        throw new Error("Failed to add product");
      }

      alert("Product added successfully");

      
      setName("");
      setDesc("");
      setPrice(0);
      setBrand("");
      setAvailability(false);

    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Product failed to add");
    }
  };

  return (
    <div className="form-container">
      <form className="product-form" onSubmit={handler}>
        <h2>Add Product</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>

        <div className="form-group">
          <label>Brand</label>
          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Availability</label>
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value === "true")}
          >
            <option value="true">Available</option>
            <option value="false">Out of Stock</option>
          </select>
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default PostRequestComp;