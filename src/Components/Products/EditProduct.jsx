import { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ProductsContext } from "../../Context/ProductsContext";
import AlertDialog from "../AlertDialog";
import Product from "./Product/Product";

const EditProduct = () => {
  let { id } = useParams();
  const { changeProduct, products, fetchPostProduct } =
    useContext(ProductsContext);

  const [updateProduct, setUpdateProduct] = useState();

  const musicTags = [
    "funky",
    "Badass",
    "Coporate",
    "happy",
    "Rock",
    "soul",
    "Trailer",
  ];

  const [isPending, setIsPending] = useState(false);
  const [isDialogOpen, seIsDialog] = useState(false);
  const history = useHistory();

  const DialogClose = () => {
    seIsDialog(false);
    history.push("/products");
  };

  const handleDialogOperation = () => {
    fetchPostProduct(updateProduct);
    history.push("/products");
  };

  const dialogText = "Do you want to update the Server? ";

  useEffect(() => {
    let filteredProduct = products.filter((item) => {
      return item.id === parseInt(id);
    });

    if (filteredProduct !== undefined && filteredProduct.length !== 0) {
      setUpdateProduct({
        id: filteredProduct[0].id,
        productName: filteredProduct[0].productName,
        description: filteredProduct[0].description,
        tags: filteredProduct[0].tags,
        composer: filteredProduct[0].composer,
        price: filteredProduct[0].price,
        quantity: filteredProduct[0].quantity,
        src: filteredProduct[0].src,
        image: filteredProduct[0].image,
      });
    }
  }, [id, products]);

  const handleTagsOnChange = (item) => {
    const exist = updateProduct.tags.find((x) => x === item);
    if (!exist) {
      setUpdateProduct((prev) => {
        let x = { ...prev, tags: [...prev.tags, item] };
        return x;
      });
    } else {
      let index = updateProduct.tags.indexOf(exist);
      const filterTag = updateProduct.tags.filter((x) => x === !x[index]);
      setUpdateProduct((prev) => {
        let x = { ...prev, tags: filterTag };
        return x;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    seIsDialog(true);
    changeProduct(updateProduct);
    setIsPending(true);
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
          value={updateProduct?.productName}
          onChange={(e) =>
            setUpdateProduct({ ...updateProduct, productName: e.target.value })
          }
        />
        <label> Product Description:</label>
        <textarea
          required
          maxLength="20"
          value={updateProduct?.description}
          onChange={(e) =>
            setUpdateProduct({ ...updateProduct, description: e.target.value })
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
            value={updateProduct?.price}
            onChange={(e) =>
              setUpdateProduct({ ...updateProduct, price: e.target.value })
            }
          />
          <label>$</label>
        </div>

        {!isPending && (
          <button className="btn btn-primary"> Update Product</button>
        )}
        {isPending && <button disabled>Adding Product.. </button>}
      </form>
      <AlertDialog
        open={isDialogOpen}
        setClose={DialogClose}
        text={dialogText}
        handleOperation={handleDialogOperation}
      />
      
      {updateProduct && (
        <div className="grid__product">
          <Product product={updateProduct} isAdmin={false} />
        </div>
      )}
    </div>
  );
};
export default EditProduct;
