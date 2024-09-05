import { Component } from "react";
import styles from "../cycle.module.css";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      products: [],
      counter: 0,
      params: {
        limit: 9,
        skip: 0,
      },
    };
    this.prevSkip = 0; // Track the previous skip value
  }

  // Fetch products when component is first mounted
  async componentDidMount() {
    await this.fetchProducts(this.state.params);
  }

  // Fetch products when skip value changes
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.params.skip !== prevState.params.skip) {
      await this.fetchProducts(this.state.params);
    }
  }

  // Fetch product data from the API
  async fetchProducts(params) {
    const { limit = 9, skip = 0 } = params;
    try {
      this.setState({ loading: true });
      const result = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await result.json(); // Use .json() to parse response
      this.setState({ products: data.products });
    } catch (error) {
      console.log("error > ", error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Products</h1>
        </div>
        <div>
          {this.state.loading ? (
            "loading..."
          ) : (
            <div className={styles.productsContainer}>
              {this.state.products?.map((item, idx) => (
                <div key={idx} className={styles.productsItem}>
                  {console.log("Image URL:", item.images?.[0])} {/* Log URL */}
                  <img
                    className={styles.productsItemCover}
                    src={item.images?.[0]}
                    alt={`product-cover-${idx}`}
                  />
                  <div className={styles.productsItemTitle}>
                    {" "}
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.paginationContainer}>
          <button
            className={styles.btn}
            type="button"
            onClick={() =>
              this.setState((state) => ({
                ...state,
                params: {
                  ...state.params,
                  skip: Math.max(state.params.skip - 9, 0),
                },
              }))
            }
            disabled={this.state.params.skip === 0} // Disable if no previous page
          >
            Prev
          </button>
          <button
            className={styles.btn}
            type="button"
            onClick={() =>
              this.setState((state) => ({
                ...state,
                params: {
                  ...state.params,
                  skip: state.params.skip + 9,
                },
              }))
            }
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Products;
