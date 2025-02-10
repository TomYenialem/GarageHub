import React, { useEffect, useState } from 'react'
import orders from '../../../../services/order.service'
import { Table, Button, Modal } from "react-bootstrap";

function GetSingleOrder({customer_id}) {
    const[orderData,setOrder]=useState([])
 
    const fetchSingleOrder=()=>{
        try {
            const response =  orders.singleOrder(customer_id)
            response.then((data)=>{
                if(data.error){
                    console.log(data.error)
                }
                setOrder(data)
            })
            
        } catch (error) {
            
        }
    }
    useEffect(()=>{
fetchSingleOrder()
    },[])
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Vehicle</th>
            <th>Order Date</th>
            <th>Received By</th>
            <th>Order Status</th>
           
          </tr>
        </thead>
        <tbody>
          {orderData.length > 0 ? (
            orderData.map((order, index) => (
              <tr key={index}>
                <td>{order.order_id}</td>

                {/* Customer Info in One Cell */}
                <td>
                  <strong>
                    {order.customer_first_name} {order.customer_last_name}
                  </strong>
                  <br />
                  📧 {order.customer_email}
                  <br />
                  📞 {order.customer_phone_number}
                </td>

                {/* Vehicle Info in One Cell */}
                <td>
                  {order.vehicle_type} <br />({order.vehicle_year}
                  <br />
                  {order.vehicle_mileage})
                </td>

                <td>
                  {format(new Date(order.order_date), "MM-dd-yyyy | HH:mm")}
                </td>

                <td>
                  {order.employee_first_name} {order.employee_last_name}
                </td>

                <td>
                  {order.order_status === 0 ? (
                    <span className="bg-warning rounded text-white px-3">
                      Received
                    </span>
                  ) : order.order_status === 1 ? (
                    <span className="bg-primary rounded text-white px-3">
                      In Progress
                    </span>
                  ) : (
                    order.order_status === 2 && (
                      <span className="bg-success rounded text-white px-3">
                        Completed
                      </span>
                    )
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">
                <h4 className="text-center mt-4">No Orders Found!</h4>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default GetSingleOrder