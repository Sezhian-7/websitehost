import react, { useEffect, useState, useContext, useLayoutEffect } from 'react';
import Moon from '../../asset/image/svg/Moon';
import Dayicon from '../../asset/image/svg/Dayicon';
import { ThemeContext } from '../../context/provider/ThemeContext';

interface DarkThemeProps {}

const DarkTheme: React.FC<DarkThemeProps> = () => {
  const { themes, themeDispatch } = useContext(ThemeContext);
  let element: any, darkQuery: any;
  const [theme, setTheme] = useState('');
  const [themeName, setThemeName] = useState('');
  if (typeof window !== 'undefined') {
    element = document.getElementById('mv_theme');
    darkQuery = window.matchMedia('(prefers-color-scheme: light)');
  }
  useLayoutEffect(() => {
    const selectTheme: any = localStorage.getItem('theme');
    setTheme(selectTheme ? selectTheme : 'light');
    onWindowMatch();
  }, []);

  useLayoutEffect(() => {
    if (element) {
      switch (theme) {
        case 'dark':
          element.classList.add('dark');
          element.classList.remove('light');
          localStorage.setItem('theme', 'dark');
          break;
        case 'light':
          element.classList.remove('dark');
          element.classList.add('light');
          localStorage.setItem('theme', 'light');
          break;
        default:
          onWindowMatch();
          element.classList.remove('dark');
          element.classList.add('light');
          break;
      }
    }
  }, [theme]);

  const options = [
    {
      icon: 'L',
      text: 'light',
    },
    {
      icon: 'D',
      text: 'dark',
    },
  ];
  function onWindowMatch() {
    if (element) {
      if (
        theme === 'dark' ||
        (!('theme' in localStorage) && darkQuery.matches)
      ) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  }
  if (darkQuery) {
    darkQuery.addEventListener('change', (e: any) => {
      if (!('theme' in localStorage)) {
        if (e.matches) {
          element.classList.add('dark');
        } else {
          element.classList.remove('dark');
        }
      }
    });
  }

  return (
    <>
      <div className='theme_block'>
        {theme === 'light' ? (
          <div
            onClick={() => {
              setTheme('dark');
            }}
          >
            <Moon />
          </div>
        ) : (
          <div
            onClick={() => {
              setTheme('light');
            }}
          >
            <Dayicon />
          </div>
        )}
      </div>
    </>
  );
};

export default DarkTheme;
