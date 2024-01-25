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
    quantity?: number;
    description?: string;
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
    type?: 'primary' | 'secondary' | 'nav' | 'dropdown' | 'confirm';
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
    [key: string]: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface CustomerState {
    username: string;
    token: string;
    isModalOpen: boolean;
}

export interface ProductState {
    favoriteProducts: CardProps[],
    cartProducts: CardProps[],
    totalPrice: number,
    isLoading: boolean,
    error: string,
}

export interface PaginationProps {
    page: number,
    prevPage: React.MouseEventHandler<HTMLButtonElement>,
    nextPage: React.MouseEventHandler<HTMLButtonElement>,
    isLastPage: boolean,
}

