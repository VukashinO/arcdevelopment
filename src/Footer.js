import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import footerAdornment from './assets/Footer Adornment.svg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.common.blue,
		width: '100%',
		zIndex: 1302,
		position: 'relative',
	},
	adornment: {
		width: '25em',
		verticalAlign: 'bottom',
		[theme.breakpoints.down('md')]: {
			width: '21em',
		},
		[theme.breakpoints.down('xs')]: {
			width: '15em',
		},
	},
	mainContainer: {
		position: 'absolute',
	},
	link: {
		color: 'white',
		fontFamily: 'Arial',
		fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem: {
        margin: "3em"
    }
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Grid container className={classes.mainContainer} justify='center'>
				<Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid component={Link} to='/' item className={classes.link}>Home</Grid>
					</Grid>
				</Grid>

                <Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid component={Link} to='/services' item className={classes.link}>Services</Grid>
						<Grid component={Link} to='/customsoftware' item className={classes.link}>Custom Software Development</Grid>
						<Grid component={Link} to='/mobileapps' item className={classes.link}>Mobile App Development</Grid>
						<Grid component={Link} to='/websites' item className={classes.link}>Website Development</Grid>
					</Grid>
				</Grid>

                <Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid component={Link} to='/revolution' item className={classes.link}>The Revolution</Grid>
						<Grid component={Link} to='/revolution' item className={classes.link}>Vision</Grid>
						<Grid component={Link} to='/revolution' item className={classes.link}>Technology</Grid>
						<Grid component={Link} to='/revolution' item className={classes.link}>Process</Grid>
					</Grid>
				</Grid>

                <Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid component={Link} to='/about' item className={classes.link}>About Us</Grid>
						<Grid component={Link} to='/about' item className={classes.link}>History</Grid>
						<Grid component={Link} to='/about' item className={classes.link}>Team</Grid>
					</Grid>
				</Grid>

                <Grid item className={classes.gridItem}>
					<Grid container direction="column" spacing={2}>
						<Grid component={Link} to='/contact' item className={classes.link}>Contact Us</Grid>
					</Grid>
				</Grid>
			</Grid>
			<img
				alt='black decorative slash'
				src={footerAdornment}
				className={classes.adornment}
			/>
		</footer>
	);
};

export default Footer;
