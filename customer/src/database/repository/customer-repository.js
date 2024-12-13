const mongoose = require("mongoose");
const { CustomerModel, AddressModel } = require("../model");

//Dealing with DB operation
class CustomerRepository {
  async CreateCustomer({ email, password, phone, salt }) {
    const customer = new CustomerModel({
      email,
      password,
      phone,
      salt,
    });
    const customerResult = await customer.save();
    return customerResult;
  }

  async CreateAddress(_id, street, postalCode, city, country) {
    const c_profile = await CustomerModel.findById(_id);

    if (c_profile) {
      const newAddress = new AddressModel({
        street,
        postalCode,
        city,
        country,
      });

      await newAddress.save();
      c_profile.address.push(newAddress);
    }
    return await c_profile.save();
  }

  async FindCustomer({ email }) {
    const existingCustomer = await CustomerModel.findOne({ email: email });
    return existingCustomer;
  }
}

module.exports = CustomerRepository;
