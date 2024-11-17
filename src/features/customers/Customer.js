import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer);
  console.log(customer);
  return <h2>👋 Welcome, {customer?.fullName || "Guest"}</h2>;
}

export default Customer;
