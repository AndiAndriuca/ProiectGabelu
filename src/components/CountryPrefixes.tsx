import { Form, Select } from "antd";
const { Option } = Select;

const prefixSelector = (
  <Form.Item
    rules={[
      {
        required: true,
        message: "Please select your country prefix!",
      },
    ]}
    name="prefix"
    noStyle
  >
    <Select style={{ width: 70 }}>
      <Option title="Albania" value="355">
        +355
      </Option>
      <Option title="Andorra" value="376">
        +376
      </Option>
      <Option title="Armenia" value="87">
        +87
      </Option>
      <Option title="Austria" value="43">
        +43
      </Option>
      <Option title="Azerbaijan" value="994">
        +994
      </Option>
      <Option title="Belarus" value="375">
        +375
      </Option>
      <Option title="Belgium" value="87">
        +87
      </Option>
      <Option title="Bosnia and Herzegovina" value="387">
        +387
      </Option>
      <Option title="Bulgaria" value="359">
        +359
      </Option>
      <Option title="Croatia" value="385">
        +385
      </Option>
      <Option title="Czech" value="420">
        +420
      </Option>
      <Option title="Denmark" value="45">
        +45
      </Option>
      <Option title="Estonia" value="372">
        +372
      </Option>
      <Option title="Finland" value="358">
        +358
      </Option>
      <Option title="France" value="33">
        +33
      </Option>
      <Option title="Georgia" value="995">
        +995
      </Option>
      <Option title="Germany" value="49">
        +49
      </Option>
      <Option title="Greece" value="30">
        +30
      </Option>
      <Option title="Hungary" value="36">
        +36
      </Option>
      <Option title="Iceland" value="354">
        +354
      </Option>
      <Option title="Ireland" value="353">
        +353
      </Option>
      <Option title="Italy" value="39">
        +39
      </Option>
      <Option title="Kazakhstan" value="7">
        +7
      </Option>
      <Option title="Latvia" value="371">
        +371
      </Option>
      <Option title="Liechtenstein" value="423">
        +423
      </Option>
      <Option title="Lithuania" value="370">
        +370
      </Option>
      <Option title="Luxembourg" value="352">
        +352
      </Option>
      <Option title="Macedonia" value="87">
        +87
      </Option>
      <Option title="Malta" value="356">
        +356
      </Option>
      <Option title="Moldova" value="373">
        +373
      </Option>
      <Option title="Monaco" value="377">
        +87
      </Option>
      <Option title="Netherlands" value="31">
        +31
      </Option>
      <Option title="Norway" value="47">
        +47
      </Option>
      <Option title="Poland" value="48">
        +48
      </Option>
      <Option title="Portugal" value="351">
        +351
      </Option>
      <Option title="Romania" value="40">
        +40
      </Option>
      <Option title="Russia" value="7">
        +7
      </Option>
      <Option title="San Marino" value="378">
        +378
      </Option>
      <Option title="Serbia" value="381">
        +381
      </Option>
      <Option title="Slovakia" value="421">
        +421
      </Option>
      <Option title="Slovenia" value="386">
        +386
      </Option>
      <Option title="Spain" value="34">
        +34
      </Option>
      <Option title="Sweden" value="46">
        +46
      </Option>
      <Option title="Switzerland" value="41">
        +41
      </Option>
      <Option title="Turkey" value="90">
        +90
      </Option>
      <Option title="Ukraine" value="380">
        +380
      </Option>
      <Option title="United Kingdom" value="44">
        +44
      </Option>
      <Option title="Vatican" value="379">
        +379
      </Option>
    </Select>
  </Form.Item>
);

export default prefixSelector;
