import React, { useState } from 'react';
import './form-prop-style.css';
 const FormProp = (props) =>{
         const [empresa, setEmpresa] = useState('emp1');
         const [id, setid] = useState();
         const [name, setName] = useState();

         const addprop = (event)=>{
            event.preventDefault(); 
           const newProp = {
               id: id,
               name : name,
             };
            props.onAddProp(newProp, empresa);
           
         }


         return (
        <div className='form-prop-container'>
           
           <form>
              <h1>Formulario Propietarios</h1>
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
               <span>identificacion</span>
               <br/>
               <input 
               type ='text' 
               value ={id}
               onChange={(event)=>{
                  setid(event.target.value); 
               }}
               />
               <br/>
               <br/>
               <span>Nombre</span>
               <br/>
               <input type ='text'
               value ={name}
               onChange={(event)=>{
                  setName(event.target.value); 
               }}
               />
               <br/>
               <br/>
               <button
               onClick={addprop}
               >AGREGAR</button>
           </form>
        </div>
     );
}

export default FormProp;