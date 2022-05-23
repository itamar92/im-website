import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductsContext } from "./Context/ProductsContext";
import FileUploader from "./FileUploader";
import Product from "./Product/Product";

const CreateProduct = () => {
  const { addProduct } = useContext(ProductsContext);
  const [newProduct, setNewProduct] = useState({
    productName: "",
    description: "",
    tags: [],
    composer: "Itamar Miron",
    price: "",
    quantity: 0,
    src: "/Music/Sonokinetic Competition - Itamar Miron.mp3",
    image: "/Image/Logo_IM icon Black.png",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const musicTags = ["funky", "Badass", "Coporate", "happy", "Rock"];

  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleTagsOnChange = (item) => {
    const exist = newProduct.tags.find((x) => x === item);
    console.log(exist);
    if (!exist) {
      setNewProduct((prev) => {
        let x = { ...prev, tags: [...prev.tags, item] };
        console.log(x);
        return x;
      });
    } else {
      let index = newProduct.tags.indexOf(exist);
      console.log(index);
      const filterTag = newProduct.tags.filter((x) => x === !x[index]);
      setNewProduct((prev) => {
        let x = { ...prev, tags: filterTag };
        console.log(x);
        console.log(filterTag);
        return x;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct(newProduct);
    console.log("product added");
    setIsPending(true);

    history.push("/products");
  };
  return (
    <div className="container create">
      <h2> Add a new Product</h2>
      <form onSubmit={handleSubmit}>
        <label> Product title:</label>
        <textarea
          type="text"
          required
          maxLength="15"
          value={newProduct.productName}
          onChange={(e) =>
            setNewProduct({ ...newProduct, productName: e.target.value })
          }
        />
        <label> Product Description:</label>
        <textarea
          required
          maxLength="20"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
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
                      //   defaultChecked={true}
                      //  checked={checkedState[index]}
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
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <label>$</label>
        </div>

        <FileUploader
          onFileSelectSuccess={(file) => setSelectedFile(file)}
          onFileSelectError={({ error }) => alert(error)}
        />

        {!isPending && (
          <button className="btn btn-primary"> Add Product</button>
        )}
        {isPending && <button disabled>Adding Product.. </button>}
      </form>
      <div className="grid__product">
        <Product product={newProduct} isAdmin={false} />
      </div>
    </div>
  );
};
export default CreateProduct;
