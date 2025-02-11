import React from 'react'
import AdminMenu from '../../../components/Admin/AdminMenu/AdminMenu';
import AdminPage from '../../../components/Admin/AdminPage/AdminPage';

function Admin() {
  return (
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-3 admin-left-side">
          <AdminMenu />
        </div>
        <div className="col-md-9 admin-right-side">
          <AdminPage/>
        </div>
      </div>
    </div>
  );
}

export default Admin