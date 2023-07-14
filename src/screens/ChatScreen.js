
import { View, Text, TextInput, Button, TouchableOpacity, StatusBar } from 'react-native';
import { database } from '../../config/firebase';
import { GiftedChat } from 'react-native-gifted-chat'
import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
} from 'react';
import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants';

const DetailsHeader = ({ items, navigation }) => {
    const [playing, setPlaying] = useState(false);
    /*useEffect(() => {
      setVideoChapter(param?.courseContent)
    }, [])
    */

    const handleCart = () => {
        navigation.navigate("cart")
    }

    return (
        <View style={{ width: "100%", height: 90, justifyContent: 'center', backgroundColor: 'transparent' }}>
            <TouchableOpacity
                style={{
                    width: 200,
                    height: 40,
                    backgroundColor: COLORS.secondary,
                    position: "absolute",
                    borderRadius: SIZES.extraLarge,
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: SHADOWS.light,
                    alignSelf: "center",
                    top: StatusBar.currentHeight * 2
                }}
            >
                <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, fontWeight: FONTS.medium, color: COLORS.white }}>Chat</Text>
            </TouchableOpacity>
        </View>
    )
};

const ChatScreen = ({ navigation }) => {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    /*const onSignOut = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{
                        marginRight: 10
                    }}
                    onPress={onSignOut}
                >
                    <Text>Logout</Text>
                </TouchableOpacity>
            )
        });
    }, [navigation]);*/

    useEffect(() => {
        const collectionRef = collection(database, 'chats');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, querySnapshot => {
            setMessages(
                querySnapshot.docs.map(doc => ({
                    _id: doc.data()._id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            );
        });

        return () => unsubscribe();
    }, []);


    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages)
        );
        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(database, 'chats'), {
            _id,
            createdAt,
            text,
            user
        });
    }, []);


    /* useEffect(() => {
         const messagesRef = database().ref('messages');
         messagesRef.on('value', (snapshot) => {
             const messageList = [];
             snapshot.forEach((child) => {
                 messageList.push({
                     key: child.key,
                     text: child.val().text,
                 });
             });
             setMessages(messageList);
         });
     }, []);
 
     const sendMessage = () => {
         const messagesRef = database().ref('messages');
         messagesRef.push({ text });
         setText('');
     };*/

    return (
        <>
            <DetailsHeader />
            <GiftedChat
                messages={messages}
                showAvatarForEveryMessage={true}
                onSend={messages => onSend(messages)}
            /* user={{
                 _id: auth?.currentUser?.email,
                 avatar: 'https://i.pravatar.cc/300'
             }}*/
            />
            {/*<View>
            {messages.map((message) => (
                <Text key={message.key}>{message.text}</Text>
            ))}
            <TextInput value={text} onChangeText={setText} />
            <Button title="Send" onPress={sendMessage} />
        </View>*/}
        </>
    );
};

export default ChatScreen;
