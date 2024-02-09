export interface Item {
    name: string;
    description: string;
    price: string;
    quantity: number;
    url: string;
}

export interface State {
    menu: {
        cartItems: Item[];
    };
}
