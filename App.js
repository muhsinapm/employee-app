import React, { Component } from 'react';


class App extends React.Component{
  render(){
    return(
       <div className="container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form>
              <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-user"></i></span>
                </div>
                
                <input type="email" id='question' className="form-control" placeholder="email" />
</div>
 <div className="input-group mb-3">
   <div className="input-group-prepend">
    <span className="input-group-text"><i class="fa fa-lock"></i></span>
  </div>
  <input type="password" className="form-control" placeholder="Password" />
</div>
 <button type="button" className="btn btn-secondary btn-block">LOGIN</button>
 
   </form>
            
          </div>
        </div>
       </div>   
    )
  }
}


export default App;
