import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import classes from "./Root.module.css";

function RootLayout() {
    const navigation = useNavigation();

    return (
        <>
            <NavBar />
            <main>
                {navigation.state === "loading" && (
                    <div className={classes.loading}>
                        <span className={classes.loadingDot} />
                        <span className={classes.loadingDot} />
                        <span className={classes.loadingDot} />
                    </div>
                )}
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
