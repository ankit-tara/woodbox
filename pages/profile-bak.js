import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "../src/Layout";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import EditProfile from "../src/components/EditProfile";
import SellerProfile from "../src/components/SellerProfile";
import Modal from "../src/components/Modal";
import {
  commonStyles,
  desktopStyles,
  mobileStyles,
  TabStyles,
} from "../src/styles";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  ...commonStyles,
  [theme.breakpoints.up("md")]: desktopStyles,
  [theme.breakpoints.between("sm", "md")]: TabStyles,
  [theme.breakpoints.down("sm")]: mobileStyles,
}));

export default function ProfilePage() {
  const router = useRouter();

  const accessToken = useSelector((state) => state.auth_user.accessToken);
  const user = useSelector((state) => state.auth_user.user);

  useEffect(() => {
    if (!accessToken) {
      router.push("/");
    }
  }, []);
  return (
    <Layout>
      {/* <EditProfile/> */}

      <Modal />
      <SellerProfile user={user} />

      {/* Download App Section */}
    </Layout>
  );
}
