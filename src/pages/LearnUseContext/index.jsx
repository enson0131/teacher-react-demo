import React, { useContext, useState } from 'react';

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}
const ThemeContext = React.createContext(themes.light);


const ThemedButton =  () => {
    const theme = useContext(ThemeContext);
    return <button style={{
        background: theme.background,
        color: theme.foreground,
        width: '100px',
        height: '100px'
    }}>
        theme button
    </button>
}

const LearnUseContext = () => {
    const [theme, setTheme] = useState(themes.light);
    return (
        <>
        <ThemeContext.Provider value={theme}>
            <ThemedButton />
        </ThemeContext.Provider>
        <div onClick={() => setTheme(themes.dark)}>
            切换黑色主题
        </div>
          <div onClick={() => setTheme(themes.light)}>
          切换白色主题
      </div>
      </>
    )
}


export default LearnUseContext;