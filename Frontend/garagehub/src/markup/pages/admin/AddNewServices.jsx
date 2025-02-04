import React from 'react'
import NewServices from '../../components/Admin/AddServices/NewServices';
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';
function AddNewServices() {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <NewServices/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewServices