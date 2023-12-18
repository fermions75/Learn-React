import React from 'react'
import ReactDOM from 'react-dom/client'
import Apps from './App.jsx'
import Cards from './Components/Cards.jsx'



function NewLineComponent(){
  return <h1> This is a new line component </h1>
}
let cnt = 1
ReactDOM.createRoot(document.getElementById('root')).render(

  <> 
  
  <Cards cardTitle="Jira 1" cardDesc="Story description here"/>
  <Cards cardTitle="Jira 2" cardDesc="Story description here"/>
  
  </>
  

  

  
)
