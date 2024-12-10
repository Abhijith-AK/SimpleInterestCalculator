import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {

  const [interest, setInterest] = useState(0);
  const [amount, setAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [invalidPrinciple, setinvalidPrinciple] = useState(false)
  const [invalidRate, setinvalidRate] = useState(false)
  const [invalidYear, setinvalidYear] = useState(false)

  const validateInput = (inputTag) => {
    console.log(inputTag, typeof inputTag);
    const { name, value } = inputTag;
    // console.log(name, !!value.match(/^[0-9]*.?[0-9]+$/));
    // console.log(name, !!value.match(/^\d*.?\d+$/));
    console.log(name, !!value.match(/^\d+(\.\d+)?$/));

    if (name == 'principle') {
      setAmount(value);
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidPrinciple(false);
      } else {
        setinvalidPrinciple(true);
      }
    } else if (name == 'rate') {
      setRate(value);
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidRate(false);
      } else {
        setinvalidRate(true);
      }
    } else if (name == 'year') {
      setYear(value);
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setinvalidYear(false);
      } else {
        setinvalidYear(true);
      }
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault();
    console.log("Button Clicked");
    if (amount && rate && year) {
      setInterest(amount * rate * year / 100);
    } else {
      alert("Please fill the form Completely")
    }
  }

  const handleReset = () => {
    setInterest(0);
    setAmount(0);
    setRate(0);
    setYear(0);
    setinvalidPrinciple(false);
    setinvalidRate(false);
    setinvalidYear(false)
  }

  const invalidPrincipleDiv = invalidPrinciple && <div className='text-danger mb-3'>*Invalid Principle Amount</div>
  const invalidRateDiv = invalidRate && <div className='text-danger mb-3'>*Invalid Rate</div>
  const invalidYearDiv = invalidYear && <div className='text-danger mb-3'>*Invalid Year</div>

  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className="d-flex justify-content-center align-items-center bg-dark">
        <div className="bg-light p-5 rounded">
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interst Easily!</p>
          <div className="bg-success p-5 rounded text-white">
            <h1>₹{interest}</h1>
            <p className="fw-bolder">Total Simple Interest</p>
          </div>
          <form action="" className='mt-5'>
            {/* Principle amount */}
            <div className="mb-3">
              <TextField name='principle' value={amount || ""} onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-principle" label="₹ Principle amount" variant="outlined" />
            </div>
            {/* Invalid Principle */}
            {invalidPrincipleDiv}
            {/* Rate */}
            <div className="mb-3">
              <TextField name='rate' value={rate || ""} onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>
            {/* Invalid rate */}
            {invalidRateDiv}
            {/* Year */}
            <div className="mb-3">
              <TextField name='year' value={year || ""} onChange={(e) => validateInput(e.target)} className='w-100' id="outlined-year" label="Time Period (yr)" variant="outlined" />
            </div>
            {/* Invalid year */}
            {invalidYearDiv}
            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} className="bg-dark" variant="contained" style={{ width: "50%", height: '70px' }}>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: "50%", height: '70px' }} className='border border-dark text-dark'>Reset</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
