import { Outlet } from 'react-router-dom';
import { createContext, useMemo } from "react";
import { Header } from "/src/shared/Components/Header/Header";
import { Sidebar } from './shared/Components/Sidebar/Sidebar';

export const ApiContext = createContext({});

export const ApiProvider = () => {
    //const [token, setToken] = useState<string>("");

    const value = useMemo(() => ({}), []);

    //if (!token) {
    //    return <Navigate to="/403" replace />;
    //}

  return (
    <ApiContext.Provider value={value}>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Sidebar />
    </ApiContext.Provider>
  );
};