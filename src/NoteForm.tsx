import React from "react";
import { Col, Form, Row, Stack } from "react-bootstrap";

export const NoteForm = () => {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="rags">
              <Form.Label>Tags</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Col>
        </Row>
      </Stack>
    </Form>
  );
};
