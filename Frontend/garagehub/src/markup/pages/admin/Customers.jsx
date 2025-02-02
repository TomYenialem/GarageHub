import React from 'react'
import AdminForm from '../../components/Admin/AdminMenu/AdminMenu'
import AddCustomer from '../../components/Admin/AddCustomer/AddCustomer';

function Customers() {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminForm />
          </div>
          <div className="col-md-9 admin-right-side">
          <AddCustomer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers