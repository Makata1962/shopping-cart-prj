export interface ProductsProps {
    type?: 'small';
    products: CardProps[];
}


export interface CardProps {
    id: number;
    title: string;
    image: string;
    price: number;
    category?: string;
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
    type?: 'primary' | 'secondary' | 'nav';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
}

export interface RangeSliderProps {
    setPriceRange: ((value: number) => void) | ((value: number[]) => void)
    priceRange: number[]
}

export interface SideBarProps {
    setPriceRange: ((value: number) => void) | ((value: number[]) => void)
    categories: string[],
    priceRange: number[]
}

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}