import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { searchUniversities } from "../../apis/global-api";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";
import { signup, login } from "../../apis/auth-api";

const useStyles = makeStyles((theme) => ({
  form: {
    padding: "2.0rem",
    [theme.breakpoints.up('sm')]:{
      margin: '2.5rem',
    }
  },
  modal: {
    padding: "0.5rem",
  },
}));

export const AuthForm = ({ type }) => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [university, setuniversity] = useState({ name: "" });
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [errs, seterrs] = useState({});
  const [universities, setuniversities] = useState([]);
  const [branch, setbranch] = useState("");
  const [loading, setloading] = useState(false);
  const [backdrop, setbackdrop] = useState(true);
  const [formerrs, setformerrs] = useState([]);
  const classes = useStyles();
  const handleSubmit = (e) => {
    setformerrs([]);
    setbackdrop(true);
    submitSignUp();
  };

  const submitLogin = () => {
    setformerrs([]);
    let data = {
      email: email,
      password: password,
    };
    login(data).then((response) => {
      if (response.error) {
        setformerrs(response.msg);
      } else {
        console.log(response);
      }
    });
  };

  const submitSignUp = () => {
    let university_id = universities.find(
      (item) => item.name == university.name
    );
    let data = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      university_id: university_id.id,
      password: password,
      phone_number: phone_no,
      branch: branch,
    };
    signup(data).then((response) => {
      if (response.error) {
        setformerrs(response.msg);
      } else {
        console.log(response);
      }
    });
  };

  const backdropClose = () => {
    setbackdrop(false);
  };

  const validateform = (e) => {
    e.preventDefault();
    if (type == "login") {
      submitLogin();
      return;
    }
    let err = {};
    if (password != confirm_password) {
      err.no_same = "true";
    }
    if (password.length < 8) {
      err.pwd_length = "true";
    }
    if (!university.name) {
      err.university = "true";
    }
    seterrs(err);
    let has_error = Object.keys(err).length;
    if (!parseInt(has_error)) {
      handleSubmit();
    }
  };

  const updateformData = (e, type) => {
    e.preventDefault();
    eval("set" + type + "('" + e.target.value + "')");
  };

  const handleUniSearch = (e) => {
    let value = e.target.value;
    if (!value) return;
    setloading(true);
    searchUniversities(value).then((response) => {
      setloading(false);
      setuniversities(response);
    });
  };

  return (
    <div className={classes.form}>
      <form className={classes.container} onSubmit={validateform}>
        {type == "signup" && (
          <>
            <TextField
              required
              margin="dense"
              label="First Name"
              type="text"
              fullWidth
              value={firstname}
              onChange={(e) => updateformData(e, "firstname")}
              name="first_name"
            />
            <TextField
              required
              margin="dense"
              label="Last Name"
              type="text"
              fullWidth
              value={lastname}
              onChange={(e) => updateformData(e, "lastname")}
              name="last_name"
            />
          </>
        )}
        <TextField
          required
          margin="dense"
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => updateformData(e, "email")}
          name="email"
        />
        {type == "signup" && (
          <>
            <TextField
              required
              margin="dense"
              label="Phone No"
              type="text"
              fullWidth
              value={phone_no}
              onChange={(e) => updateformData(e, "phone_no")}
              name="phone"
            />
            <Autocomplete
              required
              options={universities}
              getOptionLabel={(option) => {
                return option.name;
              }}
              getOptionSelected={(option, value) => option.name === value.name}
              loading={loading}
              value={university}
              onInputChange={handleUniSearch}
              // onChange={(e) => updateformData(e, "university")}
              onSelect={(e) => setuniversity({ name: e.target.value })}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search University"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {loading ? (
                          <CircularProgress color="primary" size={20} />
                        ) : null}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
            />
            {errs["university"] && (
              <Typography color="error">Please select a university.</Typography>
            )}
            <TextField
              required
              margin="dense"
              label="Branch"
              type="branch"
              fullWidth
              value={branch}
              onChange={(e) => updateformData(e, "branch")}
              name="branch"
            />
          </>
        )}

        <TextField
          required
          margin="dense"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => updateformData(e, "password")}
          name="password"
        />
        {type == "signup" && (
          <TextField
            required
            margin="dense"
            label="Confirm Password"
            type="password"
            fullWidth
            value={confirm_password}
            onChange={(e) => updateformData(e, "confirm_password")}
            name="confirm_password"
          />
        )}
        {errs["no_same"] && (
          <Typography color="error">
            Password must match with confirm password
          </Typography>
        )}
        {errs["pwd_length"] && (
          <Typography color="error">Password must have 8 characters</Typography>
        )}
        <div>
          {formerrs.length > 0 &&
            formerrs.map((text, index) => (
              <Typography color="error" key={`err-${index}`}>
                {text}
              </Typography>
            ))}
        </div>
        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="primary"
        >
          {type == "login" ? "Login" : "SignUp"}
        </Button>
      </form>
    </div>
  );
};
