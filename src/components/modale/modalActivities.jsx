
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text, Label } from 'recharts';
export const ModalActivities = (props)=>{
    const data = [
        {
          name: '1',
          kilogram: props.data.activity[0].kilogram,          
          calories: props.data.activity[0].calories,
        },
        {
          name: '2',
          kilogram: props.data.activity[1].kilogram,          
          calories: props.data.activity[1].calories,
        },
        {
          name: '3',
          kilogram: props.data.activity[2].kilogram,         
          calories: props.data.activity[2].calories,
        },
        {
          name: '4',
          kilogram: props.data.activity[3].kilogram,          
          calories: props.data.activity[3].calories,
        },
        {
          name: '5',
          kilogram: props.data.activity[4].kilogram,          
          calories: props.data.activity[4].calories,
        },
        {
          name: '6',
          kilogram: props.data.activity[5].kilogram,
          calories: props.data.activity[5].calories,
        },
        {
          name: '7',
          kilogram: props.data.activity[6].kilogram,
          calories: props.data.activity[6].calories,
        },
      ];
      
    return(
        <div className="container-card activities">
            <div className="title">
            <p>Acitivité quotidienne</p>
            <div className="legends">
              <div className="stat kilogram">Poids (Kg)</div>
              <div className="stat kcal">Calories brûlées (Kcal)</div>
            </div>
          </div>
        <ResponsiveContainer width="100%" height="80%">
        <BarChart
        barGap={10}
          width={20}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="2 2 "  opacity={0.5}/>
          <XAxis scale={'point'} name='day' tickLine={false} dataKey="name"   tickMargin={8} opacity={0.7} stroke="#9b9b9b" />
          <YAxis yAxisId="left"  tickLine={false} orientation="left" opacity={0.7} display="none" stroke="#9b9b9b"  />
          <YAxis yAxisId="right"  axisLine={false} tickLine={false} tickMargin={15} domain={[props.data.activity[5].kilogram-5,props.data.activity[5].kilogram+5]} orientation="right" opacity={0.7} stroke="#9b9b9b" />
          <Tooltip offset={50} content={<CustomTool data={props.data} />}/>
          <Bar yAxisId="right" radius={[15,15,0,0]} barSize={9} dataKey="kilogram" fill="#282D30"  />
          <Bar yAxisId="left"  radius={[15,15,0,0]} barSize={9}  dataKey="calories" fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    )
}
const CustomTool=({ active, payload, label,data })=>{
    if(active && payload && payload.length){
        return(
        <div className='tooltip'>
            <p>{data.activity[label-1].kilogram} kg</p>
            <p>{data.activity[label-1].calories} kcal</p>
        </div>
    )
    }
    else{
        return<></>
    }
    
}