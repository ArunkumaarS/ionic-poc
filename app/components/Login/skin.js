import styled from 'styled-components';

export const LoginContainerDiv = styled.div`
  padding: 24px;
`;
export const LoginHeaderBrand = styled.span`
  font-weight: bold;
  font-size: 36px;
  color: #f2994a;
`;

export const LoginIllustrationImg = styled.img`
  max-width: 100%;
  min-width: 100%;
  max-height: 30%;
  min-height: 30%;
`;

export const LoginInfo = styled.p`
  padding: 0px 24px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #7c7c7c;
`;

export const LoginInputDiv = styled.div`
  background: #fcfcfc;
  border: 1.5px solid #f2994a;
  border-radius: 5px;
`;
export const InputTable = styled.table`
  height: 45px;
  padding: 0px 8px 0px 16px;
  width: 100%;
`;
export const CountryCode = styled.span`
  font-weight: 600;
  font-size: 15px;
  color: #333333;
`;
export const InputField = styled.input`
  height: 100%;
  width: 100%;
  border: 0px;
  background: transparent;
  font-weight: 600;
  font-size: 15px;
  color: #333333;
  &:focus {
    border: 0px;
    background: transparent;
    outline: none;
  }
  &::-webkit-input-placeholder {
    background-color: #fcfcfc;
  }
`;

export const InputSubmit = styled.img`
  vertical-align: middle;
`;
export const LoginTruecaller = styled.div`
  padding: 10px 0px;
  text-align: center;
  font-weight: 600;
  font-size: 0.9375rem;
  color: #828282;
`;
export const LoginTnc = styled.div`
  padding: 10px 0px;
  text-align: center;
  font-weight: 600;
  font-size: 9px;
  color: #444444;
`;
export const TncLink = styled.a`
  text-decoration: none;
  color: #f2994a;
`;
