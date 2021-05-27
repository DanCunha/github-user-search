import { makeRequest } from '../../../core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../components/BaseForm';
import './styles.scss';
import { User } from '../../../core/types/User';
import InfoLoader from '../components/Loaders/InfoLoader';
import ImageLoader from '../components/Loaders/ImageLoader';

type FormState = {
    user: string;
}

var dayjs = require('dayjs')

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Form = () => {
    const [user, setUser] = useState<User>();
    const [showInfo, setShowInfo] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState<FormState>({
        user: ''
    });

    const handleOnChange = (event: FormEvent) => {
        
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Componente Iniciado");
        setShowInfo(false);
        setIsLoading(true);
        makeRequest({ url: `/users/${formData.user}`})
        .then(response => setUser(response.data))
        .finally(() => {
           setIsLoading(false);
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <BaseForm title="Encontre um perfil Github" titleButton="Encontrar">
                    <div>
                        <input
                        value={formData.user}
                            name="user"
                            type="text"
                            className="form-input"
                            onChange={handleOnChange}
                            placeholder="Usuário Github"
                        />
                    </div>
            </BaseForm>
            {showInfo ? <div /> : (
                <>
                    <div className="info-container">            
                        <div className="info-img">
                            {isLoading ? <ImageLoader /> : (
                                <>
                                    <img src={user?.avatar_url} alt={user?.name} className="user-details-image" />
                                    <a href={user?.html_url} className="btn-profile">
                                        Ver Perfil
                                    </a>
                                </>
                            )}
                        </div>
                        <div className="info-data">
                            {isLoading ? <InfoLoader /> : (
                                <>
                                    <div className="info-repo">
                                        <p>Repositórios públicos: {user?.public_repos}</p>
                                        <p>Seguidores: {user?.followers}</p>
                                        <p>Seguindo: {user?.following}</p>
                                    </div>
                                    <div className="info-details">
                                        <h1>Informações</h1>
                                        <p><b>Empresa: </b>{user?.company}</p>
                                        <p><b>Website/Blog: </b>{user?.blog}</p>
                                        <p><b>Localidade: </b>{user?.location}</p>
                                        <p><b>Membro desde: </b>{dayjs(user?.created_at).format('DD/MM/YYYY')}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
            
        </form>
    )
}

export default Form;