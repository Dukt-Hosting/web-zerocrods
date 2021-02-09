import { Container, Nav, Row, Button } from 'react-bootstrap'
import styles from '../styles/Dashboard.module.css'
import { MonetizationOn, Speed } from '@material-ui/icons';

export default function SideBar(props) {
    return (
        <Container className={styles.sidenav}>
            <Row>
                <Nav defaultActiveKey={props.activekey} className="flex-column">
                    <Container style={{justifyContent: "center", padding:"2.5%"}}>
                        <h2>
                            ZeroCords
                        </h2>
                    </Container> {' '}<br/>
                    <Container>
                        <Button variant="primary"><Speed/> Dashboard </Button>
                    </Container> {' '}<br/>
                    <Container>
                        <Button variant="primary"><MonetizationOn/> Currency </Button>
                    </Container> {' '}<br/>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav>
            </Row>
        </Container>
    )
}