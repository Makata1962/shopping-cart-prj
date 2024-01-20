export interface ProductsProps {
    map(arg0: ({ id, title, image, price }: CardProps) => import("react/jsx-runtime").JSX.Element): [];
    products: CardProps[];
}


export interface CardProps {
    id: number;
    title: string;
    image: string;
    price: number;
}

export interface ImageProps {
    src?: string;
    alt: string;
    className?: string;
}

export interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    to?: string;
    type: 'primary' | 'secondary' | 'nav';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}