
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Policy from './components/Policy';
import Registe from './screens/Registe';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';
import Userlist from './components/Admin/Userlist';
import EditPizza from './components/Admin/EditPizza';
import Pizzaslist from './components/Admin/Pizzaslist';
import AddNewPizza from './components/Admin/AddNewPizza';
import OrderList from './components/Admin/OrderList';


function App() {
  return (
    <BrowserRouter>
    <TopBar/>
    <NavBar/>
      <Routes>
        <Route path="/about" exact element={<About/>} />
        <Route path="/contact" exact element={<Contact/>} />
        <Route path="/policy" exact element={<Policy/>} />
        <Route path="/register" exact element={<Registe/>} />
        <Route path="/login" exact element={<Login/>} />
        <Route path="/" exact element={<HomeScreen/>} />
        <Route path="/cart" exact element={<CartScreen/>} />
        <Route path="/orders" exact element={<OrderScreen/>} />
        <Route path="/admin" exact element={<AdminScreen/>} />
        <Route path="/admin/userlist" exact element={<Userlist/>} />
        <Route
                path="/admin/editpizza/:pizzaId"
                element={<EditPizza/>}
                exact
              />
              <Route path="/admin/pizzaslist" element={<Pizzaslist/>} exact />
              <Route path="/admin/addnewpizza" element={<AddNewPizza/>} exact />
              <Route path="/admin/orderlist" element={<OrderList/>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
