import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Menu } from 'semantic-ui-react';

export default function Navbar() {

    return (

        <Menu borderless attached='top' className="navbar" secondary>
            <Menu.Item className="navbarItem">
                <Header textAlign='left'>
                    <Header.Content>Meteorološka stanica Beograd </Header.Content>
                    <Header.Subheader>Automatska stanica Košutnjak</Header.Subheader>
                </Header>
            </Menu.Item>
            <Menu.Item>
                <Button as={Link} to='/'>Pocetna</Button>
            </Menu.Item>
            <Menu.Item>
                <Button as={Link} to='/forecast'>Vremenska prognoza</Button>
            </Menu.Item>

        </Menu>
    );

}