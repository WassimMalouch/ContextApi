import { Route , Routes} from "react-router-dom";
import Login from "./components/Login";
import { ProfileContext } from "./Contexts/ProfileContext";
import { useState } from "react";
import Home from "./components/Home";
const RootContainer=()=>{
const [profile,setProfile]=useState({})


return(
<ProfileContext.Provider value={{profile,setProfile}} >
    <Routes>
        <Route path="/login" element={<Login  />}></Route>
        <Route path="/home" element={<Home />}></Route>
    </Routes>
</ProfileContext.Provider>
)
}

export default RootContainer;