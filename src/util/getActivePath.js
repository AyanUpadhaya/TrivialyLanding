const getActivePath = (value) => {
    if (
      value === "home" 
    ) {
      return "home";
    } else if (
      value === "documentation" 
    ) {
      return "documentation";
    }else if (
      value === "contact"
    ) {
      return "contact";
    } 
    else if (
      value === "pricing"
    ) {
      return "pricing";
    }
     else {
      return value;
    }
  };
  
  const getActiveRoutePath = (value) => {
    if (
      value === "service-category" ||
      value === "service-category-add" ||
      value === "service-category-edit"
    ) {
      return "service-category";
    } else if (
      value === "service-sub-category" ||
      value === "service-sub-category-add" ||
      value === "service-sub-category-edit"
    ) {
      return "service-sub-category";
    } else if (value === "withdraw-request" || value === "withdraw-edit") {
      return "withdraw-request";
    } else if (
      value === "withdraw-history" ||
      value === "withdraw-history-edit"
    ) {
      return "withdraw-history";
    } else {
      return value;
    }
  };
  
  export { getActivePath, getActiveRoutePath };
  