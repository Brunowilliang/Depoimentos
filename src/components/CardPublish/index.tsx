import React from 'react';

import { Container, Avatar, Image, Content, Input, Wrapper, ActionButtons, Button, Icon, ButtonPublish, Title, Line } from './styles';
import UserImage from '../../assets/user.png'

export function CardPublish(){
  return (
    <>
    <Container>
      <Avatar>
        <Image source={UserImage} />
      </Avatar>

      <Content>
        <Input
          placeholder="No que você está pensando, Marta?"
          multiline={true}
          numberOfLines={2}
        />

        <Wrapper>
          <ActionButtons>
          <Button>
            <Icon name="video"/>
          </Button>
          <Button>
            <Icon name="camera"/>
          </Button>
          <Button>
            <Icon name="smile"/> 
          </Button>
          </ActionButtons>

          <ButtonPublish>
            <Title>Postar</Title>
          </ButtonPublish>

        </Wrapper>
      </Content>
    </Container>
    <Line />
    </>
  );
}