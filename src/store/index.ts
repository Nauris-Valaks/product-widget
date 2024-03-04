import { Product } from "@/models/product.model";
import { createStore } from "vuex";
import products from "./modules/products";

export interface RootState {
  products: Product[];
}

export default createStore({
  modules: { products },
});
