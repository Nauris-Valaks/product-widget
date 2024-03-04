import { Product } from "@/models/product.model";
import ColorChooser from "./color-chooser/ColorChooser.vue";
import ProductHeader from "./product-header/ProductHeader.vue";
import ProductLink from "./product-link/ProductLink.vue";
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  components: { ProductHeader, ProductLink, ColorChooser },
  data() {},

  computed: {
    productList(): Product[] {
      return store.getters["products/products"];
    },
  },

  methods: {
    isActive(productId: number) {
      const productList: Product[] = store.getters["products/products"];

      // Set active to false for all products
      productList.forEach((product) => {
        product.active = false;
      });

      // Find the product with the specified productId and set its active to true
      const productToActivate = productList.find(
        (product) => product.id === productId
      );

      if (productToActivate) {
        productToActivate.active = true;
      }

      store.commit("products/setProducts", productList);
    },
  },

  async mounted() {
    await store.dispatch("products/fetchProducts");
  },
});
