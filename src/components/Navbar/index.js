import { Navbar, Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import classNames from "classnames"
import "./index.scss"

const _Navbar = () => {
	const [scrollY, setScrollY] = useState(0)
	const [navbarClass, setNavbarClass] = useState(["navbar-transparent", ""])

	const listener = () => {
		setScrollY(window.pageYOffset)
	}

	useEffect(() => {
		window.addEventListener("scroll", listener)
		return () => {
			window.removeEventListener("scroll", listener)
		}
	})

	useEffect(() => {
		const find = navbarClass.indexOf("navbar-transparent")

		if (scrollY < 300) {
			if (find < 0) {
				const newClass = [...navbarClass, "navbar-transparent"]

				setNavbarClass(newClass)
			}
		} else {
			const newClass = navbarClass.filter(
				(e) => e !== "navbar-transparent"
			)
			setNavbarClass(newClass)
		}
	}, [scrollY])

	return (
		<Navbar expand="lg" fixed="top" className={classNames(navbarClass)}>
			<Container>
				<Navbar.Brand href="#">Navbar</Navbar.Brand>
			</Container>
		</Navbar>
	)
}

export default _Navbar
