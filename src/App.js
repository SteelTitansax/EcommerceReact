import logo from './logo.svg';
import './App.css';
import './components/Navbar.css';
import { React, useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from "./components/About";
import Panels from "./components/Panels";
import TShirt from './components/T-Shirt';
import Trousers from "./components/Trousers";
import Hats from "./components/Hats";
import Jackets from "./components/Jackets";
import BackPack from "./components/BackPacks";
import Shoes from "./components/Shoes";
import SnowItems from "./components/SnowItems";
import SportItems from "./components/SportItems";
import "bootswatch/dist/superhero/bootstrap.min.css";
import { auth } from './firebase'; 
import Modal from '@material-ui/core/Modal'; 
import {makeStyles} from '@material-ui/core/styles';
import {Button, Input} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position : 'absolute', 
    width : 400,
    backgroundColor:'#fff',
    border: '1px solid #fff',
    boxShadow: theme.shadows[5],
    padding: '20px',
  },
}))


function getModalStyle(){
  const top = 25;
  const left = 25; 


return {
  top: `${top}%`,
  left: `${left}%`,
  transform: `translate(~$(top)%, ~$(left)%)`,
  };
}



function App() {

const classes = useStyles();
const [modalStyle] = useState(getModalStyle);
const [open,setOpen] = useState(false);
const [openSignIn, setOpenSignIn] = useState(false);
const [password,setPassword] = useState(false);
const [username,setUsername] = useState(false);
const [email,setEmail] = useState(false);
const [user,setUser] = useState(null);


useEffect(()=> {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
  if(authUser){
    //user has logged in...
    console.log(authUser);
    setUser(authUser);

  }else{
    //user has logged out...
    setUser(null); 
  }
})


return () => {
  //perform some cleanup actions
  unsubscribe(); 
}

},[user, username]);


const signUp = (event) => {
  event.preventDefault(); 
  auth
  .createUserWithEmailAndPassword(email,password)
  .then((authUser) => {
   return authUser.user.updateProfile({
      displayName:username
    })
  })
  .catch((error) => alert(error.message))
}
const signIn = (event) => {
  event.preventDefault();

  auth
    .signInWithEmailAndPassword(email,password)
    .catch((error)=> alert(error.message))

    setOpenSignIn(false);
}


 
  return (
    <Router>
              
        <div>
          <Modal
            open={open}
            onClose={() => setOpen(false)}
          >
            <div style= {modalStyle} className={classes.paper}>
            <form className="card-body">
              <center>
                <img 
                
                src="/logo.png"
                width="40%"
                alt="logosignyp"
                />

                <Input
                placeholder="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />

                <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <a type="submit" className="mt-4 btn btn-primary" onClick={signUp}>Sign Up</a>

                </center>
              </form>
            </div>
          </Modal>

          <Modal
            open={openSignIn}
            onClose={() => setOpenSignIn(false)}
          >
            <div style= {modalStyle} className={classes.paper}>
            <form className="card-body">
              <center>
                <img 
                src="/logo.png"
                width="40%"
                alt="logosignyp"
                />

              
                <Input
                placeholder="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <Input
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <a type="submit" className="mt-4 btn btn-primary" onClick={signIn}>Sign In</a>

                </center>
              </form>
            </div>
          </Modal>




          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
              <img src="./logo.png" className="logo-image mr-2 bigScreenNav" alt="logo"/>
            <button className="navbar-toggler bigScreenNav" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse bigScreenNav" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link text-white" href="/">Ecommerce App</a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link text-white" href="/about">About</a>
                </li>
              </ul>
              { user ? ( <a className="app__loginContainer btn text-white" onClick={() => auth.signOut()}>Logout</a>

                ): (
                <div className="app__loginContainer">
                  <a className="btn text-white" onClick={() => setOpenSignIn(true)}>Sign In</a>
                  <a className="btn text-white" onClick={() => setOpen(true)}>Sign Up</a>

                </div>
              )}
            </div>
          </nav>

          { user ? ( 
             <Switch className="bigScreenNav">

             <Route path="/about" component={About}/> 
             <Route path="/tshirt" component={TShirt}/> 
             <Route path="/trousers" component={Trousers}/> 
             <Route path="/backpack" component={BackPack}/> 
             <Route path="/hats" component={Hats}/> 
             <Route path="/jackets" component={Jackets}/> 
             <Route path="/shoes" component={Shoes}/> 
             <Route path="/snowitems" component={SnowItems}/> 
             <Route path="/sportitems" component={SportItems}/> 

             <Route path="/" component={Panels}/> 
        
             </Switch>

          ): ( <div >
                <img src="login.png" alt="Imagen Panel"  className="bigScreenLogOut card-img-top image-panel-login  pt-2" />
                <h5 className="text-center text-dark"> Please log in to our App </h5> 
                </div>  
              )}
                

          <footer>
            <p className="text-center footer-app text-dark">Ecommerce app, project developed in Bootswatch, JavaScript React and Firebase.</p>
            

          </footer>
        </div>

    </Router>
    
  );
}

export default App;