import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonIcon = ({text}: Props) => (
    <div>
        <button className="btn-icon">
            <h5>{text}</h5>
        </button>
    </div>
);

export default ButtonIcon;