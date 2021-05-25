import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../../core/components/ButtonIcon';
import './styles.scss';

type Props = {
    title: string;
    titleButton: string;
    children: React.ReactNode;
}

const BaseForm = ({ title, titleButton, children }: Props) => {
    return (
        <div className="base-form">
            <h1 className="base-form-title">
                {title}
            </h1>
            {children}
            <div className="base-form-actions">
                <ButtonIcon text={titleButton}/>
            </div>
        </div>
    )
}

export default BaseForm;