import React from 'react'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';
import EditCustomersInfo from '../../components/Admin/EditCustomerInfo/EditCustomersInfo';

function EditCustomer() {

  return (
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-3 admin-left-side">
          <AdminMenu />
        </div>
        <div className="col-md-9 admin-right-side">
         <EditCustomersInfo/>
        </div>
      </div>
    </div>
  );
}

export default EditCustomer