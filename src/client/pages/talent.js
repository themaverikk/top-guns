import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { motion, AnimatePresence } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    gridTemplateColumns: "1fr 2fr 1fr",
    justifyItems: "center",
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    width: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  layout: {
    minHeight: 'max-content',
  }
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const [formPhase, setFormPhase] = useState(0);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // initial={{ x: '-100vw', opacity: 0 }}
  // animate={{ x: 0, opacity: 1 }}
  // transition={{
  //   duration: 0.4,
  //   ease: [0.7, 0, 0.05, 1],
  // }}
  // exit={{ x: '100vw', opacity: 0 }}
  // key="hello"
  // position="layout"

  const variants = {
    enter: {
      x: '-100vw', opacity: 0,
    },
    exit: {
      x: '100vw', opacity: 0
    },
    animate: {
      x: 0, opacity: 1
    },
    transition: {
      duration: 0.4,
      ease: [0.7, 0, 0.05, 1],
    },
    position: 'layout'
  }

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <div></div>
      <div>



        <AnimatePresence exitBeforeEnter>

          {formPhase === 0 && (
            <motion.div
              variants={variants}
              initial="enter"
              exit="exit"
              animate="animate"
              transition="transition"
              key={formPhase}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={gilad}
                        onChange={handleChange}
                        name="gilad"
                      />
                    }
                    label="Gilad Gray"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={jason}
                        onChange={handleChange}
                        name="jason"
                      />
                    }
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={antoine}
                        onChange={handleChange}
                        name="antoine"
                      />
                    }
                    label="Antoine Llorc11a"
                  />
                </FormGroup>
              </FormControl>
            </motion.div>
          )}


          {formPhase === 1 && (
            <motion.div
              variants={variants}
              initial="enter"
              exit="exit"
              animate="animate"
              transition="transition"
              key={formPhase}
            >
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={gilad}
                        onChange={handleChange}
                        name="gilad"
                      />
                    }
                    label="adsadasd Gray"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={jason}
                        onChange={handleChange}
                        name="jason"
                      />
                    }
                    label="Jason Killian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={antoine}
                        onChange={handleChange}
                        name="antoine"
                      />
                    }
                    label="Antoine Llorc11a"
                  />
                </FormGroup>
              </FormControl>
            </motion.div>
          )}
        </AnimatePresence>



        <div className={classes.button}>
          {formPhase > 0 && (
            <Button
              onClick={() => setFormPhase((currentPhase) => currentPhase - 1)}
              variant="contained"
              color="secondary"
              className={classes.cancelButton}
            >
              Cancel
            </Button>
          )}
          <Button
            fullWidth={formPhase === 0}
            onClick={() => setFormPhase((currentPhase) => currentPhase + 1)}
            variant="contained"
            color="primary"
          >
            Next
        </Button>
        </div>

      </div>
      <div></div>
    </div>
  );
}
