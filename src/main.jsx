import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstApp from './FirstApp'
import './styles.css'

// import HelloWorld from './HelloWorld'

let objecto = {
  name: "ismael"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp name="Esto es una property" subTitle={123} />
  </React.StrictMode>
)

console.log(objecto)