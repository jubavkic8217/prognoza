import React from 'react';
import { Checkbox, Dropdown, Form, Header, Icon} from 'semantic-ui-react';

interface IProps {
    handleGradSelection(value:number):void,
    handleDanSelection(value:number):void,
    handleVlagaCheck(value:boolean):void,
    handlePritisakCheck(value:boolean):void,
    dan: number | undefined,
    grad: number | undefined,
    vlaga: boolean,
    pritisak: boolean
}

export default function CenterOptions(props: IProps) {

    const options = [
        { key: 1, text: 'Beograd', value: 1 },
        { key: 2, text: 'Subotica', value: 2 },
        { key: 3, text: 'Nis', value: 3 },
      ]

    const options2 = [
        { key: 1, text: 'Ponedeljak', value: 1 },
        { key: 2, text: 'Utorak', value: 2 },
        { key: 3, text: 'Sreda', value: 3 },
        { key: 4, text: 'Cetvrtak', value: 4 },
        { key: 5, text: 'Petak', value: 5 },
        { key: 6, text: 'Subota', value: 6 },
        { key: 7, text: 'Nedelja', value: 7 },
        { key: 8, text: 'Narednih 7 dana', value: 8 },
      ]
      

    return (
        <div className='centerDiv'>
            <Header as='h1' icon className="headerOptions">
                <Icon name='snowflake outline' className="App-logo"/>
                Vremenska prognoza po danima
                <Header.Subheader style={{color: "teal"}}>
                    Izaberite dan ili pratite podatke sa liste 
                </Header.Subheader>
            </Header>
            <Form>
                <Form.Field>
                    
                    <label style={{color: "teal"}}>Izaberite grad:</label>
                    <Dropdown options={options} selection onChange={(event,data) => {
                        props.handleGradSelection(data.value as number);
                    }}>
                    </Dropdown>
                    <label style={{color: "teal"}}>Izaberite dan:</label>
                    <Dropdown options={options2} selection onChange={(event,data) => {
                        props.handleDanSelection(data.value as number);
                    }} ></Dropdown>

                </Form.Field>   
                
                <Form.Field className="checkboxField">
                    <span style={{color: "teal"}}>Selektujte dodatne informacije za prikaz:</span><br></br>
                    <Checkbox label='Vlaga (%)' id='1' checked={props.vlaga} onChange={(event,data) => {
                        props.handleVlagaCheck(data.checked as boolean);
                    }}/><br></br> 
                    <Checkbox label='Pritisak (hPa)' id='2' checked={props.pritisak} onChange={(event,data) => {
                        props.handlePritisakCheck(data.checked as boolean);
                    }}/><br></br>  
                </Form.Field>
            </Form>
        </div>
    );

}