import React, { useState } from "react";
import { useAuth0 } from "../auth-service";
import { Checkbox, Row, Col } from 'antd';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button

} from "reactstrap";
const items = [
    'actions',
    'comedies',
    'romantic',
    'adventure',
    'musicals',
    'dramas',
    'horror',
    'scienceFiction'
  ];
const MoviePreference = () => {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
      }

      createCheckbox = label => (
        <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
            />
      )

    const { isAuthenticated } = useAuth0();
    const makeInscription  = () => {
        fetch("http://localhost:8080/api/movies",{mode: 'cors'})

        movies = 
        
        .then(res => res.json())
        .then(data => {
          console.log(data);
   
        })
        .catch(err => console.log(err));
        console.log("makingInscription")
       
    }
    //asd

    return (
        <>
            {isAuthenticated && (
                <Form>
                    <FormGroup check>
                        <Label check>
                            <Input key={label}zzonChange={event => setActions(event.target.value)} type="checkbox" />
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