import { Item } from "../types.ts";

export const calculateTotal = (items: Item[] | Item) => {
    const arrayItems = Array.isArray(items) ? items : [items];
    return arrayItems.reduce((total, item) => {
        const priceMatch = item.price.match(/[\d.]+/);
        const price = priceMatch ? parseFloat(priceMatch[0]) : 0;
        return total + price * item.quantity;
    }, 0);
};

export const itemsNeedUpdate = (currentItems: Item[], newItems: Item[]) => {
    return currentItems.some((item, index) => {
        return (
            item.name !== newItems[index].name ||
            item.quantity !== newItems[index].quantity
        );
    });
};
