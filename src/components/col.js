import React from "react";
import './colstyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser} from '@fortawesome/free-solid-svg-icons';
import './move.js';
function Col(){	
    return(
        <div>
            <div className="conatiner">
               <div className="row" style={{justifyContent:'space-evenly',marginTop:'20px'}}>
               <div className="child" id="findlength">
                    <h6>RECEIVED ORDERS (19)</h6>
                   <div className="card" id="elementone1"  draggable="true">
                       <div className="crad-body">
                       <div className="card-text">
                           <div id="storelength">#1</div>
                           <div><span style={{border:'1px solid blue',backgroundColor:'skyblue',color:'darkblue',borderRadius:'3px'}}>Response Due</span></div>
                       </div>
                        <div style={{padding:'5px',marginTop:'-10px'}}>
                           <span style={{fontWeight:'bold'}}>Order number #45</span>
                           <h6 style={{color:'rgba(0,0,0,0.6)',fontFamily:'Robota'}}>Paratha side dish,Butter masala,Podi Ghee dosa,Butter roti (6 Nos)</h6>
                       <div className="footer">
                          <div>   
                           <span  style={{fontFamily:'Robota'}}>Due:</span>May31, 2022 3:30 PM
                          </div>
                          <div>
                              <span style={{fontFamily:'Robota'}}>ASSIGNED TO <FontAwesomeIcon icon={faCircleUser}/></span>
                          </div>
                       </div>
                        </div>
                       </div>
                   </div>
                   <div className="card" id="elementone"  draggable="true">
                       <div className="crad-body">
                       <div className="card-text">
                           <div>#2</div>
                           <div><span style={{border:'1px solid blue',backgroundColor:'skyblue',color:'darkblue',borderRadius:'3px'}}>Response Due</span></div>
                       </div>
                        <div style={{padding:'5px',marginTop:'-10px'}}>
                           <span style={{fontWeight:'bold'}}>Order number #7</span>
                           <h6 style={{color:'rgba(0,0,0,0.6)',fontFamily:'Robota'}}>3 Pulka, 2chicken Gravy, 2 Barrota,5 ice creams, Paratha Side Dish(2 Nos).Plain Dosa</h6>
                       <div className="footer">
                          <div>   
                           <span  style={{fontFamily:'Robota'}}>Due:</span>March 1, 2022 3:00 PM
                          </div>
                          <div>
                              <span style={{fontFamily:'Robota'}}>ASSIGNED TO <FontAwesomeIcon icon={faCircleUser}/></span>
                          </div>
                       </div>
                        </div>
                       </div>
                   </div>
                   <div className="card" id="elementone"  draggable="true">
                       <div className="crad-body">
                       <div className="card-text">
                           <div>#3</div>
                           <div><span style={{border:'1px solid blue',backgroundColor:'skyblue',color:'darkblue',borderRadius:'3px'}}>Response Due</span></div>
                       </div>
                        <div style={{padding:'5px',marginTop:'-10px'}}>
                           <span style={{fontWeight:'bold'}}>Order number #21</span>
                           <h6 style={{color:'rgba(0,0,0,0.6)',fontFamily:'Robota'}}>1 Dosa, 2 Set poori, 3 Phulka,1 White Egg, 3 Phulka,2 chicken Gravy, 2 Barrota</h6>
                       <div className="footer">
                          <div>   
                           <span  style={{fontFamily:'Robota'}}>Due:</span>july 20, 2022 7:14 AM
                          </div>
                          <div>
                              <span style={{fontFamily:'Robota'}}>ASSIGNED TO <FontAwesomeIcon icon={faCircleUser}/></span>
                          </div>
                       </div>
                        </div>
                       </div>
                   </div>
                   <div className="card" id="elementone"  draggable="true">
                       <div className="crad-body">
                       <div className="card-text">
                           <div>#4</div>
                           <div><span style={{border:'1px solid blue',backgroundColor:'skyblue',color:'darkblue',borderRadius:'3px'}}>Response Due</span></div>
                       </div>
                        <div style={{padding:'5px',marginTop:'-10px'}}>
                           <span style={{fontWeight:'bold'}}>Order number #69</span>
                           <h6 style={{color:'rgba(0,0,0,0.6)',fontFamily:'Robota'}}>Chicken Biryani, Nan rotti , Butter Masala, Side dish ,Vennila Cake</h6>
                       <div className="footer">
                          <div>   
                           <span  style={{fontFamily:'Robota'}}>Due:</span>May 3, 2022 11:00 AM
                          </div>
                          <div>
                              <span style={{fontFamily:'Robota'}}>ASSIGNED TO <FontAwesomeIcon icon={faCircleUser}/></span>
                          </div>
                       </div>
                        </div>
                       </div>
                   </div>
                   <div className="card" id="elementone"  draggable="true">
                       <div className="crad-body">
                       <div className="card-text">
                           <div>#5</div>
                           <div><span style={{border:'1px solid blue',backgroundColor:'skyblue',color:'darkblue',borderRadius:'3px'}}>Response Due</span></div>
                       </div>
                        <div style={{padding:'5px',marginTop:'-10px'}}>
                           <span style={{fontWeight:'bold'}}>Order number #22</span>
                           <h6 style={{color:'rgba(0,0,0,0.6)',fontFamily:'Robota'}}>Ghee Dosa , Poori 2 Set, Barrota, Mutton Gravy, Ice water ,White egg</h6>
                       <div className="footer">
                          <div>   
                           <span  style={{fontFamily:'Robota'}}>Due:</span>April 6, 2022 4:30 PM
                          </div>
                          <div>
                              <span style={{fontFamily:'Robota'}}>ASSIGNED TO <FontAwesomeIcon icon={faCircleUser}/></span>
                          </div>
                       </div>
                        </div>
                       </div>
                   </div>
               </div>
               <div className="child">
                  <div>
                  <h6>ORDER IN PROGRESS (1)</h6>
                  <div className="card" id="elementone"  draggable="true">
                       <div className="crad-body">
                       <div className="card-text">
                           <div>#6</div>
                           <div><span style={{border:'1px solid blue',backgroundColor:'skyblue',color:'darkblue',borderRadius:'3px'}}>Response Due</span></div>
                       </div>
                        <div style={{padding:'5px',marginTop:'-10px'}}>
                           <span style={{fontWeight:'bold'}}>Order number #43</span>
                           <h6 style={{color:'rgba(0,0,0,0.6)',fontFamily:'Robota'}}>Paratha side dish,Butter masala,Podi Ghee dosa,Butter roti (6 Nos)</h6>
                       <div className="footer">
                          <div>   
                           <span  style={{fontFamily:'Robota'}}>Due:</span>May31, 2022 3:30 PM
                          </div>
                          <div>
                              <span style={{fontFamily:'Robota'}}>ASSIGNED TO <FontAwesomeIcon icon={faCircleUser}/></span>
                          </div>
                       </div>
                        </div>
                       </div>
                   </div>
                  </div>
               </div>
               <div className="child">
               <h6>ORDER IS READY FOR DEVLIVERY (0)</h6>
               </div>
               <div className="child">
               <h6>ORDER PICKED UP (0)</h6>
               </div>
               </div>
            </div>
        </div>
    )
}

export default Col;
