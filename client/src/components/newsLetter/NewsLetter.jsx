import { Container, Form, SubTitle, Title } from "./newsLatter-styles.";
import { MdSend } from "react-icons/md";

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <SubTitle>Get timely updates from your favorite products</SubTitle>

      <Form>
        <input placeholder="Your email" type="text" />
        <button>
          <MdSend />
        </button>
      </Form>
    </Container>
  );
};

export default NewsLetter;
