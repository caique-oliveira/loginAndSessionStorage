import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';

const AppRoutes = () =>{
    const [formData, setFormData] = useState(null);

    const handleSave = (data) => {
      setFormData(data);
    };
  
    return(
        <Routes>
            <Route path="/" element={<Home data={formData} />}></Route>
            <Route path="/login" element={<Login onSave={handleSave}/>}></Route>

            <Route path="*" element={<h1 style={{ 
                height: "80vh",
                width: "100%", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                fontSize: 40
            }}>Página não encontrada</h1>} />
        </Routes>
    )
}

export default AppRoutes;