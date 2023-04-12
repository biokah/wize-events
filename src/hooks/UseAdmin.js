import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { DEFAULT_EVENT } from "../utils/deafults";

const apiBaseUrl = `${import.meta.env.VITE_API_BASE_URL}`;

const useAdmin = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  // const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState(null);
  const [owned, setOwned] = useState([]);
  const eventId = DEFAULT_EVENT;

  useEffect(() => {
    const getOwnedEvents = async () => {
      const token = await getAccessTokenSilently();
      const profileApiUrl = `${apiBaseUrl}/events/owned`;
      const response = await fetch(profileApiUrl, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const jsonData = await response.json();

      if (jsonData.statusCode >= 400) {
        setError(jsonData);
      } else {
        setOwned(jsonData);
      }
    };
    getOwnedEvents();
  }, []);

  const isAdmin = () => {
    const isAdmin = owned.map((event) => event._id).includes(eventId);
    return isAdmin;
  }
  return { isAdmin, error };
};

export default useAdmin;
