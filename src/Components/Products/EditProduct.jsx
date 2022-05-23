import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProductsContext } from "./Context/ProductsContext";
import FileUploader from "./FileUploader";
import Product from "./Product/Product";

const EditProduct = ({ productId }) => {
  const { changeProduct, products } = useContext(ProductsContext);

  const [UpdateProduct, setUpdateProduct] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const musicTags = ["funky", "Badass", "Coporate", "happy", "Rock"];

  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const findedProductArr = products.filter((x) => x.id === 1);
    setUpdateProduct(findedProductArr);
  }, []);
  console.log(UpdateProduct);
  const handleTagsOnChange = (item) => {
    const exist = UpdateProduct.tags.find((x) => x === item);
    console.log(exist);
    if (!exist) {
      setUpdateProduct((prev) => {
        let x = { ...prev, tags: [...prev.tags, item] };
        console.log(x);
        return x;
      });
    } else {
      let index = UpdateProduct.tags.indexOf(exist);
      console.log(index);
      const filterTag = UpdateProduct.tags.filter((x) => x === !x[index]);
      setUpdateProduct((prev) => {
        let x = { ...prev, tags: filterTag };
        console.log(x);
        console.log(filterTag);
        return x;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    changeProduct(UpdateProduct);
    console.log("product Updated");
    setIsPending(true);

    history.push("/products");
  };
  return (
    <div className="container create">
      <h2> Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <label> Product title:</label>
        <textarea
          type="text"
          required
          maxLength="15"
          value={UpdateProduct.productName}
          onChange={(e) =>
            setUpdateProduct({ ...UpdateProduct, productName: e.target.value })
          }
        />
        <label> Product Description:</label>
        <textarea
          required
          maxLength="20"
          value={UpdateProduct.description}
          onChange={(e) =>
            setUpdateProduct({ ...UpdateProduct, description: e.target.value })
          }
        >
          {" "}
        </textarea>
        <label> Select Tags:</label>
        <div className="tags-list">
          {musicTags.map((item, index) => {
            return (
              <li key={index}>
                <div className="tags-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      value={item}
                      onChange={() => handleTagsOnChange(item)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{item}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </div>
        <div className="lable-price">
          <label> Product Price:</label>
          <textarea
            className="textarea-price"
            required
            maxLength="4"
            value={UpdateProduct.price}
            onChange={(e) =>
              setUpdateProduct({ ...UpdateProduct, price: e.target.value })
            }
          />
          <label>$</label>
        </div>

        <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />

        {!isPending && (
          <button className="btn btn-primary"> Update Product</button>
        )}
        {isPending && <button disabled>Adding Product.. </button>}
      </form>
      <div className="grid__product">
        <Product product={UpdateProduct} isAdmin={false} />
      </div>
    </div>
  );
};
export default EditProduct;
