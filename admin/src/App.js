import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { UserContext } from "./context/UserContext/UserContext";

function App() {
  const { adminUser } = useContext(UserContext);

  const AuthPath = ({ children }) =>
    adminUser ? children : <Navigate to="/login" />;

  return (
    <Router>
      <Topbar />

      <div className="container">
        <Sidebar />
        <Routes>
          <Route
            path="/login"
            element={adminUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            exact
            path="/"
            element={
              <AuthPath>
                <Home />
              </AuthPath>
            }
          />

          <Route
            path="/users"
            element={
              <AuthPath>
                <UserList />
              </AuthPath>
            }
          />
          <Route
            path="/user/:userId"
            element={
              <AuthPath>
                <User />
              </AuthPath>
            }
          />

          <Route
            path="/newUser"
            element={
              <AuthPath>
                <NewUser />
              </AuthPath>
            }
          />

          <Route
            path="/products"
            element={
              <AuthPath>
                <ProductList />
              </AuthPath>
            }
          />

          <Route
            path="/product/:productId"
            element={
              <AuthPath>
                <Product />
              </AuthPath>
            }
          />

          <Route
            path="/newproduct"
            element={
              <AuthPath>
                <NewProduct />
              </AuthPath>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
