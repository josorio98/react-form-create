import React from 'react';
import './empresas-tim-style.css';
const Empresa = (props) =>{

   return (
     <div className = 'empresa-container'>
     { props.EmpresaName }
     </div>
   );
}

export default Empresa;