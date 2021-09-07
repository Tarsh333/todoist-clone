import reactDom from "react-dom";
import React from "react";
import App from './App'
import './index.css'
import {Context} from './Context'
reactDom.render(<Context><App/></Context>,document.getElementById('root'))