import { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserContext } from "./UserContext";

function LoginControl() {
  const { userName } = useContext(UserContext);
  const { isLoggedIn } = useContext(UserContext);
  // const [userName, setUserName] = useState("")

  //#region Avatar Icon Color
  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    console.log(name);
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 30,
        height: 30,
        fontSize: 20,
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }
  //#endregion

  let loginName;
  if (isLoggedIn) {
    loginName = (
      <div>
        <Avatar {...stringAvatar("Itamar")} />
        <h3 style={{ paddingLeft: "45px", marginTop: "-27px" }}> {userName}</h3>
      </div>
    );
  } else {
    loginName = (
      <h3>
        <AccountCircleIcon style={{ margin: "-4px" }} /> Sign In
      </h3>
    );
  }

  return <div>{loginName}</div>;
}

export default LoginControl;
