import React from 'react';
import { useTheme } from 'styled-components';
import { Ionicons, Feather } from '@expo/vector-icons';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Container, Header, Profile, Avatar, Image, Info, Title, Views, Actions, Button, ButtonAction, Days, Description, Footer, Likes } from './styles';
import { useNavigation } from '@react-navigation/native';

interface DepoimentsProps {
  id: string;
  name: string;
  description: string;
  views: number;
  likes: number;
  avatar: string;
  created_at: number;
}

interface Props {
  data: DepoimentsProps;
}


export function Card({ data }: Props){
  const theme = useTheme();
  const navigation = useNavigation();

  function HandleDetails() {
    navigation.navigate('Details', {data})
  }

  return (
    <Container onPress={HandleDetails}>
      <Header>
        <Profile>
          <Avatar>
            <Image source={{uri: `${data.avatar}`}}/>
          </Avatar>
          <Info>
            <Title>{data.name}</Title>
            <Views>{data.views} visualizações</Views>
          </Info>
        </Profile>
        <Actions>
          <ButtonAction>
            <Ionicons name="ellipsis-horizontal-sharp" size={20}/> 
          </ButtonAction>
          <Days>{moment(`${data.created_at}`).fromNow()}</Days>
        </Actions>
      </Header>
      <Description>
        {data.description}
      </Description>
      <Footer>
        <Button>
          <Ionicons name="heart-outline" size={20} color={theme.colors.secondary}/> 
          <Likes>{data.likes}</Likes>
        </Button>
        <Button>
          <Feather name="message-circle" size={20}/> 
        </Button>
      </Footer>
    </Container>
  );
}