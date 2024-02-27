import React from "react";
import { Button, Container, FormControl, FormGroup, Form, Card, FormLabel } from "react-bootstrap";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}
) => {
  return (
    <>
      <Container className="d-flex align-items-cnter justify-content-center" style={{minHeight: "50vh"}}>
        <div className="w-100" style={{maxWidth: 400}}>
          <Card>
          <Card.Body>
          <h3 className="text-center">Add Contact</h3>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormControl value={name} onChange={e => setName(e.target.value)} type="text" required/>
            </FormGroup>
            <FormGroup>
              <FormLabel>Phone</FormLabel>
              <FormControl value={phone} onChange={e => setPhone(e.target.value)} type="tel"
              required/>
            </FormGroup>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormControl value={email} onChange={e => setEmail(e.target.value)} type="email" required
              />
              </FormGroup>
              <br />
              <Button className="w-100" type="submit" >Add Contact</Button>
          </Form>
          </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

