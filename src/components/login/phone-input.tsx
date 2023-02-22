import * as React from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import Input from "react-phone-number-input/input";
import { Col, Row, Typography } from "antd";
const { Text } = Typography;
export interface PhoneNumberInputProps {
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  isPhoneEmpty: boolean;
  setIsPhoneEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PhoneNumberInput = ({
  phone,
  setPhone,
  isPhoneEmpty,
  setIsPhoneEmpty,
}: PhoneNumberInputProps) => {
  return (
    <Row>
      <Col span={24}>
        <Input
          defaultCountry={"US"}
          placeholder="Enter phone number"
          value={phone}
          style={{ width: "100%", height: 30, padding: 10 }}
          onChange={(value) => {
            if (value) {
              setPhone(value);
              setIsPhoneEmpty(false);
            }
          }}
          error={
            phone
              ? isValidPhoneNumber(phone)
                ? undefined
                : "Invalid phone number"
              : "Phone number required"
          }
        />
      </Col>
      <Col>
        <Text style={{ width: "100%", height: 30, padding: 10 }} type="danger">
          {phone
            ? isValidPhoneNumber(phone)
              ? undefined
              : "Invalid phone number"
            : !isPhoneEmpty
            ? "Phone number required"
            : null}
        </Text>
      </Col>
    </Row>
  );
};
