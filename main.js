const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)
let countNum = 3

function Counter() {
    const [countNum,setCountNum] = React.useState(0)

    // const incCount = () => {
    //     setCountNum(countNum + 1);
    //   };
    
    //   const decCount = () => {
    //     if (countNum > 0) {
    //       setCountNum(countNum - 1);
    //     }
    //   };
    
    //   const resetCount = () => {
    //     setCountNum(0);
    //   };
    
    const updateCounter = (n) => {
        if(countNum+n < 0) {
            return
        }
      setCountNum( (prv)=> {
        console.log(prv)
        return prv+n
      })
    }
      return (
        <div className="counter">
          <button onClick={()=>updateCounter(-1)}>-</button>
          <h3>{countNum}</h3>
          <button onClick={()=>updateCounter(1)}>+</button>
          <button onClick={()=>updateCounter(-countNum)}>C</button>
        </div>
      );
}

function SumInfo(props)  {
    const stTitle = {
        color : props.color,
        fonSize : props.size==='big' ? '50px' : '40px'

    }

  return (
    <div className='suminfo'>
      <h1 style={ { color: props.color}}>Sum = 0</h1>
      <button>Add Counter</button>
    </div>
  )
}

function App() {
  return (
  <>
   
    
    <SumInfo color="green" size="samll"/> 
    <Counter />
  </>
  )
}