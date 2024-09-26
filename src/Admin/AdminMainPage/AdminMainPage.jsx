
import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Box,
  InputAdornment,
  IconButton
} from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../../firebase/firebase'; 
import { toast } from 'react-toastify'; 
import UploadIcon from '@mui/icons-material/Upload';
const AdminMainPage = () => {
    const [title, setTitle] = useState('');
    const [logoImage, setLogoImage] = useState('');
    const [bannerImage, setBannerImage] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [venue, setVenue] = useState('');
    const [noOfDays, setNoOfDays] = useState('');
    const [noOfStudentRegistered, setNoOfStudentRegistered] = useState('');
    const [studentSlot, setStudentSlot] = useState('');
    const [resourcePerson, setResourcePerson] = useState('');
    const [resourcePersonDesignation, setResourcePersonDesignation] = useState('');
    const [resourcePersons, setResourcePersons] = useState([{ resourcePersonName: '', designation: '' }]);
    const [eventCoordinator, setEventCoordinator] = useState('');
    const [eventCoordinatorDesignation, setEventCoordinatorDesignation] = useState('');
    const [eventCoordinators, setEventCoordinators] = useState([{ eventCoordinatorName: '', designation: '' }]);
  
    const handleResourcePersonChange = (index, field, value) => {
      const newResourcePersons = [...resourcePersons];
      newResourcePersons[index][field] = value;
      setResourcePersons(newResourcePersons);
    };
  
    const handleEventCoordinatorChange = (index, field, value) => {
      const newEventCoordinators = [...eventCoordinators];
      newEventCoordinators[index][field] = value;
      setEventCoordinators(newEventCoordinators);
    };
  
    const handleAddResourcePerson = () => {
        setResourcePersons([...resourcePersons, { resourcePersonName: '', designation: '' }]);
      };
  
    const handleAddEventCoordinator = () => {
      setEventCoordinators([...eventCoordinators, { eventCoordinatorName: '', designation: '' }]);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const eventsCollection = collection(firestore, 'events');
        await addDoc(eventsCollection, {
          title,
          logoImage,
          bannerImage,
          eventDetails: {
            startDate,
            endDate,
            startTime,
            endTime,
            venue,
            noOfDays,
            noOfStudentRegistered,
            studentSlot,
          },
          resourcePerson,
          resourcePersonDesignation,
          resourcePersons,
          eventCoordinator,
          eventCoordinatorDesignation,
          eventCoordinators,
        });
  
        toast.success('Event created successfully!');
        
        setTitle('');
        setLogoImage('');
        setBannerImage('');
        setStartDate('');
        setEndDate('');
        setStartTime('');
        setEndTime('');
        setVenue('');
        setNoOfDays('');
        setNoOfStudentRegistered('');
        setStudentSlot('');
        setResourcePerson('');
        setResourcePersonDesignation('');
        setResourcePersons([{ resourcePersonName: '', designation: '' }]);
        setEventCoordinator('');
        setEventCoordinatorDesignation('');
        setEventCoordinators([{ eventCoordinatorName: '', designation: '' }]);
      } catch (err) {
        toast.error(`Error: ${err.message}`);
      }
    };
  
    return (
      <Container component="main" maxWidth="md">
        <Typography variant="h4" gutterBottom>
          Create Event
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Title"
                fullWidth
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Logo Image URL"
                fullWidth
                required
                value={logoImage}
                onChange={(e) => setLogoImage(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="upload"
                        component="label"
                      >
                        <UploadIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Banner Image URL"
                fullWidth
                required
                value={bannerImage}
                onChange={(e) => setBannerImage(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        aria-label="upload"
                        component="label"
                      >
                        <UploadIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="End Date"
                type="date"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Time"
                type="time"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="End Time"
                type="time"
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Venue"
                fullWidth
                required
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Number of Days"
                type="number"
                fullWidth
                required
                value={noOfDays}
                onChange={(e) => setNoOfDays(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Number of Students Registered"
                type="number"
                fullWidth
                required
                value={noOfStudentRegistered}
                onChange={(e) => setNoOfStudentRegistered(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Student Slot"
                type="number"
                fullWidth
                required
                value={studentSlot}
                onChange={(e) => setStudentSlot(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Resource Person"
                fullWidth
                required
                value={resourcePerson}
                onChange={(e) => setResourcePerson(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Resource Person Designation"
                fullWidth
                required
                value={resourcePersonDesignation}
                onChange={(e) => setResourcePersonDesignation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Resource Persons</Typography>
              {resourcePersons.map((person, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={`Resource Person ${index + 1} Name`}
                      fullWidth
                      value={person.resourcePersonName}
                      onChange={(e) => handleResourcePersonChange(index, 'resourcePersonName', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={`Resource Person ${index + 1} Designation`}
                      fullWidth
                      value={person.designation}
                      onChange={(e) => handleResourcePersonChange(index, 'designation', e.target.value)}
                    />
                  </Grid>
                </Grid>
              ))}
              <Button onClick={handleAddResourcePerson} variant="outlined" sx={{ mt: 2 }}>
                Add Another Resource Person
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Event Coordinators</Typography>
              {eventCoordinators.map((coordinator, index) => (
                <Grid container spacing={2} key={index}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={`Event Coordinator ${index + 1} Name`}
                      fullWidth
                      value={coordinator.eventCoordinatorName}
                      onChange={(e) => handleEventCoordinatorChange(index, 'eventCoordinatorName', e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label={`Event Coordinator ${index + 1} Designation`}
                      fullWidth
                      value={coordinator.designation}
                      onChange={(e) => handleEventCoordinatorChange(index, 'designation', e.target.value)}
                    />
                  </Grid>
                </Grid>
              ))}
              <Button onClick={handleAddEventCoordinator} variant="outlined" sx={{ mt: 2 }}>
                Add Another Event Coordinator
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Box mt={2}>
                <Button type="submit" variant="contained" color="primary">
                  Create Event
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
  
export default AdminMainPage;