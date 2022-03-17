import React from 'react';
import '../nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotate , faGear , faAngleLeft ,faAngleRight} from '@fortawesome/free-solid-svg-icons';
function Navbar(){
    function changeColor(){
        document.getElementById("bG").style.backgroundColor="#BDB76B";
        document.getElementById("bG").style.color="white";
    }
    function resetColor(){
        document.getElementById("bG").style.backgroundColor="#E0E0E0";
        document.getElementById("bG").style.color="black";
    }
    function changeColor1(){
        document.getElementById("bG1").style.backgroundColor="#BDB76B";
        document.getElementById("bG1").style.color="white";
    }
    function resetColor1(){
        document.getElementById("bG1").style.backgroundColor="#E0E0E0";
        document.getElementById("bG1").style.color="black";
    }
    function changeColor2(){
        document.getElementById("bG2").style.backgroundColor="#BDB76B";
        document.getElementById("bG2").style.color="white";
    }
    function resetColor2(){
        document.getElementById("bG2").style.backgroundColor="#E0E0E0";
        document.getElementById("bG2").style.color="black";
    }
    function changeColor3(){
        document.getElementById("bG3").style.backgroundColor="#BDB76B";
        document.getElementById("bG3").style.color="white";
    }
    function resetColor3(){
        document.getElementById("bG3").style.backgroundColor="#E0E0E0";
        document.getElementById("bG3").style.color="black";
    }
    function changeColor4(){
        document.getElementById("bG4").style.backgroundColor="#BDB76B";
        document.getElementById("bG4").style.color="white";
    }
    function resetColor4(){
        document.getElementById("bG4").style.backgroundColor="#E0E0E0";
        document.getElementById("bG4").style.color="black";
    }
    function changeColor5(){
        document.getElementById("bG5").style.backgroundColor="#BDB76B";
        document.getElementById("bG5").style.color="white";
    }
    function resetColor5(){
        document.getElementById("bG5").style.backgroundColor="#E0E0E0";
        document.getElementById("bG5").style.color="black";
    }
    function changeColor6(){
        document.getElementById("bG6").style.backgroundColor="#BDB76B";
        document.getElementById("bG6").style.color="white";
    }
    function resetColor6(){
        document.getElementById("bG6").style.backgroundColor="#E0E0E0";
        document.getElementById("bG6").style.color="black";
    }
    function changeColor7(){
        document.getElementById("bG7").style.backgroundColor="#BDB76B";
        document.getElementById("bG7").style.color="white";
    }
    function resetColor7(){
        document.getElementById("bG7").style.backgroundColor="#E0E0E0";
        document.getElementById("bG7").style.color="black";
    }
    
return (
        <div>
            <nav className='navbar navbar-expand-lg' style={{display:'flex',justifyContent:'space-between',height:'30px',marginTop:'20px'}}>
             <div style={{boxSizing:'border-box'}}>
             <ul className='nav-container nav'>
                <div>
                 <li className='nav-item'>
                  <p style={{marginTop:'8px',fontWeight:'bold',fontFamily:'Roboto'}}>TICKETS</p>
                 </li>
                </div>
                <div>
                 <li className='nav-item'>
                   <button id='bG' onMouseOver={changeColor} onMouseLeave={resetColor} type='button' className='btn btn-info' style={{color:'black',backgroundColor:'rgba(220,220,220,0.4)'}}>ALL</button>
                 </li>
                </div>
                <div>
                 <li className='nav-item'>
                   <button 
                    id='bG1' onMouseOver={changeColor1} onMouseLeave={resetColor1}
                    type='button' 
                    className='btn btn-info' 
                    style={{color:'black',backgroundColor:'rgba(220,220,220,0.4)'}}>
                    ONLY MY TICKETS
                    </button>
                 </li>
                </div>
                <div>
                 <li className='nav-item'>
                   <button
                     id='bG2' onMouseOver={changeColor2} onMouseLeave={resetColor2}  
                     type='button'
                     className='btn btn-info' 
                     style={{color:'black',backgroundColor:'rgba(220,220,220,0.4)'}}>RECENTLY UPDATED</button>
                 </li>
                </div>
                <div>
                 <li className='nav-item'>
                   <button 
                     id='bG3' onMouseOver={changeColor3} onMouseLeave={resetColor3}
                     type='button'
                     className='btn btn-info'
                     style={{color:'black',backgroundColor:'rgba(220,220,220,0.4)'}}> <FontAwesomeIcon icon="fa-solid fa-filter" />
                     </button>
                 </li>
                </div>
                <div>
                 <li className='nav-item'>
                   <button 
                   id='bG4' onMouseOver={changeColor4} onMouseLeave={resetColor4}
                   type='button' 
                   className='btn btn-info' style={{color:'black',backgroundColor:'rgba(220,220,220,0.4)'}}><FontAwesomeIcon icon={faRotate} />
                   </button>
                
                 </li>
                </div>
             </ul>
             </div>
             {/*another portion of the navbar*/}
             <div style={{marginTop:'10px'}}>
             <ul className='nav-container nav'>
                <div>
                 <li className='nav-item'>
                 <div className="form-group has-search">
                      <input type="text" className="form-control" placeHolder="Search"/>
                   </div>
                 </li>
                </div>
                <div>
                 <li className='nav-item'>
                   <button id='bG5' onMouseOver={changeColor5} onMouseLeave={resetColor5} type='button' className='btn btn-info' style={{color:'black',backgroundColor:'rgba(220,220,220,0.4)'}}><FontAwesomeIcon icon={faGear}/>Configurations</button>
                 </li>
                </div>
                <div>
                 <li className='nav-item'>
                   <p style={{marginTop:'8px',fontWeight:'bold',fontFamily:'Roboto'}}>(0-30)</p>
                 </li>
                </div>
                <div>
                 <li className='nav-item'>
                   <button id='bG6' onMouseOver={changeColor6} onMouseLeave={resetColor6} type='button' className='btn btn-info' style={{color:'black',backgroundColor:'rgba(220,220,220,0.4)'}}><FontAwesomeIcon icon={faAngleLeft} /></button>
                 </li>
                </div>
                <div>
                 <li className='nav-item'>
                   <button id='bG7' onMouseOver={changeColor7} onMouseLeave={resetColor7} type='button' className='btn btn-info' style={{color:'black',backgroundColor:'rgba(220,220,220,0.4)'}}> <FontAwesomeIcon icon={faAngleRight} /></button>
                 </li>
                </div>
             </ul>
             </div>
            </nav>
        </div>
    )
}

export default Navbar;