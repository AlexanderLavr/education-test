import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }

}));

export default function SimpleModal(props) {
  const classes = useStyles();
  const { openModal, setAnswers, closeModal } = props;
  const [open, setOpen] = React.useState(openModal);
  useEffect(() => {
      setOpen(openModal);
  }, [openModal])

  const handleClose = () => {
    setOpen(false);
    closeModal()
  };

  const getContinue = () => {
    setAnswers()
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <p>
            Каждый не отвеченный ответ считается
            неправильным, Вы уверены что хотите продолжить?
          </p>
          <div className="button-container">
            <Button variant="contained" color="primary" onClick={handleClose}>Back</Button>
            <Button variant="contained" color="primary" onClick={getContinue}>Continue</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}