import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

function Copyright(props) {
	return (
	  <Typography variant="body2" color="text.secondary" align="center" {...props}>
		{/* {'Copyright © '} */}
		<Link color="inherit" to="/contact-us">
		  Contact Us
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	  </Typography>
	);
  }

export default function Footer(){
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
		{/* <Link to='/contact-us' replace style={{ textDecoration: 'none', cursor:'pointer' }}><Heading>Contact Us</Heading></Link> */}
		</Column>
		</Row>
		<Copyright sx={{ mt: 8, mb: 4 }} />
	</Container>
	</Box>
);
}
