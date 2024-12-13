const { CustomerRepository } = require("../database");
const {
  GenerateSalt,
  GeneratePassword,
  GenerateSignature,
  FormateData,
  validatePassword,
} = require("../utils");

class CustomerService {
  constructor() {
    this.repository = new CustomerRepository();
  }

  async SignIn(userInputs) {
    const { email, password } = userInputs;

    const existingCustomer = await this.repository.FindCustomer({ email });

    if (!existingCustomer) return FormateData(null);

    const validPassword = await validatePassword(
      password,
      existingCustomer.password,
      existingCustomer.salt
    );

    if (!validPassword) return FormateData(null);

    const token = await GenerateSignature({
      email: email,
      _id: existingCustomer._id,
    });
    return FormateData({ token });
  }

  async SignUp(userInputs) {
    const { email, password, phone } = userInputs;

    // create salt
    let salt = await GenerateSalt();
    let userPassword = await GeneratePassword(password, salt);
    const existingCustomer = await this.repository.CreateCustomer({
      email,
      password: userPassword,
      phone,
      salt,
    });

    const token = await GenerateSignature({
      email: email,
      _id: existingCustomer._id,
    });
    return FormateData({ token });
  }

  async AddAddress(_id, userInputs) {
    const { street, postalCode, city, country } = userInputs;
    const addressResult = await this.repository.CreateAddress(
      _id,
      street,
      postalCode,
      city,
      country
    );
    return FormateData(addressResult);
  }
}

module.exports = CustomerService;
