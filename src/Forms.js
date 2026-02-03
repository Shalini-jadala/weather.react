
import axios from "axios";
import Lists from "./Lists";

export default function Forms(){


  

return (
  
    <form id="search-form">
      <input
        type="search"
        placeholder="Enter a city.."
        required
        className="longbutton"
        id="enter-input"
      />
      <input type="submit" value="Search" className="button" />
    </form>
  
  )
    }