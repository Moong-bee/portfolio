import { Navbar, Container } from "react-bootstrap"
import { useEffect, useState } from "react"
import classNames from "classnames"
import "./index.scss"

const _Navbar = ({ mode = "fixed" }) => {
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
	}, [])

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

	if (mode === "fixed") {
		return (
			<Navbar expand="lg" className={classNames(navbarClass)} fixed="top">
				<Container>
					<Navbar.Brand href="#">Navbar</Navbar.Brand>
				</Container>
			</Navbar>
		)
	} else if (mode === "sticky") {
		return (
			<Navbar
				expand="lg"
				className={classNames(navbarClass)}
				sticky="top"
			>
				<Container>
					<Navbar.Brand href="#">Navbar</Navbar.Brand>
				</Container>
			</Navbar>
		)
	}
}

export default _Navbar
