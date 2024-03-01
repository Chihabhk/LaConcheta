export interface Item {
    id: string;
    name: string;
    description?: string;
    allergies?: string;
    price: string;
    quantity?: number;
    url?: string;
}
export interface Category {
    id: string;
    name: string;
    data: Item[];
    url: string;
}

export interface MenuState {
    menu: {
        menuCategories: Category[];
        cartItems: Item[];
        loading: "idle" | "pending" | "succeeded" | "failed";
    };
}
