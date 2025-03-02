import React, { useEffect, useState } from 'react'
import AddVechile from '../../../pages/admin/AddVechile'
import vehicles from '../../../../services/vehicle.service'
import { useParams } from 'react-router-dom'


function EditVehicleInfo() {
    const{vehicle_id}=useParams()
    const [vehicleData,setVehicleData]=useState(null)
    useEffect(()=>{

        const vehicle=vehicles.singleVehicle(vehicle_id)
        vehicle.then((data)=>{
            setVehicleData(data.data[0])
            
        })
    },[vehicle_id])


  return (
    <div>
      <AddVechile existingVehicle ={vehicleData}/>
    </div>
  );
}

export default EditVehicleInfo