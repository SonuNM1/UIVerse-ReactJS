import React from 'react'
import { useRouteError } from 'react-router-dom'

const RouteError = () => {

    const error = useRouteError() ; 

  return (
    <div style={{textAlign: 'center', color: 'red', padding: '2rem'}} >
      <h1>Ooops! Page Not Found</h1>
      <p>{error.statusText || error.message}</p>
      <p>Status Code: {error.status || 404}</p>
    </div>
  )
}

export default RouteError
