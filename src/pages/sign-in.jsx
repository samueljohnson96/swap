import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  
} from "@material-tailwind/react";
import { useRef, useState } from "react";
// import { Form } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from '../redux/actions/auth'
import CheckButton from "react-validation/build/button";
import { Navigate, useNavigate } from "react-router-dom";
import Form from "react-validation/build/form"



  export function SignIn() {
    let navigate = useNavigate();
    const form = useRef();
    const checkBtn = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { message } = useSelector(state => state.message);

    const handleLogin = (e) => {
      e.preventDefault();
        setLoading(true);
        // form.current.validateAll();
      if (checkBtn.current.context._errors.length === 0) {
        dispatch(login(email, password))
          .then(() => {
            // navigate("/profile");
            console.log('position', auth.user.position)
            window.location.reload();
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    };
    
    if (loading && auth.user) {
      // console.log('auth.user');
      return <Navigate to="/home" />;
    }
    

    return (
    <>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Form onSubmit={handleLogin}>
          <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input 
              variant="standard" 
              type="email" 
              label="Email" 
              size="lg" 
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                variant="standard"
                type="password" 
                label="Password"
                size="lg"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
              {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
            )}
            </CardBody>
            <CardFooter className="pt-0">
              <button variant="gradient" fullWidth>
                Sign In
              </button>
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <Link to="/sign-up">
                  <Typography
                    as="span"
                    variant="small"
                    color="blue"
                    className="ml-1 font-bold"
                  >
                    Sign up
                  </Typography>
                </Link>
              </Typography>
            </CardFooter>
          </Card>
        </Form>                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      </div>
    </>
  );
}

export default SignIn;
