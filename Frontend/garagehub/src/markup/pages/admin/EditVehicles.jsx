import React from 'react'
import EditCustomersInfo from '../../components/Admin/EditCustomerInfo/EditCustomersInfo';
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';
import EditEmployeeInfo from '../../components/Admin/EditEmployeeInfo/EditEmployeeInfo';
import EditVehicleInfo from '../../components/Admin/EditVehicleInfo/EditVehicleInfo';

function EditVehicles() {
  return (
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-3 admin-left-side">
          <AdminMenu />
        </div>
        <div className="col-md-9 admin-right-side">
        <EditVehicleInfo/>
        </div>
      </div>
    </div>
  );
}

export default EditVehicles