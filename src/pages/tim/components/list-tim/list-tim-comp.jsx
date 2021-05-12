import React from 'react';
import Empresa from '../empresas-tim/empresas-tim-comp';
import Propietarios from '../propietarios-tim/propietarios-tim-comp';
import Vehiculo from '../vehiculos-tim/vehiculos-tim-comp';
import './list-tim-style.css';
 const ListTim = (props) =>{
     
      //console.log({props.tim});
    return (
        <div className='list-container'>
            {props.tim.map((empresas,index)=>{
               return(<React.Fragment key={empresas.id}>
                     <Empresa EmpresaName={empresas.name}/>
                     {
                     empresas.propietarios.map((propietarios, indexprop)=>{
                         return(<React.Fragment key = {propietarios.id} >
                             <Propietarios 
                             PropietarioName={propietarios.name}/>
                            {
                              propietarios.vehiculos.map((vehiculos, indexvehi)=>{
                                  return(
                                      <Vehiculo key ={vehiculos.id} 
                                      vehiculoplaca ={vehiculos.placa}
                                      vehiculomarca ={vehiculos.marca}
                                      vehiculokilometraje ={vehiculos.kilometraje}

                                      />
                                  );
                              })         
                            }

                           </React.Fragment>);
                     })} 

               </React.Fragment>);
            })}
        </div>
     );
}

export default ListTim;