import { FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import React from 'react';
import { useAppContext } from '../../../context/state';

const DevResources = () => {
  const { applicationState, setApplicationState } = useAppContext();

  const handleChange = questionName => event => {

    const updateQuestionIndex = applicationState.questions.findIndex(question => question.name === questionName);
    console.log("questionName: ", questionName, " ,updateQuestionIndex: ", updateQuestionIndex)

    if (updateQuestionIndex > -1) {
      const updatedQuestion = { ...applicationState.questions[updateQuestionIndex], answer: event.target.value };

      setApplicationState({
        ...applicationState,
        questions: [
          ...applicationState.questions.slice(0, updateQuestionIndex),
          updatedQuestion,
          ...applicationState.questions.slice(updateQuestionIndex + 1),
        ],
      });
    }
  }

  const renderRadioButtonQuestion = question => {
    return (<div key={question.name}>
      <FormLabel component="legend">{question.text}</FormLabel>
      <RadioGroup aria-label={question.name} name={question.name} onChange={handleChange(question.name)}>
        {question.options.map(option => <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />)}
      </RadioGroup></div>
    );
  }

  const renderRadioButtonQuestions = questions => {
    return (questions.map(question => renderRadioButtonQuestion(question)));
  }

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
            {renderRadioButtonQuestions(applicationState.questions)}
            <IconButton aria-label="back">
              <ArrowBackIosIcon />
            </IconButton>
            <Button variant="contained" color="primary">
              Next
            </Button>
          </FormControl>
        </div>
      </main>
    </div>
  );
};

export default DevResources;
