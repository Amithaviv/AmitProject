  export async function getUsers() {
    let customers = await fetch("http://localhost:3100/customers/session",{credentials:"include"});
    customers = await customers.json();
    console.log(customers);
  }
  getUsers()


  export function getProducts() {
    return fetch("http://localhost:3100/products/session",{credentials:"include"})
        .then(response => response.json())
        .then(products => (products))
}



