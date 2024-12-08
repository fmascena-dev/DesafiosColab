import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Section = styled.section`
  display: flex;
  width: 100%;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e0f7fa;

  img {
    max-width: 50%;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding: 2rem 5rem;
`;

export const DivTitles = styled.div`
  width: 70%;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: #000;
`;

export const Subtitle = styled.h2`
  margin-top: 1rem;
  font-size: 1.3rem;
  color: #000;
`;

export const Form = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const DivCheck = styled.div`
 display: flex;
 align-items:center;
 justify-content: space-between;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 0.3rem;
  }
`;

export const Link = styled.a`
  font-size: 1rem;
  color: rgba(30, 158, 106, 1);
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  color: #fff;
  background: #4caf50;
  border: none;
  border-radius: 4px;
  margin-top: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #43a020;
  }
`;

export const SecondaryButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: #000000;
  cursor: pointer;

  img {
    width: 5%;
  }

  &:hover {
    background: #000044;
  }
`;

export const SignUpLink = styled.p`
  position: fixed;
  bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  
  a {
    font-size: 1.2rem;
    color: rgba(30, 158, 106, 1);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
