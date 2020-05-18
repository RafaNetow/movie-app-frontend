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
                    </FormGroup>
                    <Button>Inscripción
                    </Button>
                </Form >
            )}

        </>

    )

}
export default MoviePreference;