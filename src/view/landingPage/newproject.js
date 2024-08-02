import React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';

function NewProject({ modalOpen, closeModal }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const amount = formData.get('amount');
    const date = formData.get('date');
    const received = formData.get('received');

    console.log('Name:', name);
    console.log('Amount:', amount);
    console.log('Date:', date);
    console.log('Received:', received);

    alert('Data submitted successfully');
    closeModal(); 
  };

  return(
    <Modal open={modalOpen} onClose={closeModal}>
        <ModalDialog>
            <DialogTitle>Create New Payment</DialogTitle>
            <DialogContent>Fill in the project details below.</DialogContent>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" required />
                </FormControl>
                <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <Input name="amount" type="number" required />
                </FormControl>
                <FormControl>
                    <FormLabel>Date</FormLabel>
                    <Input name="date" type="date" required />
                </FormControl>
                <FormControl>
                <FormLabel>Received By</FormLabel>
                    <Input name="received" as="select" required>
                    <option value="">Select an option</option>
                    <option value="accenture">Accenture</option>
                    <option value="tcs">TCS</option>
                    <option value="infosys">Infosys</option>
                    </Input>
                </FormControl>
                <Stack direction="row" spacing={1} justifyContent="flex-end">
                <Button variant="outlined"  color="neutral" onClick={closeModal}>
                     Discard
                </Button>
                <Button variant="contained" color="neutral" type="submit">
                  Save
                </Button>
            </Stack>
            </Stack>
            </form>
        </ModalDialog>
      </Modal>
    );
}

export default NewProject;
