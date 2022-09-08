
  export function getUsers() {
    return fetch("http://localhost:3100/customers/session",{credentials:"include"})
        .then(response => response.json())
        .then(customers => (customers))
}
  export function getProducts() {
    return fetch("http://localhost:3100/api/items/getItems",{credentials:"include"})
        .then(response => response.json())
        .then(products => (products))
}



