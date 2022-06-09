import React from "react";
import ReactDOM from "react-dom";

// si declaramos una función llamada `MyFunction`
const MyFunction = () => {
    return <h1>I Love React</h1>;
}

// podemos llamar la función como una etiqueta HTML así 
<MyFunction />

// en vez de hacerlo de la típica forma usando llaves
MyFunction();
ReactDOM.render(PrintHello(), document.querySelector("#myDiv"));
