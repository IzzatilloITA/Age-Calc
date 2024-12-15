import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Helmet} from 'react-helmet';
import AgeCalculator from './App.jsx'
import DateDifferenceApp from './Monent.jsx'
import Ilogo from './imgs/Group-16.png'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AgeCalculator />
    <Helmet>
        <title>ZIM's AgeCalc</title>
        <link rel="icon" href={Ilogo} type="image/png" />
        <meta name="description" content="ZIM Калькулятор возраста" />
        <meta name="keywords" content="React, Html, разработка, сайт, Css, Калькулятор возраста" />
      </Helmet>
    {/* <DateDifferenceApp/> */}
  </StrictMode>,
)
