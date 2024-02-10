import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
// import PHPForm from "../components/form/PHForm";
// import PHPInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     id: "",
  //     password: "",
  //   },
  // });
  // const { register } = useFormContext();
  const defaultValues = {
    id: "hello",
    password: "password",
  };
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    toast.loading("Loading...", { id: "login-loading-toast" });
    console.log(data);
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Login Successful", {
        id: "login-loading-toast",
        duration: 2000,
      });
      navigate(`/${user?.role}/dashboard`);
    } catch (error) {
      toast.error("Invalid Credentials", {
        id: "login-loading-toast",
        duration: 2000,
      });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      {/* <h1>Login</h1>
      <hr />
      <p>Please enter your ID and Password to login.</p>
      <hr />
      <p>
        If you are a new user, please{" "}
        <a href="/register" target="_blank">
          register
        </a>{" "}
        first.
      </p>
      <hr />
      <p>
        If you are a new user, please{" "}
        <a href="/register" target="_blank">
          register
        </a>{" "}
        first.
      </p>
      <hr />
      <p>
        If you are a new user, please{" "}
        <a href="/register" target="_blank">
          register
        </a>{" "}
        first.
      </p>
      <hr />
      <p>
        If you are a new user, please{" "}
        <a href="/register" target="_blank">
          register
        </a>{" "}
        first.
        </p> */}
      <PHForm onSubmit={onSubmit}>
        {/* <div> */}
        {/* <label htmlFor="id">ID:</label> */}
        {/* <input type="text" id="id" {...register("id")} /> */}
        <PHInput type="text" name="id" label="ID:" />
        {/* </div> */}
        {/* <div> */}
        {/* <label htmlFor="password">Password:</label> */}
        {/* <input type="password" id="password" {...register("password")} /> */}
        <PHInput type="text" name="password" label="Password:" />
        {/* </div> */}

        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
