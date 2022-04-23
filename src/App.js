import { Container } from "react-bootstrap"
import {
	MainSection,
	InfoSection,
	ProjectSection,
	ContectSection,
} from "./sections"

function App() {
	return (
		<>
			<Container>
				<MainSection />
				<InfoSection />
				<ProjectSection />
				<ContectSection />
			</Container>
		</>
	)
}

export default App
