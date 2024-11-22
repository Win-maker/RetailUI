import * as products from './products/index'

class API {
	products: typeof products;


	constructor() {
		this.products = products;
	}
}

const api = new API();

export default api;