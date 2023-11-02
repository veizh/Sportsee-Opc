import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export const ModaleDuration = (props)=>{
  console.log(props.data);
    const data = [
        {
          name: 'L',
          time: props.data.average[0].sessionLength,
        },
        {
          name: 'M',
          time: props.data.average[1].sessionLength,
        },
        {
          name: 'M',
          time: props.data.average[2].sessionLength,
        },
        {
          name: 'J',
          time: props.data.average[3].sessionLength,
        },
        {
          name: 'V',
          time: props.data.average[4].sessionLength,
        },
        {
          name: 'S',
          time: props.data.average[5].sessionLength,
        },
        {
          name: 'D',
          time: props.data.average[6].sessionLength,
        },
      ];
    return(
        <div className="container-card duration">
          
          <ResponsiveContainer width="100%" height="100%" style={{transformOrigin:"center",transform:"scaleX(1.2)"}}>
        <LineChart
          width="100%"
          height="100%"
          data={data}
          margin={{
            top: 100,
            right: 50,
            left: 50,
            bottom: 10,
          }}
        >
          <Tooltip content={<CustomTool data={props.data}/>} contentStyle={{backgroundColor:"white"}} offset={50}  itemStyle={{color:'black'}}/>
          <Line  type="monotone" dataKey="time"  stroke="#82ca9d" strokeWidth={2.5} dot={false}  />
          <XAxis  className='Xaxis'    dataKey="name" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    )
}
const CustomTool=({ active, payload, label, data })=>{
  if(active && payload && payload.length){
      return(
      <div className='tooltip duration'>
        {payload[0].value + " min"}
      </div>
  )
  }
  else{
      return<></>
  }
  
}