import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { adminRequest } from "../../requestMethods";

export default function ProductList() {
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const res = await adminRequest.get("product");
      setData(res.data);
    } catch {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async id => {
    try {
      const res = await adminRequest.delete(`product/${id}`);
      console.log(res);
      res && getProducts();
    } catch {}
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 260 },
    {
      field: "product",
      headerName: "Product",
      width: 260,
      renderCell: params => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 240 },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: params => {
        return (
          <>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      {data ? (
        <DataGrid
          getRowId={r => r._id}
          rows={data}
          columns={columns}
          disableSelectionOnClick
          checkboxSelection
          autoHeight
        />
      ) : (
        <span>loading...</span>
      )}
    </div>
  );
}
