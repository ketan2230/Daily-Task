const webpush = require('web-push');

// console.log(webpush.generateVAPIDKeys());

const publicKey = 'BOAxSQeKdnQKhEpuqX5Ec4jYX-JPHhSaC_wUQp1YKt9ScTvcgAitzwC1dQbdVNSprs64KVzCmgJcEoiOKsi884Y';
const privateKey = 'gsYIrBNrmD_bbsFBVgnTaAWkM4ttEnJn0jsePeZXq1o';

const sub = { 
    endpoint: "https://fcm.googleapis.com/fcm/send/dUUQD9FCnuE:APA91bF-llx6ENZcgNq_zbQEyUD9JYzugzAXe3s3cwPRUf5Enqqttt_JnaK3g8CAIvw99dFs4rG27TzZPpUamQ55cJ7iLwoWGlUUk6RmxxfINDHIx-16eJnrwQ9RQp-B0Dn-7bf2PODR", 
    expirationTime: null, 
    keys: 
        { 
            p256dh: "BEb2ikd6o_yeXAJEiauM1Q53rr33wAM5SGyZ67ethkWnWbdUVGzDyhMZ0YiA0Cv8Oo_RCX8F5e6_17bCY165JIc", 
            auth: "ieA6btJyQA4udjv0mVkBbA" 
        } 
    };

    webpush.setVapidDetails('mailto:example@gmail.com', publicKey, privateKey);

    const payLoad = {
        notification: {
            "data": {url : "https://www.youtube.com/"},
            "title": 'Angular Notification',
            "vibrate": [100, 50, 100]
        },
    };
    webpush.sendNotification(sub, JSON.stringify(payLoad));