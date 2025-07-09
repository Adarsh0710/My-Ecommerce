import nodemailer from 'nodemailer'

export const sendOtp = async (req, res) => {
  const { email, otp } = req.body

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: 'Email and OTP are required' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your One-Time Password (OTP) is: ${otp}`,
    }

    await transporter.sendMail(mailOptions)

    res.status(200).json({ success: true, message: 'OTP sent successfully' })
  } catch (error) {
    console.error('Error sending OTP:', error)
    res.status(500).json({ success: false, message: 'Failed to send OTP' })
  }
}
