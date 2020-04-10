import React from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png';

function Detail() {
  const navigation = useNavigation();
  const message = 'Olá APAD, estou entrando em contato... "Cadelinha atropelada"... valor de R$120,00';

  function navigationToIncident() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Herói do caso: Cadelinha atropelada',
      recipients: ['leonardogs0919@gmail.com'],
      body: message,
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+5563992481726&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigationToIncident}>
          <Feather name="arrow-left" size={18} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>CASO</Text>
        <Text style={styles.incidentValue}>Cachorro atropelado.</Text>

        <Text style={styles.incidentProperty}>VALOR</Text>
        <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>
          Salve o dia!
        </Text>
        <Text style={styles.heroTitle}>
          Seja o herói desse caso.
        </Text>

        <Text style={styles.heroDescription}>
          Entre em contato:
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>
              <FontAwesome name="whatsapp" size={18} color="#FFF" />
              WhatsApp
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>
              <Feather name="mail" size={18} color="#FFF" />
              E-mail
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
}

export default Detail;