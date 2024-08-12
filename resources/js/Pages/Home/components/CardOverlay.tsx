import React from 'react';

interface Props{

}
const CardOverlay: React.FC<Props> = ({ }) => {

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLDivElement;
        const overlay = target.querySelector('.overlay') as HTMLDivElement;
        if (overlay) {
            overlay.classList.add('opacity-100');
        }
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const target = event.target as HTMLDivElement;
        const overlay = target.querySelector('.overlay') as HTMLDivElement;
        if (overlay) {
            overlay.classList.remove('opacity-100');
        }
    };

    return (
        <div className="relative w-64 h-64" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src="images/living.png" alt="Avatar" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center overlay transition-opacity opacity-0">
                <div className="text-white font-bold">John Doe</div>
            </div>
        </div>
    );
};

export default CardOverlay;
