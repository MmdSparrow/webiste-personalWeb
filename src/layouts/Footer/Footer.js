import {makeStyles} from "@material-ui/core";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles=makeStyles(()=>({
    licenseDiv:{
        display:"flex",
        flexDirection:'column',
        justifyContent:"flex-end",
        alignItems:"flex-end",
        height:"9rem",
        paddingRight:"1rem",
        // paddingBottom:"2rem",
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
          <div>
              © 2022
          </div>
          <div>

              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  href={"https://github.com/MmdSparrow"}
                  target="_blank"
              >
                  <GitHubIcon/>
              </IconButton>


              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  href={"https://linkedin.com/in/sayed-mohammad-ali-mirkazemi-816a9b222"}
                  target="_blank"

              >
                  <LinkedInIcon/>
              </IconButton>

              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  href={"https://t.me/mmd_sparrow_137"}
                  target="_blank"

              >
                  <TelegramIcon/>
              </IconButton>

              <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  href={"https://www.instagram.com/mmd_sparrow_137"}
                  target="_blank"
              >
                  <InstagramIcon/>
              </IconButton>
          </div>
      </div>
    );
}

export default CustomFooter;