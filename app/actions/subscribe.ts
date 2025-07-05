"use server"

import { google } from "googleapis"

const GOOGLE_SHEET_ID = "1anE4XbGJ9MhpJEoYU2tDUz5hJDV_bSzQjX_dOb8dkdU"
const GOOGLE_CLIENT_EMAIL = "socialeagleai@socialeagle-464810.iam.gserviceaccount.com"
const GOOGLE_PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCiLydFR2R5Ws6X
HsUa/qqFhfKVEha1qJhhTr9uz6CpHq5eo/D1BtqbtaASIYShSW8AUK7w4WgL49k6
bAEjDequiPy84UjsZQFd6yBxOlljDFYlgjj7PcAwXD0oX+4u6Eo0TRjj6DyI/cLX
b1FmHm/UqpFpFlkmpsrvNdoMugqHfK9EKClkFaNFSehaywMkyK+J9LsIwIsjfLw9
rwM0vE5N4YXvTPp3yTUlz/BEP9Yg7FzmXsFVxWByIVDeN6DULV/Vv1lqANStHgnZ
DTo6/mo6xMFvZeput2VvPM9HB/Gucxqf8Nj8CcMLdqh4G1M+BBGITM7kY80MuVeR
zq4yDWsRAgMBAAECggEACC692fp0oMTKmIhGZIrFuq/b4daES80CRyKMeQBDuFSi
cobt8MbUP7flqBSF1wdX8NmhQej1cWgg/RgW5Jhep0ilC7iID9k2vPDQdbX+bYdh
T0onKtHeQPJeaYuRfk9c8w+SumjsqPK4olrs7eyKMt4aMQWeINuYcII0iqDWSCiX
MPE/i4862USetCwHnm1/0OnIWDDZSPlGtWiGOhHppy8pSRfrLMaITcm0OqBowmhF
J9kNvdK1ksATXGIcMI+CeJsaSWzDxsGexOyiPHQ5W5D29PY47WKdoxL3JMN54GfU
v6T/CEPlKsBlyeF4Mb/clQCBhlp+DG6zHEQ4WgC0mQKBgQDUeGSgr/whqdftZCil
ZUYXLAOYRwBrsv8vJZ++FKJc6pcaLVIH7semeKv8WbxO1fIBcM7e29wjOOl/hbBZ
lPQQCOIXf9q9Rbe9pVrJmZ0S90MCdcX0BGW4lCLV5bBQq04XxHGitD3BYDX/D5jp
d3CCj/TdYoQc8FptbPN0ldBuxQKBgQDDaV0QtlzBZ3U7+fIDIKDjNAxeadwwy8SI
vnaA44upESi0l+KJziEGE6/a9c6Pealx8QkzMxKXWOlNTbrp+jls5wcTCGDq4kc/
u7y5jmokmz26VdxcfVK3/Xgub6gFq/MtZ0QCHZtZ64wvXh1eudYALGdjIwdp5Mzk
G4o7LiNP3QKBgEhEZt2s3hJJJbON9LFFABETnGloBQGc0WUk4++QLyVxeVGjBprC
IdBCjST5FK6v4G+TAhoVKAwm6GzCeRgPLPBjRRt/FlR4aSWtH3Mgt6diyL0Gd/0m
nb6pTCv6wvy9N4OoAoq3yaWDZvpJQNZwFKmj80J1pr/9FJTRkQEfj9SNAoGBAJWu
Z3MdvP8IWGyQkCiFHbfrbm4DeH6IFwsHmY4wvhHK6vsqPISCOBmHivSVxJtx/bEh
iIKHZH45xLtKBxqiaMpaTLjveg1xNlJDY9Remj9gCnBoxFq0RGBa72viazms9KCa
sSVNuGmwW7kMxkKA5sNLQAZYFp2ufKNd1Qxv0uyhAoGASwF5DcOamJgn1EjxAaOk
0VOjwKAq+c6P1IP2Q4ZFCslDHHEMuDfg9WnJlwcdExQRGw6pj5rjLZ1TbD9f6m2b
xpjpokXpgRNowwxuUQfFpxVH7pE/yU0QZ5HsteHajdk19YBBatZ5lUA+HiJYPncA
1OgYKqT5CtvUumLvNeWRs60=
-----END PRIVATE KEY-----`

export interface SubscriptionData {
  fullName: string
  whatsappNumber: string
  email: string
  city: string
  designation: string
}

export async function submitSubscription(data: SubscriptionData) {
  try {
    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    // Prepare the data to append
    const values = [
      [
        new Date().toISOString(), // Timestamp
        data.fullName,
        data.whatsappNumber,
        data.email,
        data.city,
        data.designation,
      ],
    ]

    // Append data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEET_ID,
      range: "Sheet1!A:F", // Adjust range as needed
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    })

    return { success: true, message: "Subscription successful!" }
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error)
    return { success: false, message: "Failed to submit subscription. Please try again." }
  }
}
