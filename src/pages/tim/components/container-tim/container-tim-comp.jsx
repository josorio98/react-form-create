import React from 'react';
import FormProp from '../form-prop/form-prop-comp';
import FormTim from '../form-tim/form-tim-comp';
import ListTim from '../list-tim/list-tim-comp';
import './container-tim-style.css';
 const ContainerTim = (props) =>{

    return (
        <div className='tim-container'>
            <FormTim
            onAddVehiculo={props.onAddVehiculo}
            />
            <FormProp
            onAddProp={props.onAddProp}
            />
            <ListTim
             tim ={props.tim}
             onAddProp={props.onAddProp}
             onAddVehiculo={props.onAddVehiculo}

             />

        </div>
     );
}

export default ContainerTim;