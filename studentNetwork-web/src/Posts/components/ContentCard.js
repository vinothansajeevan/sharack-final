import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {t} from 'typy';
require('./app.scss');

require('../../Nav/app.scss');
const styles = theme => ({
    typography: {
        useNextVariants: false,
    },
    card: {
        maxWidth: 1000,
        marginTop:'50px',
    },
    media: {
        height: 0,
        paddingTop: '40%', // 16:9

    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class RecipeReviewCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes,postReducer } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader titleTypographyProps={{fontSize: 60}}
                            className={"card"}
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                            classes={{
                             title: classes.title,
                                    subheader: classes.subheader,
                                 }}
                    title={t(postReducer.author.name).safeObject}
                    subheader="September 14, 2016"
                />
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit >
                    <CardContent>
                        <Typography paragraph style={{fontSize: 15}}><b>Description:</b></Typography>

                        <Typography paragraph component="p" variant="subheading" style={{fontSize: 15}}>
                            {postReducer.body}
                        </Typography>

                    </CardContent>
                </Collapse>
                {/*<CardMedia*/}
                    {/*className={classes.media}*/}
                    {/*image="https://cdn.guidingtech.com/imager/media/assets/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_acdb3e4bb37d0e3bcc26c97591d3dd6b.jpg"*/}
                    {/*title="Paella dish"*/}
                {/*/>*/}
                <CardContent>
                    <Typography component="p" variant="subheading" style={{fontSize: 15}}>
                        {postReducer.title}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

            </Card>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);