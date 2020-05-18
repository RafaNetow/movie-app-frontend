import React,  {useState} from "react";
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
    return (
        <>
            {isAuthenticated && (
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input  onChange={event => setActions(event.target.value)}type="checkbox" />{actions}
               action-fils
             </Label>
             <Label check>
                            <Input type="checkbox" />{' '}
               comedies
             </Label>
             <Label check>
                            <Input type="checkbox" />{' '}
               romantic-films
             </Label>
             <Label check>
                            <Input type="checkbox" />{' '}
               adventure
             </Label>
             <Label check>
                            <Input type="checkbox" />{' '}
               musicals
             </Label>
             <Label check>
                            <Input type="checkbox" />{' '}
               dramas
             </Label>
             <Label check>
                            <Input type="checkbox" />{' '}
               horror
             </Label>
             <Label check>
                            <Input type="checkbox" />{' '}
               science fiction
             </Label>
                    </FormGroup>
                    <Button>Inscripción
                    </Button>
                </Form >
            )}

        </>

    )

}
export default MoviePreference;