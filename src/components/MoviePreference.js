import React, { useState } from "react";
import { useAuth0 } from "../auth-service";
import { Checkbox, Row, Col } from 'antd';
import 'antd/dist/antd.css';

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
      const [state, setState] = useState([]);
    
   const createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    )

    const { isAuthenticated } = useAuth0();
    const { user } = useAuth0();
    console.log(user)
    
    const makeInscription = () => {
        const url = 'http://localhost:8080/api/movies';
        let email= user.email;
        let typeOfMovies = state.movie.join (',');
        let data = {
            email,
            typeOfMovies

        }
        console.log(data);
        
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response))
        
     
       
        

    }
    
    function onChange(movie) {
        setState({movie});
        console.log('checked = ', movie);
        console.log(state);
    
        
        
      }
    return (
        <>
            {isAuthenticated && (
                <Form>
                    <Checkbox.Group style={{ width: '100%' }} onChange={onChange} >
                        <Row>
                            <Col span={8}>
                                <Checkbox value="actions">actions</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="comedies">comedies</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="romantic">romantic</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="adventure">adventure</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="musicals">musicals</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="dramas">dramas</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="horror">horror</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="scienceFiction">scienceFiction</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>,
                <Button onClick={makeInscription}>Inscripción
                    </Button>
                </Form >
    )
}

        </>

    )

}
export default MoviePreference;