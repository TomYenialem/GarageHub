const api_url = import.meta.env.VITE_API_URL;
const sendOrderInfo = async (orderData) => {
  try {
    const response = await fetch(`${api_url}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error sending order info:", error);
    return null;
  }
};
const getAllOrders = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(`${api_url}/api/getorders`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};
const editOrders = async (order_id, orders) => {
  try {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orders),
    };
    const response = await fetch(
      `${api_url}/api/editorders/${order_id}`,
      options
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
const singleOrder = async (order_id) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${api_url}/api/singleorder/${order_id}`,
      options
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
const singleCustomersOrder = async (customer_id) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(
      `${api_url}/api/singleorder_per_customer/${customer_id}`,
      options
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
const orders = {
  sendOrderInfo,
  getAllOrders,
  editOrders,
  singleOrder,
  singleCustomersOrder,
};

export default orders;
