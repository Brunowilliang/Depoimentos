import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { CardPublish } from '../../components/CardPublish';
import { Card } from '../../components/Card';

import { Container, Content, Loading } from './styles';
import { useDepoiments } from '../../Context/Depoiments';

export interface DepoimentsProps {
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


export function Depoiments(){
  // const { depoiments, setDepoiments } = useDepoiments();

  const [depoiments, setDepoiments] = useState<DepoimentsProps[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    api.get('/depoiments').then((response) => {
      const data = response.data;
    setDepoiments([ ...data ]);
    setLoading(false);
  })
  }, []) 

  if(loading){
    return(
      <Container>
        <Loading />
      </Container>
    )
  };

  return (
    <Container>
      <Content>
        <CardPublish />

        {depoiments.map((data) => (
          <Card key={data.id} data={data} />
        ))}

      </Content>

    </Container>
  );
}