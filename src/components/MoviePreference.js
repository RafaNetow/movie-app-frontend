import React from "react";
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
  const [actions, setActions] = useState(false);
  const [comedies, setComedies] = useState(false);
    const { isAuthenticated } = useAuth0();
    return (
        <>
            {isAuthenticated && (
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input type="checkbox" />{' '}
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
               adeventure
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
               break
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