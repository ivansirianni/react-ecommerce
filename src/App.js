import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import "./components/ItemList/ItemList.css";
import "./components/Cart/Cart.css";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import Home  from "./components/Pages/Home"
import About from "./components/Pages/About"

import CartContainer from "./components/CartContainer/CartContainer";
import { CartTotal } from "./components/Cart/Cart";
import { CartContextProvider } from "./storage/cartContext";

function App() {
	return (
		<>
		<CartContextProvider>
				<BrowserRouter>
					<div className="App grid--container">
						<NavBar />
						<section id="main">
							<Routes>								
								<Route path="/category/:categoryID"
									element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														Portas Esquivel & Asociados
													</div>
												</h1>
												<div className="display-1--subtitle">
													Servicios por Categoría
												</div>
												<div className="cartCards--container">
													<ItemListContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="/item/:itemID" element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														Portas Esquivel & Asociados
													</div>
												</h1>
												<div className="display-1--subtitle">
													Detalle del servicio
												</div>
												<div className="cartCardDetail--container">
													<ItemDetailContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="/"
									element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														Portas Esquivel & Asociados
													</div>
												</h1>
												<div className="display-1--subtitle">
													Servicios Ofrecidos
												</div>
												<div className="cartCards--container">
													<ItemListContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="/cart"
									element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														Portas Esquivel & Asociados
													</div>
												</h1>
												<div className="display-1--subtitle">
													Carrito de compras
												</div>
												<div className="purchaseCards--container">
													<CartTotal />
													<CartContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="*"
									element={
										<>
											<h1>
												<div className="display-1-intro">
													Error 404: Page Not Found.
												</div>
											</h1>
										</>
									}
								/>
							</Routes>
						</section>
						<Footer />
					</div>
				</BrowserRouter>
			</CartContextProvider>
		</>
	);
}

export default App;


// <CartContextProvider>
// 			<BrowserRouter>
// 			<div className="app-container">
// 				<NavBar />
// 				<Routes>
// 				<Route path="/" element={ <Home /> } />
// 				<Route path='/' element={ <ItemListContainer  />}/>
// 				<Route path="/about" element={ <About /> } />
// 				<Route path='/cart' element={ <CartContainer  />}/>
// 				<Route path='/cart-total' element={ <CartTotal  />}/>
// 				<Route path='/category/:categoryId' element={ <ItemListContainer />} />
// 				<Route path='/item/:itemId' element={ <ItemDetailContainer  />}/>
// 				</Routes>
// 			</div>        
// 			</BrowserRouter>
// 		</CartContextProvider>

/* <CartContextProvider>
				<BrowserRouter>
					<div className="App grid--container">
						<NavBar />
						<section id="main">
							<Routes>
								<Route
									path="/"
									element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														Portas Esquivel & Asociados
													</div>
												</h1>
												<Greeting />
											</div>
										</>
									}
								/>
								<Route
									path="/category/:categoryID"
									element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														Portas Esquivel & Asociados
													</div>
												</h1>
												<div className="display-1--subtitle">
													Servicios por Categoría
												</div>
												<div className="cartCards--container">
													<ItemListContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="/item/:itemID"
									element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														Portas Esquivel & Asociados
													</div>
												</h1>
												<div className="display-1--subtitle">
													Detalle del servicio
												</div>
												<div className="cartCardDetail--container">
													<ItemDetailContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="/servicios"
									element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														Portas Esquivel & Asociados
													</div>
												</h1>
												<div className="display-1--subtitle">
													Servicios Ofrecidos
												</div>
												<div className="cartCards--container">
													<ItemListContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="/cart"
									element={
										<>
											<div className="col--main">
												<h1>
													<div className="display-1-intro">
														Portas Esquivel & Asociados
													</div>
												</h1>
												<div className="display-1--subtitle">
													Carrito de compras
												</div>
												<div className="purchaseCards--container">
													<CartTotal />
													<CartContainer />
												</div>
											</div>
										</>
									}
								/>
								<Route
									path="*"
									element={
										<>
											<h1>
												<div className="display-1-intro">
													Error 404: Recurso no encontrado.
												</div>
											</h1>
										</>
									}
								/>
							</Routes>
						</section>
						<Footer />
					</div>
				</BrowserRouter>
			</CartContextProvider> */