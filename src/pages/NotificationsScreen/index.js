import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Video } from 'expo-av';

export default function NotificationsScreen() {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>Dizimos</Text>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{ uri: 'https://youtu.be/cYz4bVvfPVk' }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />


                    <Text style={styles.text}>Oferta</Text>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{ uri: 'https://user-images.githubusercontent.com/50014912/119280181-0e538380-bc28-11eb-8807-41a23169dc77.mp4' }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />

                    <Text style={styles.text}>Votos</Text>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{ uri: 'https://user-images.githubusercontent.com/50014912/119280181-0e538380-bc28-11eb-8807-41a23169dc77.mp4' }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />

                    <Text style={styles.text}>Dizimo Oferta e Voto</Text>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{ uri: 'https://user-images.githubusercontent.com/50014912/119280181-0e538380-bc28-11eb-8807-41a23169dc77.mp4' }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </ScrollView>
            </SafeAreaView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingTop: StatusBar.currentHeight,
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
        paddingBottom: 200,
        borderColor: 'coral',
        borderStyle: 'solid',
        marginBottom: 30,
    },
    text: {
        color: '#333333',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    scrollView: {
        marginHorizontal: 30,
        marginTop: 10,
        marginRight: 30,
    },
});
