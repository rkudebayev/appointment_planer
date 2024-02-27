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
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Appointment Name</FormLabel>
                <FormControl  type="text" value={name} onChange={e => setTitle(e.target.value)} required/>
              </FormGroup>
              <FormGroup>
                <FormLabel>Contact</FormLabel>
                <ContactPicker name='contact' value={contact} contacts={contactNames} onChange={e => setContact(e.target.value)} required/>
              </FormGroup>
              <FormGroup>
                <FormLabel>Date</FormLabel>
                <FormControl name={date} value={date} onChange={e => setDate(e.target.value)} min={getTodayString()} required/>
              </FormGroup>
              <FormGroup>
                  <FormLabel>Time</FormLabel>
                  <FormControl name={time} value={time} onChange={e => setTime(e.target.value)} />
              </FormGroup>
            <br />
            <Button type="button" className="w-100">Submit</Button>
            </Form>
          </CardBody>
        </Card>
        </div>
      </Container>
    </>
  );
};
