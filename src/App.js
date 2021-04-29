import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Skeleton from 'react-loading-skeleton';
import emailAddress from './pages/login';

const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import ('./pages/signup'));
const loadingSym = <Skeleton height={60} count={15}/> ;

function App() {
  return (
    <Router>
      <Suspense fallback={loadingSym}>
        <Switch>
          <Route path="/" component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
        </Switch>
      </Suspense>
    </Router>
  );
}
export default App;
