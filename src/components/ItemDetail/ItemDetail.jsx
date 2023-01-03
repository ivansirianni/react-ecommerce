import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import "./ItemDetail.css";
import { cartContext } from "../../storage/cartContext";

export default function ItemDetail(props) {
	const [qtyInCart, setQtyInCart] = useState(0);

	const { addToCart, removeItem, emptyCart } = useContext(cartContext);

	let urlCategoryDetail = `/category/${props.product.category}`;

	if (props.product === "Item Not Found" || props.product.id === undefined) {
		return (
			<div className="cartCardDetail">
				<div className="cartCard"></div>
				<div className="cartCardDetail-content">
					<p className="cartCardDetail-content__category">Error</p>
					<p className="cartCardDetail-content__title">Product Not Found</p>
					<p className="cartCardDetail-content__body">
						We could not match any product. Please, try again
					</p>
				</div>
			</div>
		);
	} else {
		function handleAddToCart(cartQty) {
			setQtyInCart(cartQty);
			addToCart(props.product, cartQty);
		}

		function handleRemoveItem(itemShownOnScreen) {
			removeItem(itemShownOnScreen);
		}

		function handleEmptyCart(cart) {
			emptyCart(cart);
		}

		return (
			<>
				<div className="cartCardDetail">					
					<div className="cartCardDetail-content">
						<Link className="nav__link" to={urlCategoryDetail}>
							<span className="cartCardDetail-content__category">
								{props.product.category}
							</span>
						</Link>
						<p className="cartCardDetail-content__title">
							{props.product.name}
						</p>
						<p className="cartCardDetail-content__body">{props.product.detail}</p>
						<div className="cartCardDetail-content__priceQty">
							<span>${props.product.price}</span>
						</div>
						<ItemCount
							onHandInventory={props.product.stock}
							itemShownOnScreen={props.product.id}
							onAddToCart={handleAddToCart}
							onRemoveItem={handleRemoveItem}
							onEmptyCart={handleEmptyCart}
						/>
						<span className="cartCardDetail-content__title">
							{props.product.stock} Items Available to Buy
						</span>{" "}
						--{" "}
						<span>
							<Link to="/cart">
								<Button className="button-cart">To Cart 🛒</Button>
							</Link>
						</span>
					</div>
				</div>
			</>
		);
	}
}
