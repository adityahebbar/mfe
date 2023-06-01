import { useState, useEffect } from 'react';
import { cart } from 'cart/cart';

/* This hook imports the cart observable from the cart MFE and uses it to return the count of number items in the cart */

export function useCartCount() {
	const [count, setCount] = useState(cart.cartItems.length);

	useEffect(() => {
		cart.subscribe(({ cartItems }) => setCount(cartItems.length));
	}, []);

	return count;
}
