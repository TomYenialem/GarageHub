import React, { useState } from 'react'

function AdditionalServices() {
    const[sericeDescrbition,setServcieDescribition]=useState('')
    const[price,setPrice]=useState('')
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="col-md-10">
          <div className="contact-title">
            <h4>Services We Provide</h4>
          </div>
        </div>

        {/* Add or Edit Service Form */}
        <div className="service-box col-md-10 mt-5">
          <div className="contact-title">
            <h2>Addtional Request</h2>
          </div>
          <div className="row clearfix">
            <div className="form-column col-lg-10">
              <div className="inner-column">
                <div className="contact-form">
                  <form>
                    {/* {serverError && (
                      <div
                        className="validation-error text-danger"
                        role="alert"
                      >
                        {serverError}
                      </div>
                    )} */}
                    <div className="row clearfix">
                      <div className="form-group col-md-10">
                        <textarea
                          type="text"
                          required
                          name="service_description"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          placeholder="Service Description"
                          className="form-control"
                          rows="3"
                        />
                      </div>
                      <div className="form-group col-md-10">
                        <input
                          type="text"
                          required
                          name="ServiceName"
                          value={sericeDescrbition}
                          onChange={(e) =>
                            setServcieDescribition(e.target.value)
                          }
                          placeholder="price"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <button
                          className="theme-btn btn-style-one"
                          type="submit"
                        >Submit Order</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdditionalServices