import React from 'react'
import { Link } from 'react-router-dom';

function AdminPage() {
  return (
    <section className="services-section">
      <div className="auto-container">
        <div className="sec-title style-two admin_title">
          <h2>Admin Dashbord</h2>
          <div className="text">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution.
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service and Repairs</h5>
              <h2>All Orders</h2>
              <Link to={"/admin/all_orders"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-power"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service and Repairs</h5>
              <h2>New Orders</h2>
              <Link to={"/admin/orders"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-gearbox"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service and Employees</h5>
              <h2>Employees</h2>
              <Link to={"/admin/employees"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-brake-disc"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service and Employees</h5>
              <h2>Add Employyes</h2>
              <Link to={"/admin/add-employee"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-tire"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service and Customers</h5>
              <h2>All Customers</h2>
              <Link to={"/admin/all_customers"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-spray-gun"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4  service-block-one">
            <div className="inner-box hvr-float-shadow">
              <h5>Service and Customers</h5>
              <h2>Add Customers</h2>
              <Link to={"/admin/add_customers"} className="read-more">
                read more +
              </Link>
              <div className="icon">
                <span className="flaticon-spray-gun"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminPage