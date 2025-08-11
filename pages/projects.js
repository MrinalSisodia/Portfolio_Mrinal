import { Container, Card, Row, Col, Button } from 'react-bootstrap';

export default function Projects() {
  return (
    <section className="section">
      <Container>
        <h2 className="my-5">My Projects</h2>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="/placeholder.png" />
              <Card.Body>
                <Card.Title>ECommerce Website</Card.Title>
                <Card.Text>A webiste to browse through, wishlist & order products.</Card.Text>
                <Button variant="primary" href="#">Live Demo</Button>
              </Card.Body>
            </Card>
          </Col>
           <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="/placeholder.png" />
              <Card.Body>
                <Card.Title>Anvaya CRM</Card.Title>
                <Card.Text>A lead management CRM to manage leads in the pipeline, sales agents & easy-to-view data reporting.</Card.Text>
                <Button variant="primary" href="#">Live Demo</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
