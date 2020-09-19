import 'firebase/messaging'
import firebase from 'firebase/app'
import localforage from 'localforage'

const firebaseCloudMessaging = {
    tokenInlocalforage: async () => {
        return localforage.getItem('fcm_token')
    },

    init: async function () {
        firebase.initializeApp({
            apiKey: process.env.FIREBASE_API_KEY,
            projectId: process.env.projectId,
            messagingSenderId: process.env.messagingSenderId,
            appId: process.env.appId,
        })

        try {
            if ((await this.tokenInlocalforage()) !== null) {
                return false
            }

            const messaging = firebase.messaging()
            await messaging.requestPermission()
            const token = await messaging.getToken()

            localforage.setItem('fcm_token', token)
            console.log('fcm_token', token)
        } catch (error) {
            console.error(error)
        }
    },
}

export { firebaseCloudMessaging }