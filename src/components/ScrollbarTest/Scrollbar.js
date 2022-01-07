import React from "react";
import { Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "&::-webkit-scrollbar": {
            width: 7,
        },
        "&::-webkit-scrollbar-track": {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "darkgrey",
            outline: `1px solid slategrey`,
        },
        height:"1000px",
    },
}));


const Customscroll= (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
        </Box>
    );
};
export default Customscroll;