import {Button, Menu, Grid, Header} from 'semantic-ui-react';

function TitleBar({section}) {
    return (
            <Header as='h1' style={{color:'white', backgroundColor:'black'}}> {section}</Header>
    );
}

export default TitleBar;
