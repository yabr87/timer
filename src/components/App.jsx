import Container from './Container/Container';
import Timer from './Timer';
import ReverseTimer from './ReverseTimer';

export const App = () => {
  return (
    <Container>
      <Timer />
      <ReverseTimer />
    </Container>
  );
};
