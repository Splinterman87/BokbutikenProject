export interface Cart {
    items: Array<CartItem>;
}

export interface CartItem {
    image: string;
    category: string;
    title: string;
    description:string;
    price:number;
    quantity: number;
    id: number;
}