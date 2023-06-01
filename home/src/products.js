const API_SERVER = 'http://localhost:8080';

/* get all the products */
export const getProducts = () => fetch(`${API_SERVER}/products`).then((res) => res.json());

/* Get a product by id */
export const getProductById = (id) =>
	fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

/* Format currency */
export const currency = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});
