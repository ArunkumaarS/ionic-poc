import React from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import {
  LoginHeaderBrand,
  LoginContainerDiv,
  LoginIllustrationImg,
  LoginInfo,
  LoginInputDiv,
  InputTable,
  LoginTruecaller,
  TncLink,
  CountryCode,
  InputField,
  LoginTnc,
  InputSubmit,
} from './skin';
import LoginIllustration from '../../images/loginIllustration.png';
import TruecallerLogo from '../../images/truecallerLogo.svg';
import LoginSubmitActive from '../../images/RightArrowActive.svg';
import LoginSubmitInactive from '../../images/RightArrowFilled.svg';

const LoginScreen = props => {
  console.log(props);
  return (
    <LoginContainerDiv>
      <div>
        <LoginHeaderBrand>alpha</LoginHeaderBrand>
      </div>
      <LoginIllustrationImg src={LoginIllustration} />
      <LoginInfo>A quick brown fox jumps over the lazy dog,:;!</LoginInfo>
      <div>
        <p>New deploymet !</p>
        <LoginInputDiv>
          <InputTable>
            <tbody>
              <tr>
                <td>
                  <CountryCode>+91</CountryCode>
                </td>
                <td>
                  <InputField
                    name="mobileNumber"
                    value={props.login.loginForm.mobileNumber.value}
                    type="number"
                    placeholder="Your Phone Number"
                    onChange={props.onChange}
                    maxLength={10}
                    autoComplete="off"
                  />
                </td>
                <td>
                  <InputSubmit
                    src={LoginSubmitActive}
                    alt="submit"
                    onClick={props.submitMobileNumber}
                  />
                </td>
              </tr>
            </tbody>
          </InputTable>
        </LoginInputDiv>
        <LoginTruecaller>
          <span>
            or sigin with
            <img src={TruecallerLogo} alt="truecaller logo" />
          </span>
        </LoginTruecaller>
        <LoginTnc>
          <span>
            By singing in I accept
            <TncLink href="tnc">terms of service</TncLink>
          </span>
        </LoginTnc>
      </div>
    </LoginContainerDiv>
  );
};

export default injectIntl(LoginScreen);
