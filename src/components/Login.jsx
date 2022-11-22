import {useRef} from 'react';
import { useContext } from 'react';
import { ProfileContext } from '../Contexts/ProfileContext';
import { Navigate,useNavigate } from "react-router-dom";

const Login=()=>{
    const nameRef= useRef(null);
    const passRef= useRef(null);
    const {profile,setProfile }= useContext(ProfileContext);  
    let navigate = useNavigate();
    return(
        
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
            <input type='text' ref={nameRef} ></input>
            <input type='password' ref={passRef} ></input>
            <button onClick={(e)=>{
                setProfile
                ({
                    name:nameRef.current.value,
                    pass:passRef.current.value
                })
                
                if (profile){
                    {navigate('/Home')}
                }
            }
        }>connect</button>
        </div>
        

    )
}
export default Login;