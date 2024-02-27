import React, {useMemo} from "react";
import { Button, CardBody, Container, FormControl, FormGroup, FormLabel, Card, Form } from "react-bootstrap";
import {ContactPicker} from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => { 
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "50vh"}}>
        <div className="w-100" style={{maxWidth: 400}}>
        <Card>
          <CardBody>
            <h3 className="text-center">Add Appointment</h3>
            <Form >
              <FormGroup>
                <FormLabel>Appointment Title</FormLabel>
                <FormControl  
                type="text" 
                value={name} 
                name='name'
                onChange={e => setTitle(e.target.value)} 
                required/>
              </FormGroup>
              <FormGroup>
                <FormLabel>Contact</FormLabel>
                <ContactPicker 
                name='contact' 
                value={contact} 
                contacts={contactNames} 
                onChange={e => setContact(e.target.value)} 
                required/>
              </FormGroup>
              <FormGroup>
                <FormLabel>Date</FormLabel>
                <FormControl 
                type='date' 
                name="date"
                value={date} 
                onChange={e => setDate(e.target.value)} 
                min={getTodayString()} 
                required 
                aria-label="Date Picker"
                />
              </FormGroup>
              <FormGroup>
                  <FormLabel>Time</FormLabel>
                  <FormControl 
                  type='time' 
                  name="time"
                  value={time} 
                  onChange={e => setTime(e.target.value)} 
                  required
                  aria-label="Time Picker"
                  />
              </FormGroup>
            <br />
            <Button onClick={handleSubmit} aria-label="Add Appointment" type="button" className="w-100" value='addAppointment'>Submit</Button>
            </Form>
          </CardBody>
        </Card>
        </div>
      </Container>
    </>
  );
};
