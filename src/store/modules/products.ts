import { Product } from "@/models/product.model";
import axios from "axios";
import { ActionContext } from "vuex";
import { RootState } from "..";
import { replaceSelectedColor } from "@/utils/color.util";

export interface State {
  productsList: Product[];
}

const state: State = {
  productsList: [],
};

const getters = {
  products: (state: State) => {
    return state.productsList;
  },
};

const actions = {
  async fetchProducts(context: ActionContext<RootState, RootState>) {
    try {
      const response = await axios.get(
        "https://api.mocki.io/v2/016d11e8/product-widgets"
      );

      context.commit("setProducts", response.data);
      return response.data;
    } catch (error) {
      throw "Failed fetching products";
    }
  },
};

const mutations = {
  setProducts(state: State, products: Product[]) {
    const newProducts = replaceSelectedColor(products);

    state.productsList = newProducts;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
