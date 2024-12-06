# MyTheresa React Native Test

In this app you will find Screens like in the following images

![Simulator Screenshot - iPhone SE (3rd generation) - 2024-12-06 at 10 48 04](https://github.com/user-attachments/assets/fc71ad6e-3001-4ad5-be2f-3ab60b49cdcb)
![Simulator Screenshot - iPhone SE (3rd generation) - 2024-12-06 at 11 08 14](https://github.com/user-attachments/assets/152ee9c8-69aa-43a6-9686-278c8108b04d)
![Simulator Screenshot - iPhone SE (3rd generation) - 2024-12-06 at 11 08 19](https://github.com/user-attachments/assets/3d8c05e5-115a-4f01-88b6-d2d22d781fc9)


## Getting Started

Be sure to have your TMDB API KEY. Node +18 and xCode installed.

## Step 1: Set environment

After cloning the repo, create the **.env** file at the root with the following keys
```bash
TMDB_API_KEY=XXXXXXXXXX
TMDB_API_URL=https://api.themoviedb.org/3/
```
## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Using the App


-  Once you run the app, in the Simulator you can find the 3 Carousels of my selection
-  Tap on Any Image to get details of the Movie
-  Tap on Add to add to your WishList 
- Tap again the button to remove from the WishList
- Tap on Back in the Header to see the Home with the Carousels again, and find the WishList at the bottom.
