import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './main/Calculator'

const app = () => (
  <Fragment>
    <h1>Calculator</h1>
    <App />
  </Fragment>
)

ReactDOM.render(app(), document.getElementById('root'))