import * as products from './products/index'
import * as saleReport from './salereport/index'

class API {
	products: typeof products;
	saleReport:typeof saleReport;


	constructor() {
		this.products = products;
		this.saleReport = saleReport;
	}
}

const api = new API();

export default api;