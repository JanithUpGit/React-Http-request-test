

import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvalablePlace } from '../http.js'


export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [AvailablePlaces, setAvalablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {

        const places = await fetchAvalablePlace();

        // navigator.geolocation.getCurrentPosition((position) => {
        // });
        const sortedPlaces = sortPlacesByDistance(
          places,
          44.5588,
          -80.344
        );
        setAvalablePlaces(sortedPlaces);
        setIsFetching(false);

      } catch (error) {
        setError({
          message: error.massage || 'Could not fetch places , please try again later.',
        });

        setIsFetching(false);
      }


    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occured!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={AvailablePlaces}
      isLoading={isFetching}
      loadingText="fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
