export default function Buttons1 (props) {
    
   const {buttons1, setLeft} = props;
 
    const clickHandler=(e)=>{
        
        console.log(e.target.value)
        setLeft(e.target.value)
    }
   
    return (
    <>
    
    {buttons1.map(x=>{
        return(<button onClick={clickHandler} value={x.value} key={x.key}>{x.name}</button>)
    })}
    
    </>
    
    )
}