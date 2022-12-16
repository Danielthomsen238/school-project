import { StyledEvent } from '../assets/Styles/StyledComponents';

const Event = () => {
  return (
    <StyledEvent>
      <div className="type">50+</div>
      <div className="info">
        <p>address</p>
        <p>time</p>
      </div>
      <div className="runners">runners</div>
      <div className="sign_up">+</div>
    </StyledEvent>
  );
};

export default Event;
