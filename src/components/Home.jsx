import { useContext } from 'react';
import { ProfileContext } from '../Contexts/ProfileContext';



const Home=()=>{
    const {profile,setProfile }= useContext(ProfileContext);
 
    return(
        <div>
            <input value={profile.name} readOnly={true}></input>
            <input value={profile.pass} readOnly={true}></input>

        </div>
    )
}

export default Home;