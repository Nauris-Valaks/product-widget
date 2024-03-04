import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductHeader",
  props: ["product"],

  computed: {
    textColor() {
      if (this.colorCompare) {
        return "#3B755F";
      }
      return "#F9F9F9";
    },

    logo(): string {
      if (this.colorCompare) {
        return "@/assets/greenLogo.svg";
      }
      return "@/assets/logo.svg";
    },

    colorCompare(): boolean {
      return (
        this.product.selectedColor === "#F2EBDB" ||
        this.product.selectedColor === "#F9F9F9"
      );
    },
  },
});
