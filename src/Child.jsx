// Child component
import React from "react";
function Child({ onRender }) {
    // This component logs when it renders
    console.log('Child renders');
    return <div>Child Component</div>;
}
export default Child;//memo is giving errors