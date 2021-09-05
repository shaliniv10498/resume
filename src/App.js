import './App.css';


function App() {
  return (
    <div className="mainBody">
     <iframe src="./music.mp3" type="audio/mp3" allow="autoplay" id="audio" style={{display:"none"}}></iframe>
   <audio controls loop autoPlay={true}>
   <source src="./music.mp3" type="audio/mp3"/>
  </audio>
      <header>
        <svg width="1200" height="200">
        <text x="60%" y="20%" fill="transparent" textAnchor="middle"> WELCOME TO SHALINI'S PROFILE </text>
        </svg>
      </header>
      <div className = "curtainWrapper">
       <section>

       
        <div className="prize">
       <div className="resume"> <h3>Open Resume</h3> </div> <br/>
       <div className="projects"><h3> View Projects</h3></div> <br/>
       <div  className="pictures"><h3>View Pictures</h3></div> <br/>
      
      </div>
      <div className="set">
        
       <div><img src="./image5.jpg" alt="notfound"/></div>
        <div><img src="./img3.jpg" alt="notfound"/></div>
        <div><img src="./image5.jpg" alt="notfound"/></div>
        <div><img src="./img3.jpg" alt="notfound"/></div>
        <div><img src="./image5.jpg" alt="notfound"/></div>
        <div><img src="./img3.jpg" alt="notfound"/></div>
        <div><img src="./image5.jpg" alt="notfound"/></div>
        
      </div>
     </section>
      </div>
      <div className="floor"></div>
    </div>
  );
}

export default App;
