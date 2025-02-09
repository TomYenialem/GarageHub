const api_url = import.meta.env.VITE_API_URL;
const sendOrderInfo=async(orderData)=>{

    try {
        const response = await fetch(`${api_url}/api/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error sending order info:', error);
        return null;
    }
}

const orders={
    sendOrderInfo
}

export default orders;