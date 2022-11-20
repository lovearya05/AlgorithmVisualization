const nodeMailer = require("nodemailer")
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;

// const createTransporter = async () => {
//     const oauth2Client = new OAuth2(
//       process.env.CLIENT_ID,
//       process.env.CLIENT_SECRET,
//       "https://developers.google.com/oauthplayground"
//     );
  
//     oauth2Client.setCredentials({
//       refresh_token: process.env.REFRESH_TOKEN
//     });
  
//     const accessToken = await new Promise((resolve, reject) => {
//       oauth2Client.getAccessToken((err, token) => {
//         if (err) {
//           reject("Failed to create access token :(");
//         }
//         resolve(token);
//       });
//     });
  
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         type: "OAuth2",
//         user: process.env.EMAIL,
//         accessToken,
//         clientId: process.env.CLIENT_ID,
//         clientSecret: process.env.CLIENT_SECRET,
//         refreshToken: process.env.REFRESH_TOKEN
//       }
//     });
  
//     return transporter;
//   };
  
//   const sendEmail = async (options) => {
//     let emailTransporter = await createTransporter();
//     await emailTransporter.sendMail(options);
//   };
  
//   sendEmail({
//     from : process.env.SMPT_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   });

  
//   sendEmail1({
//     subject: options.subject,
//     text: options.message,
//     to: options.email,
//     from: process.env.SMPT_MAIL,
//   });

// module.exports = sendEmail


const sendEmail = async (options) =>{

    console.log(options.message);

    // const transporter = nodeMailer.createTransport({
    //     service: process.env.SMPT_SERVICE,
    //     host: 'smpt.ethereal.email',
    //     port: 587,
    //     secure: false,
    //     auth:{
    //         user: process.env.SMPT_MAIL,
    //         pass: process.env.SMPT_PASSWORD,
    //     }
    // })

    // const mailOptions = {
    //     from : process.env.SMPT_MAIL,
    //     to: options.email,
    //     subject: options.subject,
    //     text: options.message,
    // }

    //  await transporter.sendMail(mailOptions)
}

module.exports = sendEmail


// lznelgmduivdqrdp

// client ID 373032264905-742aer99p7bls3ooolo27rur131vkhp8.apps.googleusercontent.com

// client secret: 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

// Authorization code: 4/0AdQt8qjovOigL3mk4ffam1nwu7EPl8DF2QlFtrToiTbQk49CPqTsl_bIxTQoXTiQIePUzg

// Refresh token   1//04DBXFgUbHgeGCgYIARAAGAQSNwF-L9IrH_mtwYSo9hHhXK0im8KLks29FAasBUH2ZmxKoooO8YWJDsp3VdHFmMuoksdWLGmTFXs

// Access token: ya29.A0AVA9y1sScyqgJVqZQx2kttQ7YoULyLLgBYIBf2UQ3ckyb1bGqw_SdDuJZ_MXpHd8EeeeU1CguKsus5_qH9HjOMbnEUOojyDinOaOLp23igbayq5r26SM7xWHheWFq5aKs1-2MnRbTdjwQ_tw2bwq3Mvp0t7saCgYKATASATASFQE65dr811k0X4ZEzYKXo0D-aqycbQ0163