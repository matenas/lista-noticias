import React, {useState} from 'react';

const useSelect = (inicialState, options) => {
    
    //state del custom hook
    const [state, setState] = useState(inicialState);

    const SelectNews = () => {

        return (
            <select 
                className="browser-default"
                name=""
                value={state}
                onChange={ (e) => setState(e.target.value) }
            >
                { options.map( (option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >{option.label}</option>
                ) )  }
            </select>
        );
    }
    return [state, SelectNews] 
    
};

export default useSelect;