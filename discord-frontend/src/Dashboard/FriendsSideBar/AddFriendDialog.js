import React, { useEffect, useState } from 'react'
import {validateMail} from '../../shared/utils/validators'
import Dialog  from '@mui/material/Dialog'
import {DialogTitle} from '@mui/material'
import  DialogActions  from '@mui/material/DialogActions'
import  DialogContent  from '@mui/material/DialogContent'
import  DialogContentText  from '@mui/material/DialogContentText'
import { Typography } from '@mui/material'
import InputLabel from '../../shared/components/InputLabel'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'

const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => {}
}) => {
    const [mail, setMail] = useState('')
    const [isFormValid, setIsFormValid] = useState('')

    const handleSendInvitation = () => {
        // send friend request to server
    }

    const handleCloseDialog = () => {
        closeDialogHandler()
        setMail('')
    }

    useEffect(() => {
        setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid])

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter email address of friend to invite.</Typography>
          </DialogContentText>
          <InputLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton 
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label='Send'
            additionalStyles={{
              marginLeft: "15px",
              marginRight: "15px",
              marginBottom: "10px",
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AddFriendDialog