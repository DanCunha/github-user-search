
import { makeRequest } from '../../../core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../components/BaseForm';
import './styles.scss';

type FormState = {
    user: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Form = () => {
  //  const [productsResponse, setProductsresponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState<FormState>({
        user: ''
    });

    const handleOnChange = (event: FormEvent) => {
        
        const name = event.target.name;
        const value = event.target.value;

        console.log(value);

        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Componente Iniciado");
        setIsLoading(true);
        makeRequest({ url: `/users/${formData.user}`})
        .then(response => console.log(response.data))
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
        </form>
    )
}

export default Form;