import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"



const App = () => {


  const [progress, setProgress] = useState(0)

  

  const apiKey = process.env.REACT_APP_API_KEY

  // setProgress(progress)
  // setProgress = (progress) => {
  //   setState({progress: progress})
  // }

    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>

            <Route exact path='/' element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={15} country={'us'} category='general' />} />
            <Route exact path='/general' element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={15} country={'us'} category='general' />} />
            <Route exact path='/business' element={<News setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={15} country={'us'} category='business' />} />
            <Route exact path='/health' element={<News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={15} country={'us'} category='health' />} />
            <Route exact path='/sports' element={<News setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={15} country={'us'} category='sports' />} />
            <Route exact path='/entertainment' element={<News setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={15} country={'us'} category='entertainment' />} />
            <Route exact path='/science' element={<News setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={15} country={'us'} category='science' />} />
            <Route exact path='/technology' element={<News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={15} country={'us'} category='technology' />} />
          </Routes>
        </Router>
      </>
    )
}

export default App