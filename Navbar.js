import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Link, Routes, Route } from "react-router-dom";

function Navbar() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to={"/home"}>☎️</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to={"/home"}>Product</Link>
      </li>
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search for products" aria-label="Search" />
      
      </form>
      
      
        
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">🛒My Cart</button>
    </form>
  </div>
</nav>
        </div>


    );
}
<Routes>
    <Route path="/home" element={<index></index>}></Route>
    
</Routes>
export default Navbar;