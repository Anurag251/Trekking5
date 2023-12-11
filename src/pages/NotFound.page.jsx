import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectHome = setTimeout(() => {
      navigate("/");
    }, 3000); // Redirect after 3 seconds (adjust this value as needed)

    return () => clearTimeout(redirectHome);
  }, [navigate]);

  return <div>Page not found. Redirecting to the home page...</div>;
};

export default NotFound;
