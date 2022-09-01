import "./Categories.css";
import Dropdown from 'react-bootstrap/Dropdown';

function Categories() {
    return (
      <div className="App">
       <Dropdown id="dropdown">
      <Dropdown.Toggle variant="info" id="dropdown-basic">
        Search By Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">All Products</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Cakes</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cookies</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    );
  }
  export default Categories;
  