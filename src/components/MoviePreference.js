import React, { useState } from "react";
import { useAuth0 } from "../auth-service";

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from "reactstrap";

const MoviePreference = () => {

    const [actions, setActions] = useState(false);
    const [comedies, setComedies] = useState(false);
    const [romantic, setRomantic] = useState(false);
    const [adventure, setAdventure] = useState(false);
    const [musicals, setMusicals] = useState(false);
    const [dramas, setDramas] = useState(false);
    const [horrror, setHorror] = useState(false);
    const [scienceFictiion, setScienceFiction] = useState(false);
    const { isAuthenticated } = useAuth0();
    const makeInscription  = () => {
        fetch("https://127.0.0.1/:8080/api/movies/",{mode: 'cors'})
        
        .then(res => res.json())
        .then(data => {
          console.log(data);
   
        })
        .catch(err => console.log(err));
        console.log("makingInscription")
       
    }

    return (
        <>
            {isAuthenticated && (
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input onChange={event => setActions(event.target.value)} type="checkbox" />
                            {actions}
                        </Label>
                        <Label check>
                            <Input onChange={event => setComedies(event.target.value)} type="checkbox" />
               comedies
             </Label>
                        <Label check>
                            <Input onChange={event => setRomantic(event.target.value)}  type="checkbox" />{' '}
               romantic-films
             </Label>
                        <Label check>
                            <Input onChange={event => setAdventure(event.target.value)}  type="checkbox" />{' '}
               adventure
             </Label>
                        <Label check>
                            <Input  onChange={event => setMusicals(event.target.value)}  type="checkbox" />{' '}
               musicals
             </Label>
                        <Label check>
                            <Input  onChange={event => setDramas(event.target.value)}  type="checkbox" />{' '}
               dramas
             </Label>
                        <Label check>
                            <Input  onChange={event => setHorror(event.target.value)}  type="checkbox" />{' '}
               horror
             </Label>
                        <Label check>
                            <Input   onChange={event => scienceFictiion(event.target.value)}  type="checkbox" />{' '}
               science fiction
             </Label>
                    </FormGroup>
                    <Button onClick = {makeInscription}>Inscripción
                    </Button>
                </Form >
            )}

        </>

    )

}
export default MoviePreference;