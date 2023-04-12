import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}`;

export default function useAdminMatchesApi({ eventId }) {
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);
  const { getAccessTokenSilently } = useAuth0();
  const url = `${API_BASE_URL}/events/${eventId}/admin`;

  const callApi = async () => {
    const token = await getAccessTokenSilently();
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const responseData = await response.json();
      if (responseData.statusCode === 403) {
        setError(responseData);
      } else {
        setMatches(responseData.matches);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    callApi();
  }, [url]);

  // const updateMatchWinner  = (matchId, newWinner) => {
  //   const updatedMatches  = matches.map((match) => {
  //     const isMatch = match._id == matchId;
  //     return isMatch ? {...match, winner: newWinner} : match;
  //   })
  //   setTimeout(() => {
  //     setMatches(updatedMatches);
  //   }, 1000)
  // }

  const setMatchWinner = async (matchId, contenderId) => {
    try {
      const url = `${API_BASE_URL}/matches/${matchId}/result`;
      const token = await getAccessTokenSilently();
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      };
      const body = {
        contenderId: contenderId
      };
      const requestOptions = {
        method: "POST",
        headers,
        body: JSON.stringify(body)
      };
      const response = await fetch(url, requestOptions);
      const jsonData = await response.json();
      if (jsonData.statusCode >= 400) {
        throw new Error(jsonData);
      }

      callApi();
      // updateMatchWinner(matchId, contenderId);
    } catch (err) {
      setError(err);
    }
  };

  const cancelResult = async (matchId) => {
    try {
      const url = `${API_BASE_URL}/matches/${matchId}/result/reset`;
      const token = await getAccessTokenSilently();
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      };
      const requestOptions = {
        method: "POST",
        headers
      };
      const response = await fetch(url, requestOptions);
      const jsonData = await response.json();
      if (jsonData.statusCode >= 400) {
        throw new Error(jsonData);
      }
      callApi();
      // updateMatchWinner(matchId, contenderId);
    } catch (err) {
      setError(err);
    }
  };

  return { matches, error, cancelResult, setMatchWinner };
}
