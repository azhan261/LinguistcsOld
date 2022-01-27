import React from "react";
  
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
  
function TestingTest() {
    let { id } = useParams();
    console.log(id)
    return (
        <div>
            Fuck!!!!
        </div>
    )
}

export default TestingTest
