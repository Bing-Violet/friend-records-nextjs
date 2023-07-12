import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
} from "@chakra-ui/react";

export interface SliderConfig {
  value: number;
  defaultValue?:number
  name: string;
  orientation?: string;
  max: number;
  min: number;
  style?: any;
}
interface SliderProps {
  sliderConfig: SliderConfig[];
  onChange: (e: any) => void;
}

export default function CustomSlider({ sliderConfig, onChange }: SliderProps) {
  const format = (val: number) => `$ ` + val;
  return (
    <Flex mt={"1rem"} >
      {sliderConfig.map((e, index) => (
        <Slider
          key={index}
          {...e}
          {...e.style}
          flex="1"
          value={e.value===0&&e.defaultValue?e.defaultValue:e.value}
          focusThumbOnChange={false}
          onChange={(event) => {
            onChange({ target: { name: e.name, value: event } });
          }}
          step={1}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb color={"gray"} fontSize="sm" boxSize="20px" />
        </Slider>
      ))}
    </Flex>
  );
}
