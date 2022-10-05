import './App.css';
import {useState, useEffect} from 'react'



function App() {
  
  const showDate = new Date()
  
  let [driverName, setDriverName] = useState("")
  let [count,  setCount] = useState(10)
  let [vehicleNo, setVehicleNo] = useState("")
  let [time, setTime] = useState(false)
  let [checkin, setCheckin] = useState()
  let [checkout, setCheckout] = useState()
  const [modal, setModal] = useState(false)

  
  useEffect(() =>{
    setCount(count)
  })
  

  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  
  

  const checkIn = () =>{
    setTime(true)
    const d=  new Date()
    let d1 = d.toLocaleTimeString()
    setCheckin(d1) 
    setCount(count - 1)

  }

  const checkOut = () =>{
    setTime(true)
    setModal(!modal)
    const d =new Date()
    let d1 = d.toLocaleTimeString()
    setCheckout (d1) 
    setCount(count + 1)

  }

  return (
    <div className="App">
{/* Our Parking Form */}
      <div className='App-header'>
       <h2>Parking Lot</h2> 
       <h5>Total no. of cars : {count}</h5>
        <form className='App-form' onSubmit={handleSubmit}>
          <label className='App-lbl'>
            Driver's Name
            <input type="text" name= "drivername" value={driverName} onChange = {(e) => setDriverName(e.target.value)} />
          </label>
          <label  className='App-lbl'>
           Vehicle No.
            <input type="text" name= "vehicleno" value={vehicleNo} onChange = {(e) => setVehicleNo(e.target.value)} />
          </label>
          <div className='App-btn'>
            <button className='btn btn-checkin' onClick={checkIn}> Check In </button>
          
            <button className='btn btn-checkout' onClick={checkOut }> Check Out </button>
          </div>
        </form>
      </div>
      {/* A modal to print the parking Reciept */}
      {modal &&(
      <div className='modal'>
        <div className='overlay'>
          <div className='modal-content'>
            <h3>Parking Reciept</h3>
            Driver Name: {driverName}
            <br></br>
            Vehicle No. : {vehicleNo}
            <br></br>
            Checkin : {checkin}
            <br></br>
            Checkout :{checkout}
          <button className="close-modal" onClick={() => setModal(false)}>
              CLOSE
            </button>
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default App;
