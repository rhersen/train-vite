const fetch = require("node-fetch");

const handler = async function ({ queryStringParameters }) {
  try {
    const response = await fetch(
      "https://api.trafikinfo.trafikverket.se/v2/data.json",
      {
        method: "POST",
        body: getBody(queryStringParameters),
        headers: {
          "Content-Type": "application/xml",
          Accept: "application/json",
        },
      }
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();
    const [body] = data.RESPONSE.RESULT;

    return {
      statusCode: 200,
      body: JSON.stringify(body),
    };
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: error.message }),
    };
  }
};

module.exports = { handler };

function getBody({ trainId, since, until }) {
  return `
    <REQUEST>
      <LOGIN authenticationkey='${process.env.TRAFIKVERKET_API_KEY}' />
      <QUERY objecttype='TrainAnnouncement' schemaversion='1.6'>
        <FILTER>
          <AND>
            <EQ name='AdvertisedTrainIdent' value='${trainId}'/>
            <GT name='AdvertisedTimeAtLocation' value='${since}'/>
            <LT name='AdvertisedTimeAtLocation' value='${until}'/>
          </AND>
        </FILTER>
        <INCLUDE>ActivityType</INCLUDE>
        <INCLUDE>AdvertisedTrainIdent</INCLUDE>
        <INCLUDE>AdvertisedTimeAtLocation</INCLUDE>
        <INCLUDE>LocationSignature</INCLUDE>
        <INCLUDE>TimeAtLocation</INCLUDE>
        <INCLUDE>TimeAtLocationWithSeconds</INCLUDE>
        <INCLUDE>ToLocation</INCLUDE>
      </QUERY>
    </REQUEST>`;
}
