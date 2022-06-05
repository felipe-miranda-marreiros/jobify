import { Outlet, Link } from 'react-router-dom';
import Wrapper from '../../assets/wrappers/SharedLayout';

export const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="add-job">add job</Link>
        <Link to="all-jobs">all job</Link>
        <Outlet />
      </nav>
    </Wrapper>
  );
};
