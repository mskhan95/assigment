import React, { useState } from "react";
import {
  Heading,
  Input,
  Text,
  Button,
  Box,
  FormControl,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { SignUp } from "../Redux/Auth/auth.action";
import OTP from "./OTP";

const Login = () => {
  const [loginScreen, setLoginScreen] = useState(true);
  const [number, setNumber] = useState();
  const dispatch = useDispatch();

  function HandleSubmitNumber(number) {
    if (loginScreen && number.length === 10) {
      dispatch(SignUp({ phone: number, dial_code: "+91" })).then((res) => {
        if (res?.status === "Success") {
          alert("Otp has been sent", "success");
          setLoginScreen(false);
        } else {
          alert(res.error_message);
        }
      });
    } else if (number.length > 10 || number.length < 10) {
      alert("Enter Correct Number");
      return;
    } else {
      alert("Something went wrong");
      return;
    }
  }

  function HandleInputNumber(e) {
    let inputValue = e.target.value.replace(/\D/g, "");
    inputValue = inputValue.slice(0, 10);
    setNumber(inputValue);
  }

  return (
    <div>
      {loginScreen ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: "30%",
            justifyContent: "center",
          }}
        >
          <div>
            <Heading fontSize={"26px"} color={"#1E232C"}>
              Enter Your Mobile Number
            </Heading>
            <Text fontSize={"16px"} color={"#8391A1"} padding={"10px 0px"}>
              We will send you the 4 digit verification code
            </Text>
            <Box>
              <FormControl>
                <Input
                  onChange={(e) => {
                    HandleInputNumber(e);
                  }}
                  max={9999999999}
                  type="number"
                  height={"56px"}
                  bgColor={"#F7F8F9"}
                  placeholder="Enter Your Mobile Number"
                  margin={"20px 0px"}
                  border={"1px solid #DADADA"}
                  _placeholderShown={"#8391A1"}
                />
                <Button
                  onClick={() => HandleSubmitNumber(number)}
                  type="submit"
                  width={"100%"}
                  height={"56px"}
                  color={"white"}
                  colorScheme="#FF6D6A"
                  bgColor={"#FF6D6A"}
                >
                  Send Code
                </Button>
              </FormControl>
            </Box>
          </div>
        </div>
      ) : (
        <OTP
          login={loginScreen}
          setLogin={setLoginScreen}
          number={number}
          setNumber={setNumber}
        />
      )}
    </div>
  );
};

export default Login;
