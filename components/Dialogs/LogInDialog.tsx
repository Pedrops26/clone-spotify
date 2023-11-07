import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/Button';

interface LogInDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const LogInDialog = ({ open, setOpen }: LogInDialogProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle className='bg-mid-gray'>
        <span>Titulo del dialogo</span>
      </DialogTitle>
      <DialogContent className='bg-mid-gray'>
        <div className='flex flex-col gap-2'>
          <span>Contenido del dialogo</span>
          <div className='flex gap-2 justify-center'>
            <Button
              text='Log in'
              type='secondary'
              handleClick={() => {
                setOpen(true);
              }}
            />
            <Button
              text='Close'
              type='secondary'
              handleClick={() => {
                setOpen(false);
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { LogInDialog };
