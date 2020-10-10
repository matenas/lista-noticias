import React, {useState} from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

function Form({setCategory}) {

    //opciones de categoria que le pasare al custom hook
    const OPTIONS = [
        { value: 'general' , label: 'General' },
        { value: 'entertainment' , label: 'Entretenimientos' },
        { value: 'sports' , label: 'Deportes' },
        { value: 'technology' , label: 'Tecnologia' },
        { value: 'science' , label: 'Ciencias' }
    ]

   //utilizar custom hook
   const [category, SelectNews] = useSelect('general',OPTIONS);

   //pasar categoria al componente principal 
    const handleSubmit = (e) => {
        e.preventDefault();

        setCategory(category);
    }
    
    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Categorias</h2>
                    <SelectNews
                        options = {OPTIONS}
                    ></SelectNews>
                    <div className="input-field col s12">
                        <input 
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            type="submit" 
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;