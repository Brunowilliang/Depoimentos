import React from 'react';
import { useTheme } from 'styled-components';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/pt-br';

import { 
  Container,
  Header,
  Profile,
  Avatar,
  Image,
  Info,
  Title,
  Views,
  Actions,
  Button,
  ButtonAction,
  Days,
  Description,
  Footer,
  Likes,
  Comments,
  AvatarComment,
  Comment,
  ImageComment,
  Name,
  Message,
} from './styles';

interface DepoimentsProps {
  id: string;
  name: string;
  description: string;
  views: number;
  likes: number;
  avatar: string;
  created_at: number;
  avatarComment: string;
  nameComment: string;
  comment: string;
}


interface RouteParams {
  providerId: string;
  data: DepoimentsProps;
}


export function Details(){
  const theme = useTheme();
  const route = useRoute();
  const routeParams = route.params as RouteParams;

  return (
    <Container>
      <Header>
        <Profile>
          <Avatar>
            <Image source={{uri: `${routeParams.data.avatar}`}}/>
          </Avatar>
          <Info>
            <Title>{routeParams.data.name}</Title>
            <Views>{routeParams.data.views} visualizações</Views>
          </Info>
        </Profile>
        <Actions>
          <ButtonAction>
            <Ionicons name="ellipsis-horizontal-sharp" size={20}/> 
          </ButtonAction>
          <Days>{moment(`${routeParams.data.created_at}`).fromNow()}</Days>
        </Actions>
      </Header>
      <Description>
        {routeParams.data.description}
      </Description>
      <Footer>
        <Button>
          <Ionicons name="heart-outline" size={20} color={theme.colors.secondary}/> 
          <Likes>{routeParams.data.likes}</Likes>
        </Button>
        <Button>
          <Feather name="message-circle" size={20}/> 
        </Button>
      </Footer>
      <Comments>
        <AvatarComment>
          <ImageComment source={{uri: `${routeParams.data.avatarComment}`}}/>
        </AvatarComment>
        <Comment>
          <Name>{routeParams.data.nameComment}</Name>
          <Message>{routeParams.data.comment}</Message>
        </Comment>

      </Comments>
    </Container>
  );
}