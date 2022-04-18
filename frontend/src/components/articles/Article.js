import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Dialog } from '@mui/material';
import { DialogTitle } from '@mui/material';
import { DialogActions } from '@mui/material';
import axios from 'axios';

function ConfirmDialog({open,onClose}) {
  
  function handleCancel(){
    onClose(false)
  }
  
  function handleOk(){
    onClose(true)
  }

  return (
    <Dialog
      open={open}
    >
      <DialogTitle>
        Are you sure want to delete this article ?
      </DialogTitle>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleCancel}
        >
          Cancel
        </Button>

        <Button
          onClick={handleOk}
          href='/articles'
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default function Article({ article }) {

  const [openDialog, setOpenDialog] = React.useState(false)

  function handleButtonDelete(event) {
    setOpenDialog(true)
  }

  function handleClose(isDeleted) {
    setOpenDialog(false)
    if (!isDeleted) return  
    axios.delete(`/api/articles/delete/${article._id}`)
  }

  return (
    <>
      <Card
        sx={{ marginTop: "20px" }}
      >
        <CardActionArea
          href={`/articles/${article._id}`}
        >

          <CardMedia
            component="img"
          />

          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {article.title}
            </Typography>

            <Typography variant="h6" color="text.primary">
              Author : {article.author}
            </Typography>
            <br></br>
            <Typography variant="body3" color="text.secondary">
             {article.description}
            </Typography>
          </CardContent>

        </CardActionArea>

        <CardActions>
          <Button
            size="small"
            onClick={handleButtonDelete}
          >
            Delete
          </Button>
          <Button
            size="small"
            href={`/articles/edit/${article._id}`}
          >
            Edit
          </Button>
        </CardActions>

        <ConfirmDialog
          open={openDialog}
          onClose={handleClose}
        >
        </ConfirmDialog>
      </Card>

    </>
  );
}
