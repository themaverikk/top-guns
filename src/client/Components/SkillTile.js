import { Box, GridListTile } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    tile: {
        width: "195px",
        boxShadow: "0 3px 10px 0 rgba(0,0,0,.09) !important",
        marginRight: "0",
        marginBottom: "11px",
        cursor: "pointer",
        borderRadius: "5px",
        backgroundColor: "#fff",
        fontWeight:"100",
        float:"right",
        padding: '10 10 10 10',
        boxShadow: '0 3px 10px 0 rgba(0, 0, 0, .09)!important',
        '&:hover': {
            borderStyle: 'solid',
            borderColor: '#007cfe!important',
            borderWidth: '1.2px',
        }
    },
    icon: {
        width: "30px",
        height: "30px",
        marginBottom: "px",
        float:"left"
    },
    selected: {
        backgroundColor: '#E9F9FF'
    }

}));
const SkillTile = ({ skill, toggleSkill }) => {
    const classes = useStyles();

    return (
        <GridListTile style={{height: '70px',minWidth:'200px',paddingTop:'15px'}} classes={{
            root: classes.root,
            tile: clsx(classes.tile, { [classes.selected]: skill.isSelected })
        }} cols={skill.cols || 1} onClick={toggleSkill} >
            <div className="row col-12" style={{height: '70px',minWidth:'200px'}}>
                <div className="col-4">
                    <img key={skill.img} src={skill.img} alt={skill.title} className={classes.icon} style={{marginTop:'10px'}} />
                </div>
                <div className="col-8 text-center">
                    <Box component="div" style={{paddingTop:'10px'}}>{skill.title}</Box>
                </div>
            </div>
        </GridListTile >
    );
}

export default SkillTile;
