import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => navigate("/home"), []);
  return <div></div>;
};

export default Redirect;
