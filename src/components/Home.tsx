import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon } from 'semantic-ui-react';
import Navbar from './Navbar';

export default function Home() {

    return (
        <>
            <Navbar />

            <div className='centerDiv'>
                <h1>Dobrodosli na web stranicu Meteoroloske stanice Beograd</h1>
                <Header as='h1' icon className="headerOptions">
                    <Icon name='snowflake' className="App-logo" />
                Vremenska prognoza
                <Header.Subheader style={{ color: "teal" }}>
                        Pratite podatke 24/7
                </Header.Subheader>
                </Header><br></br>
                <Button color='twitter' as={Link} to='/forecast'>
                    Idite na prognozu
            </Button>
            </div>
        </>
    )

}