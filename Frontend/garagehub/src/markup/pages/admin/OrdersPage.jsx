import React from 'react'
import Orders from '../../components/Admin/Orders/Orders';
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';

function OrdersPage() {
  return (
    <div>
      <div className="container-fluid admin-pages">
        <div className="row">
          <div className="col-md-3 admin-left-side">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-right-side">
            <Orders />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage