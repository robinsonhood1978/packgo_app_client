# Store Manager - React Native Application for Wordpress Woocomerce.

**Step 1:**

Go to project root and execute the following command in console to get the required dependencies:

```
yarn install
```

**Step 2:**

Install required dependencies on iOS: 

```
npx pod-install ios
```

Then run:

```
npx react-native run-ios

npm start -- --reset-cache
通知消息模拟器测试
xcrun simctl push booted test_push.apns
```


watchman watch-del-all && react-native start --reset-cache

**Step 3:**

Run the app on Android ensure that you install required dependencies on step 1: 

```
chmod +x ./android/gradlew
npx react-native run-android



If you are sure the module exists, try these steps:
 1. Clear watchman watches: watchman watch-del-all
 2. Delete node_modules: rm -rf node_modules and run yarn install
 3. Reset Metro's cache: yarn start --reset-cache
 4. Remove the cache: rm -rf /tmp/metro-*]
```

### Docs & Support

* [Docs](https://lekima-docs.rnlab.io/docs/v1/store-manager)
* [Forum support](https://forums.rnlab.io/)

### Folder Structure
Here is the core folder structure you download.

```
store-manager-version/
|- app
|- guide
|- licensing
|- README.md
```

Here is the folder structure we have been using in this project

```
rn_store_manager/
|- android/
|- ios/
|- asserts/
|- src/
|- package.json/
|- app.json/
|- ....

```
打包：
react-native bundle --entry-file index.js --platform ios --dev false --bundle-output release_ios/main.jsbundle --assets-dest release_ios/


Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/mark/robin/AionWarehouse" && npx react-native run-android

  Run instructions for iOS:
    • cd "/Users/mark/robin/AionWarehouse" && npx react-native run-ios
    - or -
    • Open AionWarehouse/ios/AionWarehouse.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.

[Wed Sep 15 2021 20:35:55.662]  LOG      Running "rn_store_manager" with {"rootTag":1}
[Wed Sep 15 2021 20:35:55.663]  LOG      Device info:  {"pushToken": "f9OknZgYQ22iLpZocbst6l:APA91bEIDRTEhivvKCHD2Hkmn9mQicOxIcvgzMITg7cutlmwNqlTN4xCUJc-z3pjPOmZ0HsiztCiN2P8cQJyL9L09oc_Mq8ssigSrehkUoXjQ44shBX0zOyTJp-kA29d5fhjEpov05Pb", "userId": "e6e4fe7f-b994-4538-8481-4aea51de7d18"}
[Wed Sep 15 2021 20:36:45.178]  LOG      markyin
[Wed Sep 15 2021 20:36:45.221]  LOG      Pass@word1
[Wed Sep 15 2021 20:36:47.185]  LOG      {"code": 0, "msg": "get is_active ok", "obj": true}
[Wed Sep 15 2021 20:36:49.248]  LOG      robin: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1hcmt5aW4iLCJ1c2VyX2lkIjoyNCwiZW1haWwiOiJtYXJrQHN1cmxleC5jb20iLCJleHAiOjE2MzE3MzgyMDZ9.bmKCSX0CDLZ3XrmfXUCesH1bv17bVGFaZyJxh3hbn9U
[Wed Sep 15 2021 20:39:44.388]  LOG      Notification received:  {"androidNotificationId": -1991135303, "displayType": 1, "isAppInFocus": true, "payload": {"bigPicture": "https://img.onesignal.com/n/185572b3-2073-40db-be78-2d4c72242c3f.jpg", "body": "What a beautiful name it is!", "fromProjectNumber": "986411581414", "launchURL": "https://www.youtube.com/watch?v=XKvhNSeAzmY", "lockScreenVisibility": 1, "notificationID": "eb9b5f7c-c1f0-4457-99b0-757da299d15f", "priority": 5, "rawPayload": "{\"google.delivered_priority\":\"normal\",\"google.sent_time\":1631695206239,\"google.ttl\":259200,\"google.original_priority\":\"normal\",\"custom\":\"{\\\"u\\\":\\\"https:\\\\\\/\\\\\\/www.youtube.com\\\\\\/watch?v=XKvhNSeAzmY\\\",\\\"i\\\":\\\"eb9b5f7c-c1f0-4457-99b0-757da299d15f\\\"}\",\"pri\":\"5\",\"vis\":\"1\",\"from\":\"986411581414\",\"alert\":\"What a beautiful name it is!\",\"bicon\":\"https:\\/\\/img.onesignal.com\\/n\\/185572b3-2073-40db-be78-2d4c72242c3f.jpg\",\"title\":\"Hello，Dear Customer\",\"google.message_id\":\"0:1631695206273303%4e98f2a8f9fd7ecd\",\"google.c.sender.id\":\"986411581414\",\"androidNotificationId\":-1991135303}", "title": "Hello，Dear Customer"}, "shown": true}
[Wed Sep 15 2021 20:40:08.998]  LOG      Message:  What a beautiful name it is!
[Wed Sep 15 2021 20:40:09.200]  LOG      Data:  undefined
[Wed Sep 15 2021 20:40:09.200]  LOG      isActive:  true
[Wed Sep 15 2021 20:40:09.300]  LOG      openResult:  {"action": {"type": 0}, "notification": {"androidNotificationId": -1991135303, "displayType": 1, "isAppInFocus": true, "payload": {"bigPicture": "https://img.onesignal.com/n/185572b3-2073-40db-be78-2d4c72242c3f.jpg", "body": "What a beautiful name it is!", "fromProjectNumber": "986411581414", "launchURL": "https://www.youtube.com/watch?v=XKvhNSeAzmY", "lockScreenVisibility": 1, "notificationID": "eb9b5f7c-c1f0-4457-99b0-757da299d15f", "priority": 5, "rawPayload": "{\"google.delivered_priority\":\"normal\",\"google.sent_time\":1631695206239,\"google.ttl\":259200,\"google.original_priority\":\"normal\",\"custom\":\"{\\\"u\\\":\\\"https:\\\\\\/\\\\\\/www.youtube.com\\\\\\/watch?v=XKvhNSeAzmY\\\",\\\"i\\\":\\\"eb9b5f7c-c1f0-4457-99b0-757da299d15f\\\"}\",\"pri\":\"5\",\"vis\":\"1\",\"from\":\"986411581414\",\"alert\":\"What a beautiful name it is!\",\"bicon\":\"https:\\/\\/img.onesignal.com\\/n\\/185572b3-2073-40db-be78-2d4c72242c3f.jpg\",\"title\":\"Hello，Dear Customer\",\"google.message_id\":\"0:1631695206273303%4e98f2a8f9fd7ecd\",\"google.c.sender.id\":\"986411581414\",\"androidNotificationId\":-1991135303}", "title": "Hello，Dear Customer"}, "shown": true}}
[Wed Sep 15 2021 20:40:09.182]  ERROR    TypeError: undefined is not an object (evaluating 'state.language')


error React Native CLI uses autolinking for native dependencies, but the following modules are linked manually: 
  - @react-native-community/geolocation (to unlink run: "react-native unlink @react-native-community/geolocation")
This is likely happening when upgrading React Native from below 0.60 to 0.60 or above. Going forward, you can unlink this dependency via "react-native unlink <dependency>" and it will be included in your app automatically. If a library isn't compatible with autolinking, disregard this message and notify the library maintainers.
Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md

error: Error: Unable to resolve module `@react-native-masked-view/masked-view` from `node_modules/@react-navigation/elements/src/MaskedViewNative.tsx`: @react-native-masked-view/masked-view could not be found within the project.

If you are sure the module exists, try these steps:
 1. Clear watchman watches: watchman watch-del-all
 2. Delete node_modules: rm -rf node_modules and run yarn install
 3. Reset Metro's cache: yarn start --reset-cache
 4. Remove the cache: rm -rf /tmp/metro-*
 
How to use Drawer?

1. yarn add @react-navigation/drawer