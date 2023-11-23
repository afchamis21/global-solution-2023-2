import { Box, Typography, Grid, Paper } from '@mui/material';
import { membersData } from './members';

const Members = () => {
  return (
    <Box mt={4}>
      <Grid container spacing={3} justifyContent="center" >
        {membersData.map((member, index) => (
          <Grid item key={index} style={{ width: '25%', height: '25%' }}>
            <Paper elevation={3} style={{ padding: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="h6" align="center">
                {member.name}
              </Typography>
              <img
                src={member.undrawSvg}
                alt={member.name}
                style={{ width: 150, height: 150, marginBottom: 10 }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Members;