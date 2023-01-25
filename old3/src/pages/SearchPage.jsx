import React from 'react'
 import AllCountries from'../components/AllCountries';
 import FavoriteCountries from'../components/FavoriteCountries';

export default function SearchPage() {
  return (<>
    {/* <h1>SearchPage</h1> */}
    
    <FavoriteCountries/>
    <AllCountries/>
    </>
  )
}
