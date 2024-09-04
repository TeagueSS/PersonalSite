import Image from "next/image";
import NavBar from "./navbar";
import Profile from "./profile";
import About from "./about";
import Head from "next/head";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
export default function Home() {
  return (
    <main>
    
    
      
      <body>

<html lang="en">
<Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Portfolio</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="mediaqueries.css" />
      </Head>
  <body>
  <NavBar>

  </NavBar>
   
  <section id="profile">
      <Profile> 
      </Profile>
    </section>

    <section id="about">
      <About> 
      </About>
    </section>

    <section id="experience">
      <Experience>
      </Experience>
    </section>

    <section id="projects">
      <Projects>
      </Projects>
    </section>

    <section id="contact">
      <Contact>
      </Contact>      
    </section>

    
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 John Doe. All Rights Reserved.</p>
    </footer>
    <script src="script.js"></script>
  </body>
</html>


      </body>
    
      
      
    </main>
  );
}
