const api_url = import.meta.env.VITE_API_URL;
const addCustomers = async (formData) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${api_url}/api/customers`, options);
  return response;
};
const getCustomer = async () => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${api_url}/api/get_customers`, options);
  return response;
};
const singleCustomer = async (id) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${api_url}/api/customers/${id}`, options);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Failed to update customer");
  }
  return response;
};
const editCustomerInfo = async (id, data) => {
  try {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(`${api_url}/api/customers/${id}`, options);

    return response.json();
  } catch (error) {}
};
const customers = {
  addCustomers,
  getCustomer,
  singleCustomer,
  editCustomerInfo,
};

export default customers;
