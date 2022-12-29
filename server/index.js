var apn = require('apn');
const { v4: uuidv4 } = require('uuid');

const options = {
  token: {
    key: '*.p8',
    keyId: '*',
    teamId: '*'
  },
  production: false
};
var apnProvider = new apn.Provider(options);

// Sending the voip notification
let notification = new apn.Notification();

notification.body = "Hello there!";
notification.topic = "com.trudi.attic.voip";   // Make sure to append .voip here!
notification.payload = {
  uuid: uuidv4(),
  caller: "zany",
  callType: "video"
}

const deviceToken = '*'
apnProvider.send(notification, deviceToken).then((response) => {
  
});