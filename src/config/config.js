export default {
    apiUrl: 'https://digital.allcasino.in:3000/',
    // apiUrl: 'http://127.0.0.1:3000/',
    // apiUrl: 'http://localhost:3000/',

    bUrl: 'http://139.162.213.154:3000/',
    // userTypes: ['Super Admin', 'Master Admin', 'Admin', 'Super Master', 'Master', 'Agent', 'User'],
    // userTypesAlias: {
    //     'super_admin': 'Super Admin', 'master_admin': 'Master Admin', 'admin': 'Admin', 'super_master': 'Super Master', 'master': 'Master', 'agent': 'Agent', 'user': 'User'
    // },
    userTypes: ['Super Admin', 'Admin', 'Super Master', 'Master', 'Agent', 'User'],

    userTypesAlias: {
        'super_admin': 'Super Admin', 'admin': 'Admin', 'super_master': 'Super Master', 'master': 'Master', 'agent': 'Agent', 'user': 'User'
    },
    event_types: {
        4: 'Cricket', 2: 'Tennis', 1: 'Soccer'
    },
    sitecodes: 'P51',

    videoUrl: {
        '7ud': ' http://139.162.213.154/dvideo/teen20.html',
        'ab': ' http://139.162.213.154/dvideo/teen20.html',
        'ltp': ' http://139.162.213.154/dvideo/teen20.html',
        't20': ' http://139.162.213.154/dvideo/teen20.html',
        'dt20': ' http://139.162.213.154/dvideo/teen20.html',
        'aaa': ' http://139.162.213.154/dvideo/teen20.html',
        '32c': 'http://45.56.112.18/?id=3084',
    },
    marketSarket: "http://marketsarket.in:3002/",
    // account_type: {
    //     '': '--SELECT TYPE--',
    //     'UPI': 'UPI',
    //     'Bank': 'Bank',
    //     'Phonepe': 'Phonepe',
    //     'Gpay': 'Gpay',
    //     'Paytm': 'Paytm',
    // },

    account_type: ['UPI', 'Bank', 'Phonepe', 'Gpay', 'Paytm'],

}
// export const SOCKET_URL = 'https://digitalws.lce247.com:8040/';
export const SOCKET_URL = 'wss://ws.operator.buzz:7072/';


export const CURRENCY_TYPE = 'INR';


