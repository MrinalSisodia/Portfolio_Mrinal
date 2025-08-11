import { Container, Button, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <section className="hero">
        <Container>
          <h1>Hi! I'm Mrinal</h1>
          <p className="lead">A passionate full-stack web developer building websites that solve real-world problems.</p>
          <Button variant="primary" href="/projects">My Projects</Button>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className='g-5'>
            <div className='col-md-6 me-4'> <h2>About Me</h2>
          <p>
            With a solid background in client solutions, I bring systems thinking to my dev practice & tackle every project with a broad outlook on use cases & value positioning. 
          </p></div>
          <div className='col-md-5'> 
            <h2>Tech Stack</h2>
          <p>
            I am proficient at using:</p>
            <ul>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Node.js</li>
               <li>Express</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
             
              
            </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
