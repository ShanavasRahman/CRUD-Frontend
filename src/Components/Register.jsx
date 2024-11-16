import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const userObj = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [user, setUser] = useState(userObj);

  function handleForm(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  console.log(user);
  const navigate = useNavigate();
    const submitForm = async (e) => {
      console.log(user)
    e.preventDefault();
    await axios
      .post("http://localhost:3000/api/signup", user)
      .then((res) => {
        toast.success(res.data.message, { position: "top-right" });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message, { position: "top-right" });
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-gray-50">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to SignUp.
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={submitForm}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              type="text"
              name="name"
              onChange={handleForm}
              size="lg"
              placeholder="Enter your name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              type="email"
              name="email"
              onChange={handleForm}
              size="lg"
              placeholder="example@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              onChange={handleForm}
              name="password"
              size="lg"
              placeholder="Enter password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Confirm Password
            </Typography>
            <Input
              type="password"
              name="confirmPassword"
              onChange={handleForm}
              size="lg"
              placeholder="Re-enter your password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button className="mt-6" fullWidth type="submit">
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Register;
