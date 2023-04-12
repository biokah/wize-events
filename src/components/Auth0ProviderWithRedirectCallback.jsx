import { Navigate, useNavigate } from "react-router-dom";
import AccessDenied from "../pages/AccessDenied"
import { Auth0Provider } from "@auth0/auth0-react";


const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  if (currentUrl.includes('error')){


    return <AccessDenied />
  }
  const onRedirectCallback = (appState) => {
    const currentUrl = window.location.href;
    if (currentUrl.includes('error')){
      navigate("/login");
    }
    else {
      navigate((appState && appState.returnTo) || window.location.pathname);
    }
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithRedirectCallback;