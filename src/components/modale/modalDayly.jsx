import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
export const ModaleDayly = (props)=>{
    console.log(props.data);
    const score= props.data.userData.todayScore?props.data.userData.todayScore:props.data.userData.score
    console.log(score);
    const data = [
        { name: 'Score', value: score},{ name: 'Reste', value: 1-score}]
    return(
        <div className="container-card dayly">
            <div className="legend">Score</div>
            <div className="stats">{score*100+"%"}<span> de votre objectif</span></div>
            <ResponsiveContainer  width="100%" height="100%">
            <PieChart  fill="red"   >
        <Pie
            
          data={data}
          innerRadius={55}
          outerRadius={75}
          fill="red"
          paddingAngle={5}
          startAngle={90}
          endAngle={470}
          dataKey="value"
        >
            {data.map((entry,index)=>{
return(<Cell style={{borderRadius:15}} key={`cell-${index}`} fill={index===0?"red":"#ff000023"} />)
            
            })}
        </Pie>
       
      </PieChart>

            </ResponsiveContainer>
        
        </div>
    )
}