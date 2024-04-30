let BASE_URL;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:8080";
} else {
  BASE_URL = "https://mern-ecommerce-backend-b3gk.onrender.com";
}

export default BASE_URL;
