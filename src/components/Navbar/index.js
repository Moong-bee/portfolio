import { Navbar, Container } from "react-bootstrap"

export default () => {
	return (
		<Navbar expand="lg" variant="light" bg="light" fixed="top">
			<Container>
				<Navbar.Brand href="#">Navbar</Navbar.Brand>
			</Container>
		</Navbar>
	)
}
