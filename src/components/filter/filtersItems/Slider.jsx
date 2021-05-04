import { Slider } from 'antd';



const Slide = ({ type, dots, min, max }) => {
    return (
        <Slider
            dots={dots} 
            range={type} 
            defaultValue={[min, max]} 
            min={min} 
            max={max}
        />
    )
}

export default Slide 
