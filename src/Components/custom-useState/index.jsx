import useLocalStorage from './localStorage.jsx';
import './theme.css';


export default function CustomTheme() {

    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

  return (
    <div className="custom-theme" data-theme={theme}>
      <h1>Hello World</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
