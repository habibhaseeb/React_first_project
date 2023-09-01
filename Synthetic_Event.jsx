import React from 'react'
function my_button(){
    const handleClick = ( event ) =>{ 
        event.preventDefault();
        alert("Button is clicked!") 
  }
  return (
    <button onClick={handleClick}>Click me</button>
   );   
}
export default my_button;