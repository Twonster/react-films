import { Slider } from 'antd';
import { useDispatch } from 'react-redux';



const Slide = ({ type, dots, min, max, action }) => {
    const dispatcher = useDispatch()

    return (
        <Slider
            dots={dots} 
            range={type} 
            defaultValue={[min, max]} 
            min={min} 
            max={max}
            onAfterChange={value => dispatcher(action(value))}
        />
    )
}

export default Slide 
