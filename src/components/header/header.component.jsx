import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {HeaderContainer, LogoContainer, OptionContainer, OptionLink} from  './header.styles';

const Header = ({ currentUser, hidden }) => (

  <HeaderContainer>

    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>

    <OptionContainer>

      <LogoContainer to='/shop'>
        SHOP
      </LogoContainer>
      {
        currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}> {/* as='div' we have used while using OptionLink css */}
            SIGN OUT 
          </OptionLink>
        ) :(
          <OptionLink to='/signin'>
            SIGN IN 
          </OptionLink>
        )
      }
      <CartIcon />

    </OptionContainer>
    {hidden ? null : <CartDropdown />}
    
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
