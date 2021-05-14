import { FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import React from 'react';

const renderRadioButtonQuestion = question => {
  return (<div key={question.name}>
    <FormLabel component="legend">{question.text}</FormLabel>
    <RadioGroup aria-label={question.name} name={question.name} >
      {question.options.map(option => { return <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} /> })}
    </RadioGroup></div>
  );
}

const renderRadioButtonQuestions = questions => {
  return (questions.map(question => renderRadioButtonQuestion(question)));
}


const questions = [
  {
    text: "How many developers do you want to hire?",
    name: "developersCount",
    options: [
      {
        label: "One developer",
        value: "one_dev"
      },
      {
        label: "I need a team of developers",
        value: "dev_team"
      },
      {
        label: "I'll decide later",
        value: "undecided"
      },
    ]
  },
  {
    text: "How long do you need the developer?",
    name: "developersCount",
    options: [
      {
        label: "Less than 1 month",
        value: "less_than_month"
      }, {
        label: "1 to 3 months",
        value: "one_to_three_months"
      },
      {
        label: "3 to 6 months",
        value: "three_to_six_months"
      },
      {
        label: "Longer than 6 months",
        value: "more_than_six_months"
      },
      {
        label: "I'll decide later",
        value: "undecided"
      },
    ]
  }
]

const DevResources = () => {
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

export default DevResources;
