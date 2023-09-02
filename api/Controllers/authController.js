const otpGenerator = require("otp-generator");

// const { StatusCodes, ReasonPhrases } = require("http-status-codes");

module.exports = {
  authOpt: async (res) => {
    console.log("checking auth")
  
    const otp = otpGenerator.generate(4, {
      digits: true,
      alphabets: false,
      upperCase: false,
      specialChars: false,
    });

    const expiryTime = Date.now() + 5 * 60 * 1000;

    otpMap.set(otp, expiryTime);

  
    res.json({ otp });
}};
