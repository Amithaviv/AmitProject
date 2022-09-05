  export async function getUsers() {
    let customers = await fetch("http://localhost:3100/customers/session",{credentials:"include"});
    customers = await customers.json();
    console.log(customers);
  }
  getUsers()
  
  export async function getProducts() {
    let products = await fetch("http://localhost:3100/products/session",{credentials:"include"});
    products = await products.json();
    console.log(products);
  }
  getProducts()


