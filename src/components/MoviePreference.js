import {
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from "reactstrap";


import React, { Component } from "react";
import { useAuth0 } from "../auth-service";
  
    
class MoviePreference extends Component{
    
    constructor() {
        super();
        this.state = {
          action: false,
          comedies: false,
          
        };
        this.handleOnClick = this.handleOnClick.bind(this)
      }
   render() {
       
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

}
export default MoviePreference;