
import React from 'react'

import {withFavoriteNumber} from "./componenet/withFavoriteNumber"

function App(props) {
    return (
        <div style={{textAlign:'center'}}>
          
         <h2>In Douglas Adams' The Hitchhiker's Guide to the Galaxy,</h2> 
          
        <p> <b> {props.favoriteNumber} </b>is the number from which all meaning of life, the universe, and everything could be derived.</p>  
        </div>
    )
}

export default withFavoriteNumber(App)
