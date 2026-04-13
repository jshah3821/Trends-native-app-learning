import * as React from 'react';
import { Image, Linking, Modal, Pressable, Text, View } from 'react-native';
import { homeStyles } from './style';
import { launchCamera } from 'react-native-image-picker';
import { PermissionsAndroid, Alert } from 'react-native';

export function Home() {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [photoUri, setPhotoUri] = React.useState<string | null>(null);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }

      if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
        Alert.alert(
          'Permission Required',
          'Camera permission is permanently denied. Please enable it from settings.',
          [
            { text: 'Cancel', style: 'cancel' },
            {
              text: 'Open Settings',
              onPress: () => Linking.openSettings(),
            },
          ],
        );
        return false;
      }

      Alert.alert(
        'Permission Denied',
        'Camera permission is required to take photos.',
      );
      return false;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();

    if (!hasPermission) {
      return;
    }

    const options: any = {
      mediaType: 'photo',
      saveToPhotos: true,
      quality: 1,
    };

    launchCamera(options, (response: any) => {
      if (response?.assets?.length) {
        setPhotoUri(response.assets[0]?.uri);
      }
    });
  };

  return (
    <>
      <View style={homeStyles.container}>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            homeStyles.button,
          ]}
          onPress={() => setIsModalVisible(true)}
        >
          <Text style={homeStyles.buttonText}>I'm pressable!</Text>
        </Pressable>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={[homeStyles.container, homeStyles.modalContainer]}>
          {photoUri && (
            <Image
              source={{ uri: photoUri }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              homeStyles.button,
            ]}
            onPress={() => openCamera()}
          >
            <Text style={homeStyles.buttonText}>Camera</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              homeStyles.button,
            ]}
            onPress={() => setIsModalVisible(false)}
          >
            <Text style={homeStyles.buttonText}>Gallery</Text>
          </Pressable>
        </View>
      </Modal>
    </>
  );
}
