import { Container, Row, Col } from "react-bootstrap";

export default function HomePage(){
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="mb-3">Bine ai venit pe React CRUD!</h1>
          <h4 className="mb-4 text-muted">Gestionare utilizatori rapid și eficient</h4>
          <p>
            Această aplicație demonstrează cum poți crea, edita, vizualiza și 
            șterge utilizatori folosind React, TypeScript și React Bootstrap. Navighează prin meniul de sus pentru a explora funcționalitățile!
          </p>
        </Col>
      </Row>
    </Container>
  )
}