import React from "react";
import { useAuth0 } from "../auth-service";

import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
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
               Check me out
             </Label>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form >
            )}

        </>

    )

}
export default MoviePreference;