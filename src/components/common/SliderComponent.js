import React from 'react'
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

const SliderComponent = ({ defaultValue, min, max, step, onChange, value, label, unit, amount }) => {
    return (
        <Stack my={1.4}>          {/* Parent tag can be: fake dom <></> or <React.Fragment></React.Fragment> or <Fragment></Fragment> and import it, my - margin top and bottom */}
            <Stack gap={1}>     {/* implement flex box into component using stack component by material UI, if we want the gap between column then add <Stack gap={1} direction='column'> */}
                <Typography variant="subtitle2">{label}</Typography>
                <Typography variant="h5">{unit} {amount}</Typography>
            </Stack>
            <Slider defaultValue={defaultValue}
                min={min}
                max={max}
                aria-label="Default"
                valueLabelDisplay="auto"
                marks
                step={step}
                onChange={onChange}         /*Onchange handler - So that every time we move the handler, we can console up the value within the browser terminal*/
                value={value}
            />
            <Stack direction='row' justifyContent='space-between'>         {/*To create gap between $ 1000 and $10000*/}
            <Typography variant="caption" color='text.secondary'>{unit} {min}</Typography>      {/* color can be customized from palette option of moi*/}
            <Typography variant="caption" color='text.secondary'>{unit} {max}</Typography>
            </Stack>
        </Stack>
    );
};

export default SliderComponent
