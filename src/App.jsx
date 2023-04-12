// Authprovider

import Auth0ProviderWithRedirectCallback from "./components/Auth0ProviderWithRedirectCallback"
import ProtectedRoute from "./components/ProtectedRoute"

// Layouts
import Root from "./layouts/Root"

// Pages
import Home from "./pages/Home"
import Ranking from "./pages/Ranking"
import Rules from "./pages/Rules"
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Error from "./pages/Error"

// Styles
import './App.css';

// Router library
import { Route, BrowserRouter, Routes} from 'react-router-dom';


const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID



function App() {

  return (
    <div className="w-full h-full">
    <BrowserRouter>
      <Auth0ProviderWithRedirectCallback
      domain={domain}
      clientId={clientId}
      authorizationParams={
        {
          redirect_uri: window.location.origin,
          audience: `${import.meta.env.VITE__AUTH0_AUDIENCE}`,
          scope: 'openid profile email'
        }
      }
      >
        <Routes>
          <Route path="/" element={<ProtectedRoute component={Root} />}>
            <Route index element={<Home />} />
            <Route path="admin" element={<Admin />} />
            <Route path="ranking" element={<Ranking />} />
            <Route path="rules" element={<Rules />} />
            <Route path="admin" element={<Admin />} />
            <Route path="*" element={<Error />} />
          
          </Route>
          <Route path="login" element={<Login />}></Route>
          
        </Routes>
      </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>
    </div>
  );
}

export default App;
