import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import AddNewPizza from "../components/Admin/AddNewPizza";
import OrderList from "../components/Admin/OrderList";
import Pizzaslist from "../components/Admin/Pizzaslist";
import Userlist from "../components/Admin/Userlist";
import EditPizza from "./../components/Admin/EditPizza";


const AdminScreen = ({ history }) => {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);

  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              {/* <Button onClick={() => history.push("/admin/userlist")}>
                All Users
              </Button> */}
              <Button onClick={() => navigate("/admin/userlist")}>
                All Users
              </Button>
              <Button onClick={() => navigate("/admin/pizzaslist")}>
                All Pizzas
              </Button>
              <Button onClick={() => navigate("/admin/addnewpizza")}>
                Add New Pizza
              </Button>
              <Button onClick={() => navigate("/admin/orderlist")}>
                All Orders
              </Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="/admin" element={Userlist} exact />
              <Route path="/admin/userlist" component={Userlist} exact />
              
              <Route
                path="/admin/editpizza/:pizzaId"
                component={EditPizza}
                exact
              />
              <Route path="/admin/pizzaslist" element={Pizzaslist} exact />
              <Route path="/admin/addnewpizza" component={AddNewPizza} exact />
              <Route path="/admin/orderlist" component={OrderList} exact />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminScreen;