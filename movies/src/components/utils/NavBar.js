import {Header, Button, Menu, Grid, Divider} from 'semantic-ui-react';

function NavBar(props) {

    return (
    <Grid columns='1' >
        <Grid.Row >
            <Grid.Column >
            <Menu inverted color='blue' size='massive'>
                <Menu.Item header> <Header as='h1' style={{color:'white', marginLeft:'1'}}> DEMO Streaming</Header></Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button inverted>Sign Up</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button inverted>Login</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    );
}

export default NavBar;
