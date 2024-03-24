import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Signin, SignUp } from "../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";
import {
  Heading,
  Text,
  Button,
  HStack,
  PinInput,
  PinInputField,
  FormControl,
  Center,
  Box,
} from "@chakra-ui/react";

const OTP = ({ login, setLogin, number }) => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function HandleSubmitPassword(password, number) {
    if (password.length === 6 && password === "123456") {
      dispatch(Signin({ phone: number, otp: password, dial_code: "+91" }))
        .then((res) => {
          if (res?.status === "Success") {
            navigate("/products");
          }
          if (res?.status === "Failed") {
            alert(res);
          }
        })
        .catch((err) => {
          console.log(err, "Errrrrrrrrrr");
          alert("Something went wrong");
        });
    } else if (password.length === 6 && password !== "123456") {
      alert("Enter Correct OTP");
    } else if (password.length < 6) {
      alert("Enter 6 Digit OTP");
    } else {
      alert("Somthing went wrong");
    }
  }

  function HandleResend() {
    if (!login) {
      dispatch(SignUp({ phone: number, dial_code: "+91" })).then((res) => {
        if (res?.status === "Success") {
          setPassword("");
          setLogin(false);
          alert("Otp has been sent", "success");
        }
      });
    }
  }

  const handleInputChange = (index, value) => {
    const newPassword = [...password];
    newPassword[index] = value;
    setPassword(newPassword.join(""));
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      const newPassword = [...password];
      newPassword[index] = "";
      setPassword(newPassword.join(""));
    }
  };

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      navigate("/products");
    }
    navigate("/");
  }, [token]);

  return (
    <div>
      <Box
        onClick={() => {
          setLogin(true);
        }}
        w={"41px"}
        h={"41px"}
        borderRadius={"12px"}
        border={"1px solid #E8ECF4"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        marginLeft={4}
        marginTop={4}
        marginBottom={"200px"}
      >
        <FaAngleLeft />
      </Box>
      <Heading fontSize={"26px"} color={"#1E232C"}>
        OTP Verification
      </Heading>
      <Text fontSize={"16px"} color={"#8391A1"} padding={"10px 0px"}>
        Enter the verification code we just sent on your Mobile Number.
      </Text>

      <FormControl>
        <Center>
          <HStack
            padding={"20px 0px"}
            height={"60px"}
            placeholder="Enter your email"
            margin={"20px 0px"}
            _placeholderShown={"#8391A1"}
          >
            <PinInput placeholder="" size="lg">
              {[...Array(6)].map((ele, index) => (
                <PinInputField
                  key={index}
                  type="number"
                  bgColor={"#F7F8F9"}
                  h={14}
                  w={12}
                  onChange={(e) => {
                    handleInputChange(index, e.target.value);
                  }}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </PinInput>
          </HStack>
        </Center>
      </FormControl>

      <Button
        width={"100%"}
        height={"56px"}
        color={"white"}
        bgColor={"#FF6D6A"}
        margin={"10px 0px"}
        onClick={() => HandleSubmitPassword(password, number)}
      >
        Verify
      </Button>
      <Text fontSize={"16px"} textAlign={"center"} color={"#1E232C"}>
        Didn’t received code?{" "}
        <span style={{ color: "#5574C6" }} onClick={HandleResend}>
          Resend
        </span>
      </Text>
    </div>
  );
};

export default OTP;
