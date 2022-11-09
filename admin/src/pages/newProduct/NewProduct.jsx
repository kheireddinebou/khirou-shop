import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase";
import { v4 as uuid } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./newProduct.css";
import { adminRequest } from "../../requestMethods";
import { NavigateBefore } from "@material-ui/icons";

export default function NewProduct() {
  const [newProduct, setNewProduct] = useState({ inStock: true });
  const [cat, setCat] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [colorInput, setColorInput] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleCreate = async e => {
    e.preventDefault();
    setNewProduct({ ...newProduct, color, size, categories: cat });
    setLoading(true);
    try {
      const res = await adminRequest.post("product", newProduct);
      res && navigate("/products");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      setColor([...color, colorInput]);
      setColorInput("");
    }
  };

  const handleCheckbox = e => {
    const { checked, value, id } = e.target;
    if (checked) {
      if (id === "size") {
        setSize([...size, value]);
      } else if (id === "cat") {
        setCat([...cat, value]);
      }
    } else if (!checked) {
      if (id === "size") {
        setSize(size.filter(s => s !== value));
      } else if (id === "cat") {
        setCat(cat.filter(s => s !== value));
      }
    }
  };

  // Upload file to firebase
  useEffect(() => {
    if (file) {
      setLoading(true);
      const storageRef = ref(storage, uuid());
      uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(downloadURL => {
          setNewProduct({ ...newProduct, img: downloadURL });
        });

        setLoading(false);
      });
    }
  }, [file]);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <div className="addProductForm">
        <div className="row">
          <div className="left">
            <div className="addProductItem">
              <label>Image</label>
              <input
                onChange={e => setFile(e.target.files[0])}
                accept="image/*"
                type="file"
                id="file"
              />
            </div>
            <div className="addProductItem">
              <label>Name</label>
              <input
                onChange={handleChange}
                name="title"
                type="text"
                placeholder="Apple Airpods"
                required
              />
            </div>
            <div className="addProductItem">
              <label>Description</label>
              <textarea
                onChange={handleChange}
                style={{ width: "300px" }}
                type="text"
                rows="6"
                col="80"
                name="desc"
                required
              />
            </div>
            <div className="addProductItem">
              <label>Price</label>
              <input
                onChange={handleChange}
                name="price"
                type="number"
                placeholder="price"
                min='1'
                required
              />
            </div>
            <div className="addProductItem">
              <label>inStock</label>
              <select onChange={handleChange} name="inStock">
                <option defaultValue value="true">
                  Yes
                </option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="addProductItem">
              <label>Avaible Colors</label>
              <input
                value={colorInput}
                onChange={e => setColorInput(e.target.value)}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="red"
              />
              <div className="colors">
                {color?.map((c, i) => (
                  <span className="avaibleColor" key={i}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="right">
            <div className="addProductItem">
              <img src="" alt="" />
            </div>

            <div className="addProductItem">
              <label>Categories</label>
              <div className="checkbox">
                <input
                  onChange={e => handleCheckbox(e)}
                  type="checkbox"
                  id="cat"
                  value="shirt"
                />
                <label htmlFor="cat">Shirt Style</label>
              </div>
              <div className="checkbox">
                <input
                  onChange={e => handleCheckbox(e)}
                  type="checkbox"
                  id="cat"
                  value="mens"
                />
                <label htmlFor="cat">Mens Life</label>
              </div>
              <div className="checkbox">
                <input
                  onChange={e => handleCheckbox(e)}
                  type="checkbox"
                  id="cat"
                  value="home"
                />
                <label htmlFor="cat">Home & Womens</label>
              </div>
            </div>
            <div className="addProductItem">
              <label>Size</label>
              <div className="checkbox">
                <input
                  onChange={e => handleCheckbox(e)}
                  type="checkbox"
                  id="size"
                  value="s"
                />
                <label htmlFor="size">S</label>
              </div>
              <div className="checkbox">
                <input
                  onChange={e => handleCheckbox(e)}
                  type="checkbox"
                  id="size"
                  value="m"
                />
                <label htmlFor="size">M</label>
              </div>
              <div className="checkbox">
                <input
                  onChange={e => handleCheckbox(e)}
                  type="checkbox"
                  id="size"
                  value="l"
                />
                <label htmlFor="size">L</label>
              </div>
              <div className="checkbox">
                <input
                  onChange={e => handleCheckbox(e)}
                  type="checkbox"
                  id="size"
                  value="xl"
                />
                <label htmlFor="size">XL</label>
              </div>{" "}
              <div className="checkbox">
                <input
                  onChange={e => handleCheckbox(e)}
                  type="checkbox"
                  id="size"
                  value="xxl"
                />
                <label htmlFor="size">XXL</label>
              </div>
              {loading && <span className="loading">Loading ...</span>}
              {file && (
                <img
                  className="productImg"
                  src={URL.createObjectURL(file)}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
        <button
          onClick={handleCreate}
          type="submit"
          className="addProductButton"
        >
          Create
        </button>
      </div>
    </div>
  );
}
