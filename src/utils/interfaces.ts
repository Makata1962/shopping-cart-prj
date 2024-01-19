export interface ProductsProps {
    map(arg0: ({ id, title, image, price, rating }: CardProps) => import("react/jsx-runtime").JSX.Element): [];
    products: CardProps[];
}


export interface CardProps {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number;
}

export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
}