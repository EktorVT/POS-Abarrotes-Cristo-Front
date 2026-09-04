import type { Product } from "@/types/products";

export interface CartItem {
  product: Product;
  quantity: number;
}
export function increaseQuantity(
  cart: CartItem[],
  productId: number
): CartItem[] {
  return cart.map((item) => {
    if (item.product.id !== productId) {
      return item;
    }

    if (item.quantity >= item.product.stock) {
      return item;
    }

    return {
      ...item,
      quantity: item.quantity + 1
    };
  });
}

export function decreaseQuantity(
  cart: CartItem[],
  productId: number
): CartItem[] {
  return cart
    .map((item) => {
      if (item.product.id !== productId) {
        return item;
      }

      return {
        ...item,
        quantity: item.quantity - 1
      };
    })
    .filter((item) => item.quantity > 0);
}
