import { VueWrapper, mount } from "@vue/test-utils";
import store from "@/store";
import { ComponentPublicInstance } from "vue";
import ColorChooser from "@/components/product-widget/color-chooser/ColorChooser";
import { availableColors } from "@/models/product.model";

describe("ColorChooser", () => {
  let wrapper: VueWrapper<any, ComponentPublicInstance<{}, any>>;

  beforeEach(() => {
    wrapper = mount(ColorChooser, {
      props: {
        product: {
          selectedColor: null,
          id: 1, // Mocking product id for testing
        },
      },
    });
  });

  it("computes colorSelection correctly", () => {
    // Modify colors to mimic specific test case
    wrapper.vm.colors = availableColors;

    // Test when selectedColor is undefined
    expect(wrapper.vm.colorSelection).toEqual([]);

    // Test when selectedColor is defined and matches with available colors
    wrapper.vm.product.selectedColor = availableColors[0].value;
    expect(wrapper.vm.colorSelection).toEqual(availableColors);
  });

  it("changes color correctly", () => {
    // Mock store getters and commit method
    store.getters["products/products"] = [{ id: 1, selectedColor: null }];
    store.commit = jest.fn();

    // Trigger changeColor method
    wrapper.vm.changeColor(availableColors[0]);

    // Check if the selected color is updated
    expect(wrapper.vm.product.selectedColor).toBe(availableColors[0].value);

    // Check if the store commit method is called with the updated product list
    expect(store.commit).toHaveBeenCalledWith("products/setProducts", [
      { id: 1, selectedColor: availableColors[0].value },
    ]);
  });
});
