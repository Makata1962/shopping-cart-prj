import Trainers from '../assets/trainers.png';
import Dress from '../assets/dress.png';
import Jacket from '../assets/jacket.png';
import Glasses from '../assets/glasses.png';

interface ImagesProps {
    [key: string]: string;
    Trainers: string;
    Dress: string;
    Jacket: string;
    Glasses: string;
}

export function getImageSrc(categoryName: string) {
    const images: ImagesProps = {
        Dress,
        Jacket,
        Trainers,
        Glasses,
    };
    // Default to Dress image if category name doesn't match,
    // because api data of categories are different from figma design
    return images[categoryName] || Jacket
}
