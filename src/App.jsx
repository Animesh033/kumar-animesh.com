import { useState } from 'react'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { ErrorBoundary } from 'react-error-boundary'

import BackToTop from './components/BackToTop'
import Home from './components/Home'
import MyApp from './components/MyApp'
// import Home2 from './components/Home2'
import Spinner from './components/Spinner'

import { Suspense, useEffect } from 'react'
import NotFound from './components/NotFound';
import Home3 from './components/Home3'

function App() {



  useEffect(() => {

    // console.log(githubUserName, commitsOnMySite, totalBranches, totalRepos)
    loadMainJs();
  }, [])



  const loadMainJs = async () => {
    await import('./assets/js/main')
  }

  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <MyApp> */}
        <Home />
        {/* </MyApp> */}
        {/* <Home3 /> */}
      </Suspense>
    </>
  )
}

const Loading = () => {
  return <h2>🌀 Loading...</h2>;
}


export default App
