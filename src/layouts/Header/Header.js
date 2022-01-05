import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {makeStyles} from "@material-ui/core";
import styled from "@emotion/styled";



const useStyles=makeStyles(()=>({
    bottomNavigation:{
        position: 'relative',
        background: '#de0404',
        color: '#de0404',
    }
}));
//
// const MyComponent = styled('BottomNavigation')({
//     color: '#de0404',
//     backgroundColor: '#de0404',
// });

const LabelBottomNavigation=()=> {

    // const classes=useStyles();

    const [value, setValue] = React.useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation sx={{ position:'absolute', left:0,top: 20, width: '500em', backgroundColor:'transparent' }} value={value} onChange={handleChange}>
            <BottomNavigationAction
                label="Recents"
                value="recents"
                icon={<RestoreIcon />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={<LocationOnIcon />}
            />
            <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}
export default LabelBottomNavigation;