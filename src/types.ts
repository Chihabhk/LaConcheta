export interface Item {
    id: string;
    name: string;
    description: string;
    price: string;
    quantity: number;
    url: string;
}
export interface Category {
    id: string;
    data: Item[];
    url: string;
}

export interface MenuState {
    menuCategories: Category[];
    cartItems: Item[];
    loading: "idle" | "pending" | "succeeded" | "failed";
}
