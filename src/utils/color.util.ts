import { Colors, Product, availableColors } from "@/models/product.model";

export function replaceSelectedColor(products: Product[]): Product[] {
  const colorMap: Record<string, string> = {};
  availableColors.forEach((color) => {
    colorMap[color.identifier] = color.value;
  });

  return products.map((product) => {
    if (colorMap[product.selectedColor]) {
      return {
        ...product,
        selectedColor: colorMap[product.selectedColor] as Colors,
      };
    }
    return product;
  });
}
