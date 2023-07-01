
import './App.css';
    function Header(){
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
function Body(){
  return(<div className="main">
                <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
                <li>
                  honestly i am just hungry for the chance to make something of myself
                </li>
            </ol></div>
  )
}

function Footer(){
  return(
     <footer className ="footer">
                <small>© 2023 Joshua Lamptey Development. All rights reserved.</small>
            </footer>
  )
}

function Page(){
  return(
    <body>
      <Header />
         <Body />
           <Footer />
    </body>
  )
}

export default Page;
