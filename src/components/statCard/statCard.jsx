export const StatComponent =(props)=>{
    return (
        <div className="container-stat">
            <div   className="icon-container" style={{backgroundColor:props.primary}}>
            {props.svg} 
        </div>
        <div className="stat">
            <div className="quantity">{props.number}</div>
            <div className="name">{props.name}</div>
            </div>
        </div>
    )
}