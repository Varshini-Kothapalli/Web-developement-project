import React from "react";
import { Card, Row, Col, Badge, Button } from "react-bootstrap";

function CategoryPlacesList({ place }) {

  const tagsArray = place.tags ? place.tags.split("|") : [];

  return (
    <div style={{marginTop:"80px"}}>
    <Card className="my-4 shadow">
      <Row className="g-0">

        {place.image_url && (
          <Col md={4}>
            <Card.Img
              src={place.image_url}
              alt={place.name}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </Col>
        )}

        <Col md={place.image_url ? 8 : 12}>
          <Card.Body>
            <Card.Title>{place.name}</Card.Title>
            <Card.Text>{place.description}</Card.Text>

            <p>
              <strong>📍 Area:</strong> {place.area}
            </p>

            <p>
              <strong>⏰ Timings:</strong> {place.open_time} - {place.close_time}
            </p>

            <p>
              <strong>🎟 Entry Fee:</strong> ₹{place.entry_fee}
            </p>

            <p>
              <strong>🌤 Best Time:</strong> {place.best_time_to_visit}
            </p>

            <div className="mb-2">
              {tagsArray.map((tag, index) => (
                <Badge bg="info" className="me-2 p-2" key={index}>
                  {tag}
                </Badge>
              ))}
            </div>

          </Card.Body>
        </Col>

      </Row>
    </Card>
    </div>
  );
}

export default CategoryPlacesList;
