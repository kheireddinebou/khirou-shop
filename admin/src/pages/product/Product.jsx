import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { adminRequest } from "../../requestMethods";
import { v4 as uuid } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [updateValue, setUpdateValue] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async e => {
    e.preventDefault();

    if (Object.keys(updateValue).length > 0) {
      setLoading(true);
      try {
        const res = await adminRequest.put(`product/${productId}`, updateValue);
        res && e.target.reset();
        setProduct(res.data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setUpdateValue({ ...updateValue, [name]: value });
  };
  const getProduct = async () => {
    try {
      const res = await adminRequest.get(`product/find/${productId}`);
      setProduct(res.data);
    } catch {}
  };

  useEffect(() => {
    getProduct();
  }, []);

  // Upload file to firebase
  useEffect(() => {
    if (file) {
      setLoading(true);
      const storageRef = ref(storage, uuid());
      uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(downloadURL => {
          setUpdateValue({ ...updateValue, img: downloadURL });
        });

        setLoading(false);
      });
    }
  }, [file]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={product.img}
              alt={product.title}
              className="productInfoImg"
            />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">
                {product.inStock ? "yes" : "no"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form onSubmit={handleUpdate} className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              name="title"
              onChange={handleChange}
              type="text"
              placeholder={product.title}
            />
            <label>Product Price</label>
            <input
              name="price"
              onChange={handleChange}
              type="number"
              min="1"
              placeholder={product.price}
            />
            <label>Product Description</label>
            <textarea
              style={{ width: "300px" }}
              type="text"
              rows="6"
              col="80"
              placeholder={product.desc}
              name="desc"
              onChange={handleChange}
            />
            <label>In Stock</label>
            <select name="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt=""
                  className="productUploadImg"
                />
              ) : (
                <img
                  src={product.img}
                  alt={product.title}
                  className="productUploadImg"
                />
              )}
              <label htmlFor="file">
                <Publish style={{ cursor: "pointer" }} />
              </label>
              <input
                onChange={e => setFile(e.target.files[0])}
                type="file"
                id="file"
                style={{ display: "none" }}
                accept="image/*"
              />
            </div>
            {loading && <span className="loading">Loading ...</span>}
            <button disabled={loading} type="submit" className="productButton">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
