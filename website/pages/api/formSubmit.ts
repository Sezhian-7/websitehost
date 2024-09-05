import type { NextApiRequest, NextApiResponse } from "next";

require("dotenv").config();

const nodemailer = require("nodemailer");

import NextCors from "nextjs-cors";

const { FROM_EMAIL, TO_EMAIL, SMTP_PASSWORD, USER_ID, HOST_EMAIL } =
  process.env;

// sgMail.setApiKey(SG_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const { name, email, message, phone, subject, base64 } = req.body;
  const transporter = nodemailer.createTransport({
    host: HOST_EMAIL,
    port: 465,
    Secure: true,
    auth: {
      user: USER_ID,
      pass: SMTP_PASSWORD,
    },
  });

  // send email

  // console.log("........test.......", req.body);
  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: "Enquiry Mail",
    html: `<p><strong>Name:</strong>${name}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Message:</strong>${message}</p>
    <p><strong>Mobile Number:</strong>${phone}</p>
    <p><strong>subject:</strong>${subject}</p>
    `,
  };
  console.log(process.env, "test 2---------");

  if (base64) {
    Object.assign(msg, {
      attachments: [
        {
          content: base64.slice("data:application/pdf;base64,".length),
          filename: "attachment.pdf",
          contentType: "application/pdf",
          encoding: "base64",
        },
      ],
    });
  }
  try {
    // const resp = await sgMail.send(msg);
    const resp = await transporter.sendMail(msg);

    return res.status(200).send({ success: true, FROM_EMAIL, TO_EMAIL });
  } catch (error) {
    console.log("error block :>>", error);
    return res.status(200).send({ success: false, FROM_EMAIL, TO_EMAIL });
  }
}
