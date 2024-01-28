import classNames from 'classnames';
import React from 'react';

type XCardColor = '#F1F1F1' | '#F7F7F7' | '#0E0E0E' | '#F7F7F7'

type XCardProps = {
    color: XCardColor,
    isShadowed?: boolean;
};

const XCard = ({ color, isShadowed = false }: XCardProps) => {
    const shadowClass = classNames({
        'shadow-lg': isShadowed,
    });
    return (
        <div className={`bg-[${color}] ${shadowClass}
            rounded-[36px] max-h-96 max-w-96 shadow-xcard
        `}>
            some thing
        </div>
    );
};

export default XCard;