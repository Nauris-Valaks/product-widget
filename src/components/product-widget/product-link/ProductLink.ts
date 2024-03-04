import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductLink",
  props: ["product"],
  data() {
    return {
      tooltipVisible: false,
      hideTimer: 0,
    };
  },
  methods: {
    showTooltip() {
      this.tooltipVisible = true;
    },

    startHideTimer() {
      this.hideTimer = setTimeout(() => {
        this.tooltipVisible = false;
      }, 250);
    },

    cancelHideTimer() {
      clearTimeout(this.hideTimer);
    },
  },
});
