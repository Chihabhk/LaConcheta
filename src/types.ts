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

export interface State {
    menu: {
        menuCategories: Category[];
        cartItems: Item[];
    };
}
