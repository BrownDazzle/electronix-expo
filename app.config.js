
//import { API_KEY, APP_ID, AUTH_DOMAIN, PROJECT_ID, MEASUREMENT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID } from '@env'
import 'dotenv/config'

const react_native_google_ads = "react-native-google-mobile-ads"

export default {
  expo: {
    name: "electronics store",
    slug: "electronics-store-expo",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/banner4.jpg",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      "supportsTablet": true,
      "bundleIdentifier": "com.blueprint",
      "config": {
        "googleMapsApiKey": "AIzaSyBQivdVNxU7quHhW_ARw2VuXKmHVwXhNMk"
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/banner4.jpg",
        backgroundColor: "#FFFFFF"
      },
      package: "com.blueprint",
      config: {
        googleMaps: {
          apiKey: "KEY"
        },
        googleMobileAds: {
          androidAppId: "ca-app-pub-7793275307187854~1084678195",
        },
      },
      permissions: [
        "ACCESS_COARSE_LOCATION",
        "ACCESS_FINE_LOCATION",
        "FOREGROUND_SERVICE"
      ]
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      measurementId: process.env.MEASUREMENT_ID,
      eas: {
        projectId: "7034939f-fd95-4b6e-8a2d-78ca709b5ca8"
      }
    },
  },

}