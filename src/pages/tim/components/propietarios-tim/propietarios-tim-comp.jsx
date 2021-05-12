import React from 'react';
import './propietarios-tim-style.css';
const Propietarios = (props) =>{

   return (
     <div className = 'propietarios-container'>
     { props.PropietarioName }
     </div>
   );
}

export default Propietarios;