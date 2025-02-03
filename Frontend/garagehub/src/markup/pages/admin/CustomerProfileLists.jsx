import React from 'react'
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';
import CustomerProfile from '../../components/Admin/CustomerProfile/CustomerProfile';

function CustomerProfileLists() {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <CustomerProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfileLists