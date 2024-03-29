import { Item } from "../types.ts";

export const calculateTotal = (items: Item[] | Item) => {
    const arrayItems = Array.isArray(items) ? items : [items];
    return arrayItems.reduce((total, item) => {
        const priceMatch = item.price.match(/[\d.]+/);
        const price = priceMatch ? parseFloat(priceMatch[0]) : 0;
        const quantity = item.quantity ?? 0;
        return total + price * quantity;
    }, 0);
};
