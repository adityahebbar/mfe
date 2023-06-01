import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getProducts, currency } from './products';

/* import the addToCart function and useLoggedIn hook from the cart MFE */
import { addToCart, useLoggedIn } from 'cart/cart';

export default function HomeContent() {
	const loggedIn = useLoggedIn();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts().then(setProducts);
	}, []);

	return (
		<div className='grid grid-cols-4 gap-5'>
			{products.map((product) => (
				<div key={product.id} className='px-1'>
					{/* Link each product to the pdp route */}
					<Link to={`/product/${product.id}`}>
						<img src={product.image} alt={product.name} className='h-3/6' />
					</Link>
					<div className='flex'>
						<div className='flex-grow text-xl'>
							<Link to={`/product/${product.id}`}>
								<a>{product.name}</a>
							</Link>
						</div>
						<div className='text-xl flex-end'>{currency.format(product.price)}</div>
					</div>
					<div className='mt-4 text-sm'>{product.description}</div>
					{/* If a user is logged in, show thr Add to cart button */}
					{loggedIn && (
						<div className='mt-2 text-right'>
							<button
								className='px-4 py-2 text-sm font-bold text-white bg-blue-500 rounded hover:bg-blue-700'
								onClick={() => addToCart(product.id)}
								id={`addtocart_${product.id}`}
							>
								Add to Cart
							</button>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
