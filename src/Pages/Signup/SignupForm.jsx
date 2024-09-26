import React, { useState } from "react";
import {
  Container,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import FormField from "../../components/FormFields";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import CustomLoginButton from "../../components/LoginButton/LoginButton";
import { toast } from 'react-toastify'; 
function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [vtuno, setVtuno] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [mentorPhone, setMentorPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [year, setYear] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setError("");
    setSuccess("");
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = auth.currentUser;

      const docRef = doc(firestore, "Users", user.uid); // Create a reference to the document
      await setDoc(docRef, {
        name: name,
        phone: studentPhone,
        email: email,
        dob: dob,
        vtu_no: vtuno,
        mentor_name: mentorName,
        mentor_phone: mentorPhone,
        department: department,
        year: year,
      });

      toast.success("Account created and data saved successfully!"); // Show success toast
      navigate('/');
    } catch (err) {
      toast.error(`Error: ${err.message}`); // Show error toast
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Card
        elevation={6}
        sx={{
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Signup
        </Typography>
        <form onSubmit={handleSignup} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormField
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="VTU-Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="VTU-No"
                type="text"
                value={vtuno}
                onChange={(e) => setVtuno(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Phone"
                type="tel"
                value={studentPhone}
                onChange={(e) => setStudentPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="department-label">Department</InputLabel>
                <Select
                  labelId="department-label"
                  id="department"
                  value={department}
                  label="Department"
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <MenuItem value="CSE">CSE</MenuItem>
                  <MenuItem value="EEE">EEE</MenuItem>
                  <MenuItem value="AI&DS">AI&DS</MenuItem>
                  <MenuItem value="CIVIL">CIVIL</MenuItem>
                  <MenuItem value="MECH">MECH</MenuItem>
                  <MenuItem value="AUTO">AUTO</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth margin="normal">
                <InputLabel id="year-label">Year</InputLabel>
                <Select
                  labelId="year-label"
                  id="year"
                  value={year}
                  label="Year"
                  onChange={(e) => setYear(e.target.value)}
                >
                  <MenuItem value="I">I</MenuItem>
                  <MenuItem value="II">II</MenuItem>
                  <MenuItem value="III">III</MenuItem>
                  <MenuItem value="IV">IV</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="DOB"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Mentor Name"
                type="text"
                value={mentorName}
                onChange={(e) => setMentorName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormField
                label="Mentor Phone"
                type="tel"
                value={mentorPhone}
                onChange={(e) => setMentorPhone(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="success.main" sx={{ mt: 2 }}>
              {success}
            </Typography>
          )}
        </form>
      </Card>
    </Container>
  );
}

export default Signup;
