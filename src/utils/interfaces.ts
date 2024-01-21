export interface ProductsProps {
    filter(arg0: (product: CardProps) => boolean): CardProps[];
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
    type: 'primary' | 'secondary' | 'nav';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface RangeSliderProps {
    setPriceRange: ((value: number) => void) | ((value: number[]) => void)
    priceRange: number[]
}

export interface SlideBarProps {
    categories: string[];
    setSelectedCategories: (selected: string[]) => void;
    setPriceRange: ((value: number) => void) | ((value: number[]) => void)
    priceRange: number[]
}