import { Button, FormControl, FormControlLabel, FormHelperText, FormLabel, IconButton, Radio, RadioGroup } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAppContext } from '../../../context/state';

const RadioButtonQuestion = ({ question, handleChange }) => {
  return (<div key={question.name}>
    <FormLabel component="legend">{question.text}</FormLabel>
    <RadioGroup aria-label={question.name} name={question.name} defaultValue={question.answer} onChange={handleChange(question.name)}>
      {question.options.map(option => <FormControlLabel key={option.value} value={option.value} control={<Radio required={false} />} label={option.label} />)}
    </RadioGroup></div>
  );
}

const RadioButtonQuestions = ({ questions, ...props }) => {
  return questions.map(question => <RadioButtonQuestion key={question.name} question={question} {...props} />);
}

const DevResources = () => {
  const { applicationState, setApplicationState } = useAppContext();
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleChange = questionName => event => {

    const updateQuestionIndex = applicationState.questions.findIndex(question => question.name === questionName);

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

  const handleSubmit = event => {
    event.preventDefault();

    if (applicationState.questions.some(question => !question.answer)) {
      setError(true);
      return;
    }

    setError(false);
    router.push("skills");
  };

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
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" error={error}>
              <RadioButtonQuestions questions={applicationState.questions} handleChange={handleChange} />
              {error && (
                <FormHelperText>Please answer all the questions</FormHelperText>
              )}

              <Link href="/" passHref>
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
      </main>
    </div>
  );
};

export default DevResources;
