import React from 'react'
import AllCustomersList from '../../components/Admin/CustomerList/AllCustomersList';

import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu';

function CustomersList() {
  return (
    <div>
      <div>
        <div className="container-fluid admin-pages">
          <div className="row">
            <div className="col-md-3 admin-left-side">
             <AdminMenu/>
            </div>
            <div className="col-md-9 admin-right-side">
           <AllCustomersList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersList