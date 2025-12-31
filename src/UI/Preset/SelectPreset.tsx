import React, { useState } from 'react';

import styles from "./SelectPreset.module.css"

import Select from 'react-select';
// import { colourOptions } from './docs/data';

import hyness from "@/assets/images/Armour/hyness.png"

const colourOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

export const SelectPreset = (options: Array<{value: string, label: string}>, name: string) => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const image = {
    ':before:': {
      image: hyness
    }
  }

  const dot = (color = 'transparent') => ({
  alignItems: 'right',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

  return (
    <>
      <button className="before:content-['★'] before:mr-2 before:text-yellow-500">
        ボタン
      </button>
      <Select
        className="
          relative pl-10
          before:content-['']
          before:absolute
          before:w-8 before:h-8
          /* CSS変数を呼び出す */
          before:bg-[image:var(--my-image-url)]
          before:bg-contain
        "
        classNamePrefix="select"
        defaultValue={options[0]}
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name={name}
        options={options}
        styles={{
          // control: (styles) => ({ ...styles, backgroundColor: 'white', ...{'image-set': [hyness]} }),
          control:  (styles) => ({ ...styles, backgroundColor: 'white', ...{ '--my-image-url': `url(${hyness})` }}),


          // option: (styles) => ({ ...styles, backgroundColor: 'gray', ...{'image-set': [hyness]} }),
          option: (styles) => ({ ...styles, backgroundColor: 'gray', ...{ '--my-image-url': `url(${hyness})` }}),


          // input: (styles) => ({ ...styles, ...{background: `url(${hyness})`} }),
          // input: (styles) => ({ ...styles, ...{"&:before": `content:url(${hyness})`} }),
          
          input: (styles) => ({ ...styles, ...{ '--my-image-url': `url(${hyness})` }}),
        }}
      />
    </>
  );
};
