import React from "react";
import { useAuth0 } from "../auth-service";

 const  MoviePreference  = () => {
const { isAuthenticated} = useAuth0();
    return (
        <>
            {isAuthenticated && (
            <div>Hey Jimmy</div>
            )}

        </>
         
    )

}
export default MoviePreference;