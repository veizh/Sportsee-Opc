
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export const ModalePerf = (props)=>{
    const data = [
        {
          subject: 'Intensité',
          A: props.data.performance.data[5].value,
          fullMark: 250,
        },
        {
          subject: 'Vitesse',
          A: props.data.performance.data[4].value,
          fullMark: 250,
        },
        {
          subject: 'Force',
          A: props.data.performance.data[3].value,
          fullMark: 250,
        },
        {
          subject: 'Endurance',
          A: props.data.performance.data[2].value,
          fullMark: 250,
        },
        {
          subject: 'Energie',
          A: props.data.performance.data[1].value,
          fullMark: 250,
        },
        {
          subject: 'Cardio',
          A: props.data.performance.data[0].value,
          fullMark: 250,
        },
      ];
    return(
        <div className="container-card perf">
           <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data} margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar name="Mike" dataKey="A" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={1} />
        </RadarChart>
      </ResponsiveContainer>
        </div>
    )
}