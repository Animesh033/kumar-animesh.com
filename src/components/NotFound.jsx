import React from 'react'
import { useRouteError } from "react-router-dom";
import MyApp from './MyApp'

function NotFound() {

  const error = useRouteError();
  console.error(error);

  return (
    <>
        <MyApp>
            <div id="error-page" className='text-center '>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </MyApp>
    </>
  )
}

export default NotFound