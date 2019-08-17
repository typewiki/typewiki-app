import { LoginForm } from '../components/LoginForm';
import { reduxForm } from 'redux-form';

export default reduxForm({
  form: 'login'
})(LoginForm);
