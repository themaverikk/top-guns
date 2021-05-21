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
    },
    icon: {
        width: "30px",
        height: "30px",
        marginBottom: "8px"
    },
    selected: {
        backgroundColor: 'red',
    }

}));
const SkillTile = ({ skill, toggleSkill }) => {
    const classes = useStyles();

    return (
        <GridListTile classes={{
            root: classes.root,
            tile: clsx(classes.tile, { [classes.selected]: skill.isSelected })
        }} cols={skill.cols || 1} onClick={toggleSkill} >
            <img key={skill.img} src={skill.img} alt={skill.title} className={classes.icon} />
            <Box component="div" display="block">{skill.title}</Box>
        </GridListTile >
    );
}

export default SkillTile;
