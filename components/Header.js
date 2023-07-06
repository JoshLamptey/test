import react from "react-dom"
export default    function Header(){
    return(
     <header>
              <nav className="nav">
                                       <img src="./logo192.png" alt="react" className ="logo"/>
                                       <ul className ="Nav-items">
                                        <li>Pricing</li>
                                        <li>Contacts</li>
                                        <li>Blog</li>
                                       </ul>
                                        </nav>
              
          </header>
  )
}