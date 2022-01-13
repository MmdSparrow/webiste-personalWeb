import {makeStyles} from "@material-ui/core";

const useStyles=makeStyles(()=>({
    licenseDiv:{
        display:"flex",
        justifyContent:"flex-end",
        alignItems:"flex-end",
        height:"7rem",
        paddingRight:"1rem",
        paddingBottom:"2rem",
        fontFamily:"roboto",
        fontSize:"20px",
        fontWeight:"bold",
        color:"white",
        backgroundColor:"transparent",
        backgroundImage: "linear-gradient(150deg, transparent 87%, rgb(0, 0, 0, 0.5) 5%, rgb(0, 128, 0, 0.6) 60%, rgb(0, 128, 0, 1) 100%)",
    },
}));

const CustomFooter=()=> {
    const classes=useStyles();
    return (
      <div className={classes.licenseDiv}>
          © 2022
      </div>
    );
}

export default CustomFooter;