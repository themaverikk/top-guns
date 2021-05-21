import { FormControl, FormControlLabel, FormHelperText, FormLabel, IconButton, Radio, RadioGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAppContext } from '../../../context/state';


const DevResources = () => {
  const router = useRouter()

  const { applicationState, setApplicationState } = useAppContext();
  const [error, setError] = useState(false);


  const handleChange = (questionId, event) => {

    const questionIndex = applicationState.questions.findIndex(question => question.name === questionId);
    const currentQuestion = applicationState.questions[questionIndex];

    setApplicationState({
      ...applicationState,
      questions: [
        ...applicationState.questions.slice(0, questionIndex),
        { ...currentQuestion, answer: event.target.value },
        ...applicationState.questions.slice(questionIndex + 1)
      ]
    });
  }

  const handleSubmit = event => {
    event.preventDefault();

    const invalidAnswer = applicationState.questions.find(questionAnswer => questionAnswer.answer === "");

    if (invalidAnswer) {
      setError(true);
      return;
    }

    router.push("/hire/quiz/skills");
  }

  const renderRadioButtonQuestion = question => {
    return (<div key={question.name}>
      <FormLabel component="legend">{question.text}</FormLabel>
      <RadioGroup aria-label={question.name} name={question.name} value={question.answer} onChange={(e) => handleChange(question.name, e)}>
        {question.options.map(option => { return <FormControlLabel key={option.value} value={option.value} control={<Radio required={true} />} label={option.label} /> })}
      </RadioGroup>
    </div>
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
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset" error={error}>
              {renderRadioButtonQuestions(applicationState.questions)}
              {error && <FormHelperText>All questions are mandatory</FormHelperText>}
              <Link href="/">
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
