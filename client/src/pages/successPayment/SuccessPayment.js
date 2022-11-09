import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
import { userRequest } from "../../requestMethods";

const SuccessPayment = () => {
  const [orderId, setOrderId] = useState(null);
  const { currentUser } = useContext(UserContext);
  const { state } = useLocation();

  const createOrder = async () => {
    try {
      const res = await userRequest.post("/order", {
        userId: currentUser._id,
        products: state.products.map(p => ({
          productId: p._id,
          quantity: p.quantity,
          color: p.color,
          size: p.size,
        })),
        amount: state.amount,
        address: state.data.billing_details.address,
      });

      setOrderId(res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    state && createOrder();
  }, [state]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
      <Link
        to="/"
        style={{ padding: 10, marginTop: 20, backgroundColor: "teal" }}
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default SuccessPayment;
