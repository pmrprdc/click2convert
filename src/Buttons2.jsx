

export default function Buttons2 (props) {


    const {buttons2, setRight} = props;
    const clickHandler=(e)=>{
        
        console.log("buttons2 click handler clicked")
        setRight(e.target.value/10)
    }

   
    return (
    <>
    
    {buttons2.map(x=>{
        return(<button onClick={clickHandler} value={x.value} key={x.key}>{x.name}</button>)
    })}
    
    </>
    
    )
}