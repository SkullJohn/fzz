import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { useState } from "react";
import { SignInButton } from 'ethos-connect';
import { Link, NavLink } from 'react-router-dom'
import JoinGame from "./components/JoinGame";
import logo from "./assets/NarhwalsandSkulls.png";
import fight from "./assets/fight.png";
import tictac from "./assets/tictac.png";
import discord from "./assets/discord.svg";
import twitter from "./assets/twitter.svg";


function App() {
  const api_key = "dzeabewv2jh6";
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  const [isAuth, setIsAuth] = useState(false);
  let url = 'https://twitter.com/Skullsui'
  
  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  };

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          name: cookies.get("username"),
          firstName: cookies.get("firstName"),
          lastName: cookies.get("lastName"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        setIsAuth(true);
      });
  }
  return (
    <><div className="App"> 
    
        <div className="logo">
                       <img className="img-responsive" src={logo} alt="logo" /> 
                       <SignInButton className="connect">CONNECT YOUR WALLET</SignInButton>
                    </div>
      
     {/* {isAuth ? (
        <Chat client={client}>
          <JoinGame />
          <button onClick={logOut}> Log Out</button>
        </Chat>
      )*/} : (
        <>
         {/* 
           <SignUp setIsAuth={setIsAuth} />
          <Login setIsAuth={setIsAuth} />
        */}
            
            
          
           
           <div className='main'>
         
           
            <img src={tictac} className='tictac' alt="tictac"/>                  
            <img src={fight} className='fight' alt="fight" />
           
           </div>
                        
          
        </>

      )
    </div>
    <div className='end'></div> <div className="card">
          <h1>First TIC tac on Sui </h1>
           <h2>Exclusive Game </h2>
          
           </div>
    <div className='description'>
                                
   <p>Description of the gameffffffffffffffffffffffffffffff</p>
   <p>picture too</p>
   
                            
    </div>
    <div className='SocialLinks'>
    <div className='titles'>
      
    <p>SUIZZLE</p>    <div className='socials'> 
   <a href={'https://twitter.com/SuizzleNFT'}><img src={require('./assets/twitter.svg').default}  style={{ height: 53, width: 36 }}alt='mySvgImage' /></a> 
   <a href={'http://discord.gg/4kP8VX9eUh'}><img src={require('./assets/discord.svg').default} style={{ height: 53, width: 36 }}alt='mySvgImage' /></a> 

      
    </div> </div>
    <div className='titless'> <p>Skullsui</p>    <div className='socials'> 
   <a href={url}><img src={require('./assets/twitter.svg').default}  style={{ height: 53, width: 36 }}alt='mySvgImage' /></a> 
   <a href={'https://twitter.com/Skullsui'}><img src={require('./assets/discord.svg').default} style={{ height: 53, width: 36 }}alt='mySvgImage' /></a> 

      
     </div> </div> 
                     
    <div className='links'>                      
   
  
 

   </div>  
                            
   
       </div>
       <div className='description'>
       <div className="card">
          <h1>Official Partner</h1>
                                
                              <h1>CLUTCHY</h1>
                             
                                
                                                         
                                 </div> </div>
    </>
  );
  
}

export default App;
