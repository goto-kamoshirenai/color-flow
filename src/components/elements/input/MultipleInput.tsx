"use client"

import { useLocale } from '@/contexts/LocaleContext';
import { InputType } from '@/types/input';
import React, { useEffect, useState } from 'react'

const RadioInput = ({
  label,
  value,
  checked,
  onChange,
}: {
  label: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className='flex items-center gap-2'>
    <label className='w-8'>{label}</label>
    <input type="radio" name="inputType" value={value} checked={checked} onChange={onChange} />
  </div>
);

const MultipleInput = ({
  color,
  setColor,
}: {
  color: string;
  setColor: (color: string) => void;
  }) => {
  const { t } = useLocale();
  const [inputType, setInputType] = useState<InputType>('hex');
  const [displayColor, setDisplayColor] = useState<string>('#ffffff');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputType(e.target.value as InputType);
    setColor('');
    setDisplayColor('#ffffff');
  };

  const getColor = (color: string) => {
    if (inputType === 'hex') return `#${color}`;
    if (inputType === 'rgb') return `rgb(${color})`;
    return '#ffffff';
  };

  useEffect(() => {
    setDisplayColor(getColor(color));
  }, [color, inputType]);



  return (
    <div className="flex justify-center items-center gap-2 ">
    <div className='flex flex-col gap-2 text-main'>
      <RadioInput
        label={t("MULTIPLE_INPUT_TYPE_HEX")}
        value="hex"
        checked={inputType === 'hex'}
        onChange={handleRadioChange}
      />
      <RadioInput
        label={t("MULTIPLE_INPUT_TYPE_RGB")}
        value="rgb"
        checked={inputType === 'rgb'}
        onChange={handleRadioChange}
      />
      </div>
     {inputType === 'hex' && <div className='flex flex-col gap-2 text-main'>
        <input type="text" value={color} placeholder={t("MULTIPLE_INPUT_HEX_PLACEHOLDER")} maxLength={6} pattern="^[0-9A-Fa-f]{6}$" slot="hex" onChange={(e) => setColor(e.target.value)} className='border border-main rounded-md p-2' />
      </div>}
      {inputType === 'rgb' && <div className='flex flex-col gap-2 text-main'>
        <input type="text" value={color} placeholder={t("MULTIPLE_INPUT_RGB_PLACEHOLDER")} maxLength={11} pattern="^[0-9,]{11}$" slot="rgb" onChange={(e) => setColor(e.target.value)} className='border border-main rounded-md p-2' />
      </div>}
      <div className='w-10 h-10  rounded-lg' style={{ backgroundColor: displayColor }}></div>
    </div>
  )
}

export default MultipleInput