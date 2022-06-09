import React from "react"; //Main React.js library

import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const PrintHello = () => {
    return <h1>Hello World</h1>;
}


//              what           where
ReactDOM.render(PrintHello(), document.querySelector("#myDiv"));
