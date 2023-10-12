import { useState } from "react";
import { Tab } from "semantic-ui-react";
import { useRouter } from "next/router";
import { BasicLayout } from "@/layouts";
import { useAuth } from "@/hooks";
// import {
//   Info,
//   Settings,
//   Address,
//   Wishlist,
//   Orders,
// } from "@/components/Account";
import { Separator } from "@/components/Shared";
import { Info, Settings } from "@/components/Account";
import styles from "./account.module.scss";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [reload, setReload] = useState(false);

  if (!user) {
    router.push("/");
    return null;
  }

  const onReload = () => setReload((prevState) => !prevState);

  const panes = [
    {
      menuItem: "My orders",
      render: () => (
        <Tab.Pane attached={false}>
          <p>
            My orders:
          </p>
          {/* <Orders /> */}
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Wishlist",
      render: () => (
        <Tab.Pane attached={false}>
          <p>My Wishlist</p>
          {/* {/* <Wishlist /> */}
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Directions",
      render: () => (
        <Tab.Pane attached={false}>
          {/* {/* <Address.AddAddress onReload={onReload} />
          <Address.ListAddresses reload={reload} onReload={onReload} /> */}
          <Separator height={80} />
          <p>Directions</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key: 20, icon: "settings", content: "Settings" },
      render: () => (
        <Tab.Pane attached={false} key={99}>
          <Settings.ChangeNameForm />
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm />
            <Settings.ChangePasswordForm />
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];

  return (
    <>
      {/* <Seo title="My account" /> */}

      <BasicLayout isContainer relative>
        <Info />

        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  );
}