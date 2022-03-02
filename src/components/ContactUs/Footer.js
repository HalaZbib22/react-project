import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import {Link} from 'react-router-dom';

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink >Aim</FooterLink>
			<FooterLink >Vision</FooterLink>
			<FooterLink >Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink >Writing</FooterLink>
			<FooterLink >Internships</FooterLink>
			<FooterLink >Coding</FooterLink>
			<FooterLink >Teaching</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="https://www.facebook.com/" target="_blank">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/" target="_blank">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.twitter.com/" target="_blank">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.youtube.com/" target="_blank">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
		<Link to='/contactus' replace style={{ textDecoration: 'none' }}><Heading>Contact Us</Heading></Link>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
