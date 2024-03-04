import {
  ColorSelector,
  Product,
  availableColors,
} from "@/models/product.model";
import store from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ColorChooser",
  props: ["product"],

  data() {
    return { colors: [...availableColors] };
  },

  computed: {
    colorSelection(): ColorSelector[] {
      if (this.product.selectedColor === undefined) {
        return [];
      }

      const foundColor = this.colors.find(
        (color) => color.value === this.product.selectedColor
      );

      if (!foundColor) {
        return [];
      }

      foundColor.isActive = true;
      return this.colors;
    },
  },

  methods: {
    changeColor(color: ColorSelector) {
      const productList = store.getters["products/products"];
      const foundProduct = productList.find(
        (product: Product) => product.id === this.product.id
      );

      this.colors.forEach((item) => {
        if (item.value === color.value) {
          item.isActive = true;
          foundProduct.selectedColor = color.value;
        } else {
          item.isActive = false;
        }
      });

      store.commit("products/setProducts", productList);
    },
  },

  setup(props) {
    props.product.selectedColor;
  },
});
