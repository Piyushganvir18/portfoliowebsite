import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

 export default function Skills() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
     <p className='skillsoverlay'> 1.Languages : Python, HTML, CSS, Javascript</p>
    < p  className='skillsoverlay'> 2.FrameWorks : Express.js, React.js </p>
     <p  className='skillsoverlay'> 3.Data Stores :  MongoDB</p>
    </Tooltip>
  );
  const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
   <p  className='skillsoverlay'> School: B.S.P. Senior Secondary School Sector-10 Bhilai </p>
    <p  className='skillsoverlay' >College: National Institute of Technology Raipur </p>

    </Tooltip>
  );
  const renderTooltip2 = (props) =>(
    <Tooltip id="button-tooltip" {...props}>
      <p  className='skillsoverlay'>1. Instagram Chat Bot using Python</p>
      {/* <p className='skillsoverlay'>2. A basic Dance website with contact form</p> */}
    </Tooltip>
  
  );

  return (
    <>
    <h1 className="skillhead">SKILLS</h1>
    <div className="container" id="skill" >
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Button variant="success"  className="techstack" id="box1">TECHNICAL STACK</Button>
    </OverlayTrigger>
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip1}
    >
      <Button variant="success" className="education" id="box2">EDUCATION</Button>
    </OverlayTrigger>
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip2}
    >
      <Button variant="success"  className="projects" id="box3">PROJECTS</Button>
    </OverlayTrigger>
  </div>
  </>
  );
}










// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// require("react-bootstrap/ModalHeader")

// export default function Skills() {
//   var [show, setShow] = useState(false);

//   var handleClose = () => setShow(false);
//   var handleShow = () => setShow(true);

//   return (
//     <>
//       <h1 className="skillhead">SKILLS</h1>
//       <div className="container" >
//         <Button className="techstack" id="box1" variant="primary" onClick={handleShow}>
//           TECHNOLOGY STACK
//         </Button>
//         <Modal show={show} onHide={handleClose} animation={false}>
//           <Modal.Header closeButton>
//             <Modal.Title>TECHNICAL STACK</Modal.Title>
//           </Modal.Header>
//           <Modal.Body> 1.Languages : Python,HTML,CSS,Javascript \n 2.FrameWorks : Express.js,React.js \n 3.Data Stores : MySQL,MongoDB</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>

//         <Button className="education" id="box2" variant="primary" onClick={handleShow}>
//           EDUCATION
//         </Button>

//         <Modal show={show} onHide={handleClose} animation={false}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>

//         <Button className="projects" id="box3" variant="primary" onClick={handleShow}>
//           PROJECTS
//         </Button>
//         <Modal show={show} onHide={handleClose} animation={false}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
// }



// return (
//   <div>
//     <h1 className="skillhead">SKILLS</h1>
//     <div className="container" >
//       <button className="techstack" id="box1" onClick={closeModal} >TECHNOLOGY STACK</button>
//       <button className="education" id="box2" onClick={closeModal} >EDUCATION</button>
//       <button className="projects" id="box3" onClick={closeModal} >PROJECTS</button>
//     </div>
//   </div>
// )