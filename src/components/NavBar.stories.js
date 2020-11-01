import React from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink } from 'reactstrap'
import { OutlineSecondary } from './Button.stories'

export default {
    title : 'Bar'
}

export const HeaderBar = ({isLogin}) => {
    return(
        <Navbar color="light" light expand="md">
            <NavbarBrand href="#">Book List</NavbarBrand>
            <Collapse  navbar>
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Users</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Books</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Transactions</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Shops</NavLink>
                    </NavItem>
                </Nav>
                {isLogin && <NavbarText style={{marginRight:'10px'}}>User Name</NavbarText>}
                <OutlineSecondary>
                    {isLogin ? 'Logout' : 'Login'}
                </OutlineSecondary>
            </Collapse>
        </Navbar>   
    )
}
HeaderBar.defaultProps = {
    isLogin : false
}

export const LougotHeaderBar = () => <HeaderBar isLogin={true}/>

