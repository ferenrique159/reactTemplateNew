import { MailOutline } from "@mui/icons-material"
import { Box, CircularProgress, Typography } from "@mui/material"

const JournalPage = () => {


  return (
    <>
      <Typography variant='h5'>JournalPage</Typography>
      <MailOutline/>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </>
  )
}

export {
    JournalPage
} 