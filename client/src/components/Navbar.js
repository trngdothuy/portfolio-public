import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const skills = ["html/css","javascript","react.js","node.js", "express","mongodb","react-native","git","ui/ux basics","python", "rust"];
  const [click, setClick] = React.useState(false);
  const [skillsClicked, setSkillsClicked] = React.useState(false);

  function hamburgerClicked (e) {
    if (click === false) {
        setClick(true)
        // console.log('hamburger pressed')
    } else {
        setClick(false)
        // console.log('hamburger closed')
    }
};

  function skillsNavClicked (e) {
    if (skillsClicked === false) {
      setSkillsClicked(true)
        console.log('skills nav bar pressed')
    } else {
      setSkillsClicked(false)
        console.log('skills nav bar closed')
    }
  };

  return (
    <div className="full-nav">
      <div className="nav-1">
        <div className="nav-box"> 
          <a href="/">trang-do-thuy</a>
        </div> 
      </div>
    <div className="nav-2">
      <div className="nav-box">
        <NavLink 
          to={"/"}
          style={ ({isActive}) => (
          isActive ? linkStyles.activeLink : linkStyles.defaultLink
        )}>
          _hello
        </NavLink>
      </div>
        
      <div class="nav-box">
        <NavLink
          to="/about-me"
          style={ ({isActive}) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
              )}>
        _about-me
        </NavLink>
      </div>
      
      <div class="nav-box">
        <NavLink
          to="/projects"
          style={ ({isActive}) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
              )}>
        _projects
        </NavLink>
      </div>
      </div>

      <div class="nav-3">
        <div class="nav-box">
          <NavLink
          to="/contact"
          style={ ({isActive}) => (
              isActive ? linkStyles.activeLink : linkStyles.defaultLink
              )}>
          _contact-me
          </NavLink>
        </div>
      </div>

      {/* <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div> */}

      <div className="nav-4">
        <div className="nav-box-1"> 
        {click ? (<button 
        className="side-bar-btn"
        onClick={hamburgerClicked}>x</button>) : (<button 
        className="side-bar-btn"
        onClick={hamburgerClicked}>=</button>)}
        

        {click && (<div className="hamburgerText">
          {/* <p class="navSeparator"><strong>Bootcamps ↓</strong></p> */}
          <a className="hamTextBox" href="/">_hello</a>
          <a className="hamTextBox" href="/about-me">_about-me</a>
          <button 
          className="side-bar-btn-nav"
          onClick={skillsNavClicked}>_skills</button>
          {skillsClicked && (<div className="skills-nav">
                        {skills.map((skill, i) => {
                            return <div className="skills-nav-extend" key={i}>&gt;  {skill}</div>
                        })}
                </div>)}
          <a className="hamTextBox" href="/projects">_projects</a>
          <a className="hamTextBox" href="/contact">_contact-me</a>
          {/* <a class="HamDD" href="/barcelona-code-school/javascript-full-stack-online-bootcamp/"><strong>JavaScript Full-Stack Online Mentored Bootcamp</strong></a><a class="HamDD" href="/ux-design-bootcamp-in-barcelona-code-school/"><strong>UX/UI Design in-person Bootcamp</strong></a><p class="navSeparator"><strong>In-person short courses ↓</strong></p><a class="HamDD" href="/responsive-web-design-with-css3/">Responsive web design / CSS3</a><a class="HamDD" href="/programming-with-javascript/">Programming with JavaScript</a><a class="HamDD" href="/reactjs-crash-course/">React.js Crash Course</a><a class="HamDD" href="/backend-development-with-node-express-mongodb/">Back-end development with Express</a> */}
          </div>)}

        
        </div> 
      </div>
    </div>
      );

      
}

export default Navbar;

const linkStyles = {
  defaultLink: {
    color: "#6272A4",
    textDecoration: "none",
  },
  activeLink: {
    // textDecoration: "pink underline",
    color: "#F8F8F2",
    // color: "#dd82b8",
    textShadow: "1px 3px #dd82b8",
    // fontSize: "bold",
  },
};


// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function OffcanvasExample() {
//   return (
//     <>
//       {[false, 'xxl'].map((expand) => (
//         <Navbar key={expand} bg="light" expand={expand} className="mb-3">
//           <Container fluid>
//             <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2">Link</Nav.Link>
//                   <NavDropdown
//                     title="Dropdown"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default OffcanvasExample;