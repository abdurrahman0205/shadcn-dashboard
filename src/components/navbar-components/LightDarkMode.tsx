'use client'
import { Moon, Sun, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const LightDarkMode = () => {

  const { theme,systemTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button disabled>
        <Sun className='size-5' />
      </button>
    );
  }

  console.log('theme value', theme);
  console.log('systemTheme value', systemTheme);
  
  return (
    <>
      <button
        onClick={() => {

          if (theme === 'light') {
            setTheme('dark')
          } else if (theme === 'dark') {
            setTheme('system')
          } else {
            setTheme('light')
          }
        } }
        className='rounded-full cursor-pointer'>
        {theme === 'dark' ? <><SunMoon className='size-5' /></> : theme === 'system' ? <><Sun className='size-5' /></>:<><Moon className='size-5' /></>}
        <span className='sr-only'>Change Theme</span>
      </button>
    </>
  );
};

export default LightDarkMode;