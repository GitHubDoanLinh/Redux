const initialStateCustomer = {
    fullName: "",
    nationalId: "",
    createAt: "",
  };
  
  export default function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
      case "customer/createCustomer":
        return {
          ...state,
          fullName: action.payload.fullName,
          nationalId: action.payload.nationalId,
          createAt: action.payload.createAt,
        };
      case "customer/customerUpdatename":
        return {
          ...state,
          fullName: action.payload.fullName,
        };
      default:
        return state;
    }
  }
  
  
  
  export function createCustomer(fullName, nationalId) {
    return {
      type: "customer/createCustomer",
      payload: { fullName, nationalId, createAt: new Date().toISOString() },
    };
  }
  
  export function updateName(fullName) {
    return {
      type: "account/updateName",
      payload: fullName,
    };
  }