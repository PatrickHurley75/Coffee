module.exports = {
  servers: {
    one: {
      host: '34.248.232.47',
      username: 'ubuntu',
      pem: '~/Coffee.pem',
       // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'CoffeeBreak',
    path: '../',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://app.coffeebreak.ie',
      MONGO_URL: 'mongodb://user:Agrajag1@ds151018.mlab.com:51018/appdb',
      CLOUDINARY_URL : 'cloudinary://941183314595184:xrdG4UURyWxRyATypbRUVPRHNLg@dew2bujjl',
    },


    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'abernix/meteord:base',
    },
    deployCheckWaitTime: 60,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: false
  },

  mongo: {
    oplog: true,
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {},
    },
  },
};
