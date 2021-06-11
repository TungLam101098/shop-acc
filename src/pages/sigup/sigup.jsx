import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography } from '@material-ui/core';
import { Register } from '../../components/register/register';
import { ConfirmEmail } from '../../components/confirmEmail/confirmEmail';
import { Link } from 'react-router-dom';

const steps = ['Register','Confirm Email'];

const Cofirmation = () => (
  <div>
    Đăng ký thành công!!! <Link to='/' style={{ color: 'blue' }}>Trang chủ</Link>
  </div>
)

const SigUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [informationUser, setInformationUser] = useState(null);

  const getDataFromRegister = (information) => {
    setInformationUser(information);
  }

  const Form = () => activeStep === 0
      ? <Register getDataFromRegister={getDataFromRegister} submitButton={() => setActiveStep(activeStep+1)} />
      : <ConfirmEmail data={informationUser} />
      
  return (
    <>
      <Paper>
        <Typography variant='h4' align='center'>Đăng ký</Typography>
        <Stepper activeStep={activeStep}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? <Cofirmation />: <Form />}
      </Paper>
    </>
  )
}

export default SigUp
