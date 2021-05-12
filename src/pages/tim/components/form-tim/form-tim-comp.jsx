import React, { useState } from 'react';
import './form-tim-style.css';
 const FormTim = (props) =>{
         const [empresa, setEmpresa] = useState('emp1');
         const [propietario, setProp] = useState('prop1');
         const [placa, setplaca] = useState();
         const [marca, setMarca] = useState();
         const [km, setKm] = useState(0);

         const addvehiculo = (event)=>{
            event.preventDefault(); 
            const newVehiculo = {
               id: placa,
               placa : placa,
               marca : marca,
               kilometraje: Number(km), 
             };
            props.onAddVehiculo(newVehiculo, propietario, empresa);

         }

         return (
        <div className='form-container'>
           
           <form>
              <h1>Formulario Vehiculos</h1>
              <br/>
             
               <span>Empresas</span>
               <br/>     
               <select
               value ={empresa}
               onChange={(event)=>{
                  setEmpresa(event.target.value); 
               }}
               >
                  <option value="emp1">Socobuses</option>
                  <option value="emp2">Unitrans</option>
                  <option value="emp3">Sideral</option>
               </select>
               <br/>
               <br/>
               <span>Propietarios</span>
               <br/>  
               <select
               value ={propietario}
               onChange={(event)=>{
                  setProp(event.target.value); 
               }}
               >
                  <option value="prop1">Juan Manuel Osorio</option>
                  <option value="prop2">Juan Felipe Gomez</option>
                  <option value="prop3">Julian David Londoño Higuita</option>
               </select>
               <br/>
               <br/>
               <span>Placa</span>
               <br/>
               <input 
               type ='text' 
               value ={placa}
               onChange={(event)=>{
                  setplaca(event.target.value); 
               }}
               />
               <br/>
               <br/>
               <span>Marca</span>
               <br/>
               <input type ='text'
               value ={marca}
               onChange={(event)=>{
                  setMarca(event.target.value); 
               }}
               />
               <br/>
               <br/>
               <span>Kilometraje</span>
               <br/>
               <input type ='number'
               value ={km}
               onChange={(event)=>{
                  setKm(event.target.value); 
               }}
               />
               <br/>
               <br/>
               <button
               onClick={addvehiculo}
               >AGREGAR</button>
           </form>
        </div>
     );
}

export default FormTim;