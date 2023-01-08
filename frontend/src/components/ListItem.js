import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box'
import dateFormat from 'dateformat';
import Button from "@mui/material/Button"

const useStyles = makeStyles({
    root: {
        padding: 20
    },
    paper: {
        alignContent: "start",
        borderRadius: '30px',
    },
    box: {
        display: "flex",
        flexDirection: "row"
    },
    title: {
        marginInlineStart: "1vw",
        marginInlineEnd: "1vw",
        width: "40vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        flexDirection: "column"
    },
    thumbnail: {
        width: "15vw",
        borderRadius: '5px'
    },
    button: {
        width: "5vw"
    }
});

const ListItem = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid>
                <Grid>
                    <Paper className={classes.paper}>
                        <Box className={classes.box}>
                            <img src={props.thumbnails.high.url} alt="thumbnail" className={classes.thumbnail}/>
                            <div className={classes.title}>
                                <h2><b>{props.title}</b></h2>
                                <h3>{"Published: " + dateFormat(props.publishedAt, "dddd, mmmm dS, yyyy HH:MM")}</h3>
                                <Button variant="outlined" color="success" className={classes.button} onClick={() => {
                                    window.open("https://www.youtube.com/watch?v=" + props.id, '_blank');
                                }}>
                                    Watch
                                </Button>
                            </div>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default ListItem;