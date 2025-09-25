export default () => {
  const googleServicesFile = process.env.GOOGLE_SERVICES_JSON ?? "./credentials/google-services.json";

  return {
    expo: {
      name: "lunasu",
      slug: "lunasu",
      version: "1.0.0",
      orientation: "portrait",
      icon: "./src/assets/images/icon.png",
      scheme: "lunasu",
      userInterfaceStyle: "automatic",
      newArchEnabled: true,
      ios: {
        supportsTablet: true,
      },
      android: {
        package: "com.wilhelmaoi.lunasu",
        googleServicesFile,
        adaptiveIcon: {
          backgroundColor: "#E6F4FE",
          foregroundImage: "./src/assets/images/android-icon-foreground.png",
          backgroundImage: "./src/assets/images/android-icon-background.png",
          monochromeImage: "./src/assets/images/android-icon-monochrome.png",
        },
        edgeToEdgeEnabled: true,
        predictiveBackGestureEnabled: false,
        permissions: [
          "android.permission.READ_EXTERNAL_STORAGE",
          "android.permission.WRITE_EXTERNAL_STORAGE",
          "android.permission.READ_MEDIA_VISUAL_USER_SELECTED",
          "android.permission.ACCESS_MEDIA_LOCATION",
          "android.permission.READ_MEDIA_IMAGES",
          "android.permission.READ_MEDIA_VIDEO",
          "android.permission.READ_MEDIA_AUDIO",
        ],
      },
      web: {
        output: "static",
        favicon: "./src/assets/images/favicon.png",
      },
      plugins: [
        "expo-router",
        "expo-notifications",
        [
          "expo-media-library",
          {
            photosPermission: "Allow $(PRODUCT_NAME) to access your photos.",
            savePhotosPermission: "Allow $(PRODUCT_NAME) to save photos.",
            isAccessMediaLocationEnabled: true,
          },
        ],
        [
          "expo-splash-screen",
          {
            image: "./src/assets/images/splash-icon.png",
            imageWidth: 200,
            resizeMode: "contain",
            backgroundColor: "#ffffff",
            dark: {
              backgroundColor: "#000000",
            },
          },
        ],
        "expo-secure-store",
        "expo-sqlite",
      ],
      experiments: {
        typedRoutes: true,
        reactCompiler: true,
      },
      extra: {
        router: {},
        eas: {
          projectId: "9a25ef67-482e-4a4a-a16f-5842df79ed9e",
        },
      },
    },
  };
};


