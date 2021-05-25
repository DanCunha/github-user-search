import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Home = () => (
    <div className="home-container">
    <div className="home-content">
        <div className="col-6">
            <h1 className="text-title">
                Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
            </h1>
            <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
                Favor observar as instruções passadas no capítulo sobre a <br />elaboração deste projeto.
                Este design foi adaptado a partir de Ant Design System for Figma, de <br />
                Mateusz Wierzbicki: antforfigma@gmail.com
            </p>
            <Link to="/search">
                <ButtonIcon text="Começar"/>
            </Link>
        </div>

    </div>
</div>
);

export default Home;