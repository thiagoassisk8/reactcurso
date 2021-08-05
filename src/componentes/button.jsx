import React from 'react'
import './button.css'

const Button = ({children,onclick}) => {
    return ( <button onclick={onclick} className="button">
        {children}
    </button> );
}
<Button>Adicionar</Button>
 
export default Button;