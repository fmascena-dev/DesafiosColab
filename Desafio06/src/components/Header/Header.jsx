import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
import './HeaderStyle.scss';

export default function Header() {
  return (
    <header>
      <h2>
        <LiaAngleLeftSolid />
        FelipeMascena/
        <LiaAngleRightSolid />
      </h2>
    </header>
  );
}
