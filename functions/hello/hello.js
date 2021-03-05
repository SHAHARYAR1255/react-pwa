const SparkPost = require('sparkpost');
const client = new SparkPost('ffa2f6fdae500ecaecb3de822183ed3db7591b7b');

exports.handler = function(event, context, callback) {
  console.log(event);
  client.transmissions
    .send({
      content: {
        from: 'burner9174@gmail.com',
        subject: 'Hello, World!',
        html:
          "<html><body><p>My cool email.</p></body></html>"
      },
    recipients: [{ address: 'shaharyar.malik2000@gmail.com' }]
  }).then(data =>{
    callback(null, {
      statusCode: 200 ,
      body: "so far good"
    })
  }).catch(err =>{
    console.log(err)
  })
}