const styles={
    canvasStyle:{
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
    },
}


const Background=()=>{
    const classes=styles
    return(
        <canvas className='connecting-dots'></canvas>
    );
}