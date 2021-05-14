import { FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import React from 'react';

const Skills = () => {

    return (
        <div>
            <Head>
                <title>Top Guns - Hire</title>
                <meta name="description" content="Hire Top Engineers Remotely" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div style={{
                    fontFamily: 'Maison-Bold',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <FormControl component="fieldset">
                        {renderRadioButtonQuestions(questions)}

                        <IconButton aria-label="back">
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Button variant="contained" color="primary">
                            Next
          </Button>
                    </FormControl>
                </div>
        hello
      </main>
        </div>
    );
};

export default Skills;
