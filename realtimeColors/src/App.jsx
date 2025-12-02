  import React from 'react'
  import './App.css'
  import Big from './Components/big'
  import Mini from './Components/mini'
  import Large from './Components/large'
  import Small from './Components/small'
  import Medium from './Components/Medium'
  import { useState } from 'react'
  function App() {
    // const [bgColor,setBgColor]=useState("black")
    // const [bigColor,setBigColor]=useState("blue")
    // const [largeColor,setLargeColor]=useState('yellow')
    // const [miniColor,setMiniColor]=useState('white')
    // const [smallColor,setSmallColor]=useState('red')
    // const [mediumColor,setMediumColor]=useState('orange')
    // function changeBgColor(e){
    //   setBgColor(e.target.value)
    // }
    // function changeBigColor(e){
    //   setBigColor(e.target.value)
    // }
    // function changeLargeColor(e){
    //   setLargeColor(e.target.value)
    // }
    // function changeMiniColor(e){
    //   setMiniColor(e.target.value)
    // }
    // function changeSmallColor(e){
    //   setSmallColor(e.target.value)
    // }
    // function changeMediumColor(e){
    //   setMediumColor(e.target.value)
    // }
    const [colors,setColors]=useState({
      bgColor:'black',
      bigColor: "blue",
      largeColor: "yellow",
      miniColor: "white",
      smallColor: "red",
      mediumColor: "orange"
    })

    const initial ={
      bgColor:'black',
      bigColor: "blue",
      largeColor: "yellow",
      miniColor: "white",
      smallColor: "red",
      mediumColor: "orange"
    }

    function handleColorChange(Component,value){
      setColors((prev)=>{
        return{
          ...prev,[Component]:value
        }
      })
    }
    return (
      <div style={{height:'100vh',width:'100vw',backgroundColor:colors.bgColor,overflow:'hidden'}}>
      <div className='mainDiv' style={{display:'flex', gap: '200px', padding:'2px', margin:'30px'}}>
        <div style={{margin: '10px'}}>
          <h1><span style={{color:colors.mediumColor}}>This</span> is for  <span style={{color:colors.bigColor}}>Real</span>  Time <span style={{color:colors.largeColor}}>colors</span> <br /> <span style={{color:colors.miniColor}}>realization</span></h1>
          <p>you can choose the color you want , i will display it as you like</p>
          <p>use the section below , to choose your colors</p>
          <button onClick={()=>localStorage.setItem("savedColors",JSON.stringify(colors))}>Save It</button>
          <button onClick={()=>{
            const saved=localStorage.getItem("savedColors");
            if(saved){
              setColors(JSON.parse(saved))
            }
          }}>The Saved Version</button>
          <button onClick={()=>{
            setColors(initial)}}>Reset</button>
        </div>
        <div style={{gap:'20px'}} >
          {/* <div className="parent" style={{margin:'0px'}} >
            <div className="child child1">1</div>
            <div className="child child2">2</div>
            <div className="child child3">3</div>
            <div className="child child4">4</div>
            <div className="child child5">5</div>
            <div className="child child6">6</div>
            <div className="child child7">7</div>
            <div className="child child8">8</div>
            <div className="child child9">9</div>
            <div className="child child10">10</div>
            <div className="child child11">11</div>
            <div className="child child12">12</div>
          </div> */}
        <div style={{display:'flex', gap: '20px'}}>
          <Big style={{backgroundColor:colors.bigColor}} />
          <Large style={{backgroundColor:colors.largeColor}}/>
          
        </div>
        <div style={{display:'flex', gap:'20px'}}>
          <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <Mini style={{backgroundColor:colors.miniColor}}/>
          <Small style={{backgroundColor:colors.smallColor}} />
          </div>
          <div style={{margin:'10px'}}>
            <Medium style={{backgroundColor:colors.mediumColor}} />
          </div>
          </div>
        
        </div>
        
      </div>
      <footer style={{display:'flex', gap:'20px',margin:'0px',position:'absolute',bottom:'0px'}} >
          <button  style={{padding:'0px'}}>
          <label>Background 
            <input type="color" onChange={(e)=>handleColorChange("bgColor",e.target.value)}/>
            </label>
            </button>
            <button>
              <label>Big Component
              <input type="color" onChange={(e)=>handleColorChange("bigColor",e.target.value)}/>
              </label>
              </button>
            <button>
              <label>Large Component
              <input type="color" onChange={(e)=>handleColorChange("largeColor",e.target.value)} />
              </label>
              </button>
            <button>
              <label>Mini Component
              <input type="color" onChange={(e)=>handleColorChange("miniColor",e.target.value)} />
              </label>
              </button>
              
            <button>
              <label>Samll Component
              <input type="color" onChange={(e)=>handleColorChange("smallColor",e.target.value)} />
              </label>
            </button>
            
            <button>
              <label>Medium Component
              <input type="color" onChange={(e)=>handleColorChange("mediumColor",e.target.value)} />
              </label>
            </button>
        </footer>
      </div>
    )
  }

  export default App
