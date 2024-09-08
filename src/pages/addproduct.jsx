import { useState } from "react";
import styles from "../cycle.module.css";
import { Link } from "react-router-dom";

const AddProduct = () => {
  // State untuk menampung nilai dari masing-masing input form
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    brand: "",
    sku: "",
    weight: 0,
  });

  // Function untuk menangani perubahan pada input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product, // Salin state product saat ini
      [name]: value, // Update nilai yang diinput oleh user
    });
  };

  // Event handler saat form di-submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah form dari reload halaman
    console.log("brand : ", product.brand);
    console.log("description : ", product.description); // Menampilkan data di console.log
    console.log("price : ", product.price); // Menampilkan data di console.log
    console.log("sku : ", product.sku); // Menampilkan data di console.log
    console.log("title : ", product.title); // Menampilkan data di console.log
    console.log("weight : ", product.weight); // Menampilkan data di console.log
  };

  return (
    <div className={styles.formContainer}>
      <div>
        <Link to="/product" className={styles.btn}>
          Back to Product
        </Link>
      </div>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Input untuk Title */}
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title:
          </label>
          <input
            className={styles.input}
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input untuk Description */}
        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description:
          </label>
          <textarea
            className={styles.textarea}
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Input untuk Price */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="price">
            Price:
          </label>
          <input
            className={styles.input}
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input untuk Brand */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="brand">
            Brand:
          </label>
          <input
            className={styles.input}
            type="text"
            id="brand"
            name="brand"
            value={product.brand}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input untuk SKU */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="sku">
            SKU:
          </label>
          <input
            className={styles.input}
            type="text"
            id="sku"
            name="sku"
            value={product.sku}
            onChange={handleChange}
            required
          />
        </div>

        {/* Input untuk Weight */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="weight">
            Weight (in kg):
          </label>
          <input
            className={styles.input}
            type="number"
            id="weight"
            name="weight"
            value={product.weight}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className={styles.btn}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
