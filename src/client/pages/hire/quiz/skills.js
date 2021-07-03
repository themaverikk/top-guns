import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  GridList,
  IconButton,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAppContext } from '../../../context/state';
import SkillTile from '../../../Components/SkillTile';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const Skills = () => {
  const classes = useStyles();
  const { applicationState, setApplicationState } = useAppContext();

  const router = useRouter();
  const [error, setError] = useState(false);

  const toggleSkill = (selectedSkillIndex) => {
    const isSkillSelected =
      applicationState.skills[selectedSkillIndex].isSelected;
    const updatedSkill = {
      ...applicationState.skills[selectedSkillIndex],
      isSelected: !isSkillSelected,
    };

    setApplicationState({
      ...applicationState,

      skills: [
        ...applicationState.skills.slice(0, selectedSkillIndex),
        updatedSkill,
        ...applicationState.skills.slice(selectedSkillIndex + 1),
      ],
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const selectedSkills = applicationState.skills.filter(
      (skill) => skill.isSelected
    );

    if (!selectedSkills || selectedSkills.length < 1) {
      setError(true);
      return;
    }

    setError(false);

    router.push('/hire/contact');
  };

  return (
    <div>
      <Head>
        <title>James Bond Skills</title>
        <meta name="description" content="Hire Top Engineers Remotely" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
      <section id="business-plan" style={{padding: '0px'}}>
        <div className="row">
          <div className="col-lg-8 col-md-12 pl-0 pt-70 pr-5">
            <div style={{
                fontFamily: 'Maison-Bold',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <form onSubmit={handleSubmit}>
                  <FormControl component="fieldset" error={error}>
                    <Box component="div" display="block" className={classes.root}>
                      <GridList className={classes.gridList} cols={4}>
                        {applicationState.skills.map((skill, index) => (
                          <SkillTile
                            key={skill.id}
                            skill={skill}
                            toggleSkill={() => toggleSkill(index)}
                          />
                        ))}
                      </GridList>
                    </Box>
                    {error && (
                      <FormHelperText>Please select at least one skill</FormHelperText>
                    )}
                    <Link href="/hire/quiz/dev-resources" passHref>
                      <IconButton aria-label="back">
                        <ArrowBackIosIcon />
                      </IconButton>
                    </Link>
                    <Button type="submit" variant="contained" color="primary">
                      Next
                    </Button>
                  </FormControl>
                </form>
              </div>
          </div>

          <div className="row col-lg-4 col-md-12 pl-4 text-center" style={{background: 'linear-gradient(-1deg,#394458,#191e28 96%)', height:'637px' , minHeight: '100%', paddingTop: '100px', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '100px'}}>
            <div className="col-12 h6">TRUSTED BY</div>
            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{minHeight: '50px', minWidth: '100px'}}/></div>
            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{minHeight: '50px', minWidth: '100px'}}/></div>
            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{minHeight: '50px', minWidth: '100px'}}/></div>
            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{minHeight: '50px', minWidth: '100px'}}/></div>
            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{minHeight: '50px', minWidth: '100px'}}/></div>
            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{minHeight: '50px', minWidth: '100px'}}/></div>
            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{minHeight: '50px', minWidth: '100px'}}/></div>
            <div className="col-6"><img src="../../img/download.svg" className="img-fluid" alt="" style={{minHeight: '50px', minWidth: '100px'}}/></div>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default Skills;
