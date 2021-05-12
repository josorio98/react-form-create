import React, { useState } from 'react';
import ContainerTim from './components/container-tim/container-tim-comp';
import ListTim from './components/list-tim/list-tim-comp';


 const PrincipalPage = () =>{

   let empresas = [
          {  
             id :'emp1',  
             name :'Socobuses',
             propietarios:[
                {  id : 'prop1',
                   name :'Juan Manuel Osorio',
                  vehiculos : [
                     {
                        id: 'vh1',
                        placa : 'GHF234',
                        marca : 'MERCEDEZ BENZ',
                        kilometraje: 451652,

                     },
                     {
                        id:'vh2',
                        placa : 'PLU123',
                        marca : 'Chevrolet',
                        kilometraje: 105000,

                     },
                     {
                        id:'vh3',
                        placa : 'JGY785',
                        marca : 'Chevrolet',
                        kilometraje: 454123,

                     }
                  ]
               
               },
             ]
                
          },
          {
            id:'emp2',
            name :'Unitrans',
             propietarios:[
                {  id:'prop2',
                   name :'Juan Felipe Gomez',
                  vehiculos : [
                     {
                        id:'vh4',
                        placa : 'REF123',
                        marca : 'Chevrolet',
                        kilometraje: 182296,
                     },
                     {
                        id:'vh5',
                        placa : 'UYT116',
                        marca : 'Chevrolet',
                        kilometraje: 183296,
                     },
                     {
                        id:'vh6',
                        placa : 'UIJ123',
                        marca : 'Chevrolet',
                        kilometraje: 282296,
                     }
                  ]
               
               },
             ]
          },

          {
            id:'emp3',
            name :'Sideral',
            propietarios:[
               {  id:'prop3',
                  name :'Julian David Londoño Higuita',
                 vehiculos : [
                    {
                     id:'vh7',
                       placa : 'KJL123',
                       marca : 'Busscar',
                       kilometraje: 182296,
                     },

                     {
                        id:'vh8',
                        placa : 'HJK123',
                        marca : 'Chevrolet',
                        kilometraje: 482296,
                      },
                      {
                        id:'vh9',
                        placa : 'TUY123',
                        marca : 'Busscar',
                        kilometraje: 382296,
                      }


                 ]
              
              },
            ]
          }
      ];

      const [vehiculos, setVehiculos] = useState(empresas);
    return (
      <div>
         <ContainerTim 
            tim= {vehiculos}
            onAddVehiculo={(newvehiculoObj, propId, empId)=>{  
               const NuevoVehiculo = [];
               const propietarios = [] ;
               for(let i=0; i<vehiculos.length; i++){
                  for(let j=0; j<vehiculos[i].propietarios.length; j++){
                     if(vehiculos[i].propietarios[j].id !== propId ){
                        NuevoVehiculo.push(vehiculos[i]);
                       }

                     else{


                          propietarios.push({
                             ...vehiculos[i].propietarios[j],
                             vehiculos :[...vehiculos[i].propietarios[j].vehiculos,newvehiculoObj]
                          })
                           NuevoVehiculo.push(
                              {...vehiculos[i],
                                 propietarios,
                                
                              }
                              );
                        }
                  } 
               }
               console.log(NuevoVehiculo);
               setVehiculos(NuevoVehiculo);
            }}
            tim= {vehiculos}
            onAddProp={(newpropObj,empId ,propID)=>{  
               const NuevoProp = [];
               for(let i=0; i<vehiculos.length; i++){
                     if(vehiculos[i].id !== empId ){
                        NuevoProp.push(vehiculos[i]);
                       }

                     else{
                         NuevoProp.push(
                              {...vehiculos[i],
                                 propietarios :[...vehiculos[i].propietarios,newpropObj],
                                
                              }
                              );
                        }
                  
               }
               console.log(NuevoProp);
            }}
            />

      </div>  
    );
}

export default PrincipalPage;