'use client'
import Image from 'next/image'
import { useState } from 'react'
import {
  ColorBox,
  ColorCircle,
  ColorsContainer,
  ExperimentColorBox,
  Input,
  Inputs,
} from './components'
import { greenRed, greenBlue, blueRed } from './colorFunctions'

const ColorName = ({ colorName }) => (
  <div
    style={{
      width: '100%',
      marginTop: '20px',
    }}
  >
    {colorName}
  </div>
)
const isValidHexChar = (char: any) => /^[0-9a-f]$/i.test(char)

export default function Home() {
  const [r, setR] = useState('f')
  const [g, setG] = useState('7')
  const [b, setB] = useState('a')
  const handleInput = (setter: any) => (e) => {
    const val = e.target.value.toLowerCase()
    if (val === '') {
      setter('0')
      return
    }
    if (val.length === 1 && isValidHexChar(val)) {
      setter(val)
    }
  }
  const hexToDecimal = (hex: any) => parseInt(hex, 16) * 17

  console.log(r, g, b)

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
        <p className='text-4xl'> Hex colors</p>
        <p>0 1 2 3 4 5 6 7 8 9 a b c d e f</p>
        <div className='flex gap-4 items-center flex-col sm:flex'>
          <Inputs>
            <label>
              R:{' '}
              <Input
                type='text'
                // maxLength={1}
                value={r}
                onChange={handleInput(setR)}
              />
            </label>
            <ColorCircle color={`#${r}00`} />

            <div className='flex flex-col items-center justify-items-center'>
              <label>
                G:{' '}
                <Input
                  type='text'
                  maxLength={1}
                  value={g}
                  onChange={handleInput(setG)}
                />
              </label>
            </div>
            <ColorCircle color={`#0${g}0`} />
            {g}
            <label>
              B:{' '}
              <Input
                type='text'
                maxLength={1}
                value={b}
                onChange={handleInput(setB)}
              />
            </label>
            <ColorCircle color={`#00${b}`} />
            {b}
          </Inputs>
          <ExperimentColorBox
            r={hexToDecimal(r)}
            g={hexToDecimal(g)}
            b={hexToDecimal(b)}
          />
        </div>
        <ColorsContainer>
          {/* <ColorName colorName='blues' />
          {blues().map((color, idx) => (
            <ColorBox key={idx} color={color} title={color}>
              {color}
            </ColorBox>
          ))}
          <ColorName colorName='greens' />
          {greens().map((color, idx) => (
            <ColorBox key={idx} color={color} title={color}>
              {color}
            </ColorBox>
          ))}
          <ColorName colorName='reds' />
          {reds().map((color, idx) => (
            <ColorBox key={idx} color={color} title={color}>
              {color}
            </ColorBox>
          ))}
          <ColorName colorName='greenBlues' />
          {greenBlue().map((color, idx) => (
            <ColorBox key={idx} color={color} title={color}>
              {color}
            </ColorBox>
          ))} */}
          <ColorName colorName='blue-red' />
          {blueRed().map((color, idx) => (
            <ColorBox key={idx} color={color} title={color}>
              {color}
            </ColorBox>
          ))}
          <ColorName colorName='green-blue' />
          {greenBlue().map((color: any, idx: any) => (
            <ColorBox key={idx} color={color} title={color}>
              {color}
            </ColorBox>
          ))}
          <ColorName colorName='green-red' />
          {greenRed().map((color, idx) => (
            <ColorBox key={idx} color={color} title={color}>
              {color}
            </ColorBox>
          ))}
        </ColorsContainer>
        <p className='self-center'> (for Martha ☺️)</p>
      </main>

      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <a
          className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'
          href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Read our docs
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/file.svg'
            alt='File icon'
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/window.svg'
            alt='Window icon'
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/globe.svg'
            alt='Globe icon'
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
