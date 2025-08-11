import { Container, Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <section className="section">
      <Container>
        <h2>Contact Me</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Your email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Button variant="primary" type="submit">Send</Button>
        </Form>
      </Container>
    </section>
  );
}
