import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../shared/types';



interface CartProduct {
  productID: string;
  productName: string;
  count: number;
  sellingPrice:number;
  profitPerItem:number;
  stock:number;
}


interface CartState {
  cartProducts: CartProduct[]; 

}

const initialState: CartState = {
  cartProducts: [],

};



export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductType>) {
      const {productID,productName,profitPerItem,stock,sellingPrice} = action.payload; 
      const existingProduct = state.cartProducts.find(product => product.productID === productID);
    
      if (existingProduct) {
        existingProduct.count += 1; 
      } 
      else {
        state.cartProducts.push({
          productID,
          productName: productName,  
          sellingPrice: sellingPrice,   
          profitPerItem: profitPerItem, 
          stock:stock,
          count: 1
        });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const productID = action.payload;
      const existingProductIndex = state.cartProducts.findIndex(product => product.productID === productID);
    
      if (existingProductIndex !== -1) {
        const existingProduct = state.cartProducts[existingProductIndex];
    
        if (existingProduct.count > 1) {
          existingProduct.count -= 1; 
        } else {
     
          state.cartProducts.splice(existingProductIndex, 1);
        }
      }
    },
    increaseCount (state,action:PayloadAction<string>){
      const productID = action.payload;
      const matchingProduct = state.cartProducts.find(p => p.productID === productID);
      if (matchingProduct){
          matchingProduct.count +=1
      }
    },

    decreaseCount (state,action:PayloadAction<string>){
      const productID = action.payload;
      const matchingProductIndex = state.cartProducts.findIndex(product => product.productID === productID);
    
      if (matchingProductIndex !== -1) {
        const existingProduct = state.cartProducts[matchingProductIndex];
    
        if (existingProduct.count > 1) {
          existingProduct.count -= 1; 
        } else {
     
          state.cartProducts = state.cartProducts.filter(
            (product) => product.productID !== productID
          );
        }
      }
    }
    
  },
});

export const { addToCart, removeFromCart,increaseCount,decreaseCount } = cartSlice.actions;

export default cartSlice.reducer;
