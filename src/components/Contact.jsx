import React from 'react';
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { FiPhoneCall } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>PK Pizza Shop</h1>
            <p>
            pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, 
            oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial 
            setting, using a wood-fired oven heated to a very high temperature—and served hot.

            Uncover the chemistry behind the delicious taste of pizza
            Uncover the chemistry behind the delicious taste of pizzaSee all videos for this article
            One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or 
            tomato sauce, mozzarella, and basil. Popular legend relates that it was named for Queen Margherita, wife of Umberto I, 
            who was said to have liked its mild fresh flavour and to have also noted that its topping colours—green, white, and red—were 
            those of the Italian flag.Italy has many variations of pizza. The Neapolitan pizza, or Naples-style pizza, is made specifically with buffalo mozzarella (produced from the milk of Italian Mediterranean buffalo) or fior di latte (mozzarella produced from the milk of prized Agerolese cows) and with San Marzano tomatoes or pomodorino vesuviano (a variety of grape tomato grown in Naples). Roman pizza often omits tomatoes (an early 16th-century import) and uses onions and olives. The Ligurian pizza resembles the pissaladière of Provence in France, adding anchovies to olives and onions.
            </p>

            <Table striped bordered hover className="text-center">
              <thead>
                <tr>
                  <th className="bg-warning text-center" colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <FiPhoneCall />
                  </td>
                  <td>Phone</td>
                  <td>9876543210</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Github</td>
                  <td><a href="https://github.com/pavithradeevi" target='_blank'>Pavithra Kamalakkannan</a></td>
                </tr>
                <tr>
                  <td>
                    <AiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>pavithradeevi@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="https://c.yell.com/t_galleryFit,f_auto/ca7a84cc-fee9-4517-921a-f33a0088ac64_image_jpeg.jpg"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};