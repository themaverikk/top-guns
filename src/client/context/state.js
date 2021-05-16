import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [skills, setSkills] = useState(skillsData);

    return (
        <AppContext.Provider value={{ skills, setSkills }}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
