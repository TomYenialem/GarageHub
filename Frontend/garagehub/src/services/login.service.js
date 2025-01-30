const API = import.meta.env.VITE_API_URL;
const login = async (formData) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${API}/login`, options);
  return response;
};
const loginService = {
  login,
};
export default loginService;
