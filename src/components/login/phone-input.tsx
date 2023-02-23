import { isValidPhoneNumber } from "react-phone-number-input";
import Input from "react-phone-number-input/input";
import { Col, Row, Typography } from "antd";

const { Text } = Typography;

export const PhoneNumberInput = ({
  phone,
  setPhone,
  isPhoneEmpty,
  setIsPhoneEmpty,
}) => {
  return (
    <Row>
      <Col span={24}>
        <Input
          defaultCountry={"US"}
          placeholder="Enter phone number"
          value={phone}
          style={{ width: "100%", height: 30, padding: 10 }}
          onChange={(value) => {
            setPhone(value || "");
            setIsPhoneEmpty(!value);
          }}
          error={
            !phone && !isPhoneEmpty
              ? "Phone number required"
              : isValidPhoneNumber(phone)
              ? undefined
              : "Invalid phone number"
          }
        />
      </Col>
      {/* <Col>
        <Text style={{ width: "100%" }} type="danger">
          {!phone && !isPhoneEmpty
            ? "Phone number required"
            : isValidPhoneNumber(phone)
            ? undefined
            : "Invalid phone number"}
        </Text>
      </Col> */}
    </Row>
  );
};
