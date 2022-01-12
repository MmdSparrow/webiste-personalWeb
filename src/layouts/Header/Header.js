// import * as React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';



// import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';      //contact mail
// import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';  //download
// import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined'; 	                //course
// import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';                //education
// import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';      //work



// import '../../fonts/Fonts.css'
//
//
// const sxStyles={
//     bottomNavigation:{
//         position: "relative",
//         // justifyContent: 'space-evenly',
//         width: '13rem',
//         backgroundColor: 'transparent',
//         marginLeft:"1rem",
//
//     },
//     bottomNavigationAction:{
//         color: "#efeaea",
//         fontFamily: "roboto",
//         fontSize:"30px",
//         '&:hover': {
//             transform: "scale(1.15)",
//         },
//         '&.MuiBottomNavigationAction-root.Mui-selected':{
//             transform: "scale(1.15)",
//             color: '#000000'
//         }
//     }
// };
//
//
//
//
// const HeaderNavbar=()=> {
//
//     const [value, setValue] = React.useState('');
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//         if(newValue!=='download' && newValue!==''){
//             document.getElementById(newValue).scrollIntoView({behavior:"smooth"})
//         }
//     };
//
//     const handleChangeScroll = (newValue) => {
//         setValue(newValue);
//         if(newValue!=='download' && newValue!==''){
//             document.getElementById(newValue).scrollIntoView({behavior:"smooth"})
//         }
//     };
//
//
//     $(window).scroll(function (){
//         var scrollLocation=$(this).scrollTop();
//         console.log("test....................")
//         if(scrollLocation<120){
//             handleChangeScroll('')
//         }
//     })
//
//     return (
//         <BottomNavigation className={'bottom-navigation'} sx={sxStyles.bottomNavigation} value={value} onChange={handleChange}>
//             <BottomNavigationAction
//                 sx={sxStyles.bottomNavigationAction}
//                 label="experience"
//                 value="experience"
//                 icon={<WorkOutlineOutlinedIcon />}
//             />
//             <BottomNavigationAction
//                 sx={sxStyles.bottomNavigationAction}
//                 label="education"
//                 value="education"
//                 icon={<SchoolOutlinedIcon />}
//             />
//             <BottomNavigationAction
//                 sx={sxStyles.bottomNavigationAction}
//                 label="courses"
//                 value="courses"
//                 icon={<ClassOutlinedIcon />}
//             />
//             <BottomNavigationAction
//                 sx={sxStyles.bottomNavigationAction}
//                 label="contact"
//                 value="contact"
//                 icon={<ContactMailOutlinedIcon />}
//             />
//             <BottomNavigationAction
//                 sx={sxStyles.bottomNavigationAction}
//                 label="download"
//                 value="download"
//                 icon={<CloudDownloadOutlinedIcon />}
//             />
//         </BottomNavigation>
//     );
// }
// export default HeaderNavbar;





import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';      //contact mail
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';  //download
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined'; 	                //course
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';                //education
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';      //work
import {makeStyles} from "@material-ui/core";


const sxStyle={
    appBarStyle:{
        backgroundColor: "transition",
    },
    IconStyle:{
        color:"green",
    },

}

const useStyles=makeStyles(()=>({
    divStyle:{
        // width:40,
        // height:40,
    }
}));

export default function ButtonAppBar() {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `download.txt`;
        link.href = "./download.txt";
        link.click();
    };

    const scrollToRef = (value) => {
        document.getElementById(value).scrollIntoView({behavior:"smooth"});
    };
    
    


    return (
        <Toolbar sx={sxStyle.appBarStyle}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={()=>scrollToRef('education')}
                sx={{ mr: 2 }}
            >
                <WorkOutlineOutlinedIcon sx={sxStyle.IconStyle} />
            </IconButton>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={()=>scrollToRef('education')}
                sx={{ mr: 2 }}
            >
                <SchoolOutlinedIcon sx={sxStyle.IconStyle} />
            </IconButton>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={()=>scrollToRef('courses')}
                sx={{ mr: 2 }}
            >
                <ClassOutlinedIcon sx={sxStyle.IconStyle}/>
            </IconButton>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={()=>scrollToRef('contact')}
                sx={{ mr: 2 }}
            >
                <ContactMailOutlinedIcon sx={sxStyle.IconStyle}/>
            </IconButton>

            <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={onDownload}
                sx={{ mr: 2 }}
            >
                <CloudDownloadOutlinedIcon sx={sxStyle.IconStyle}/>
            </IconButton>
        </Toolbar>
    );
}
