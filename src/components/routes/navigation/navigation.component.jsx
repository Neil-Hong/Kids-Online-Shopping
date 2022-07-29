import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import CartIcon from "../../cart-icon/cart-icon.component";
import { selectCurrentUser } from "../../../store/user/user.selector";
import { signOutStart } from "../../../store/user/user.action";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles.jsx";
import { selectIsCartOpen } from "../../../store/cart/cart.selector";

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const signOutUser = () => dispatch(signOutStart());

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as="span" onClick={signOutUser}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to="/auth">SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
