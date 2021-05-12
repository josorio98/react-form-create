import React from 'react';
import './vehiculos-tim-style.css';
const Vehiculo = (props) =>{

   return (
     <div className = 'vehiculos-container'>
       {props.vehiculoplaca}
       {'-------'}
       {props.vehiculomarca}
       {'-------'}
       {props.vehiculokilometraje >100000

       ?
       <span className ='kilometraje'>
       {props.vehiculokilometraje} 
     </span>
       :
       <span>
       {props.vehiculokilometraje} 
      </span>
       }


     </div>
   );
}

export default Vehiculo;