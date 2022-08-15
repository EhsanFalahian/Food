import React from 'react';
import Container from '../../core/components/Container';

import Button from '../../core/components/Button';
import palette from '../../core/styles/palette';
import UnStyledButton from '../../core/components/UnStyledButton';
import Text from '../../core/components/Text';
import Card from '../../core/components/Card';
const Profile = () => {
  return (
    <Container>
      <Text>fsfc</Text>
      <Button title={'ddcd'} color={palette.border}></Button>
      <Card
        borderRadius={10}
        backgroundColor={palette.background}
        width={'10%'}>
        <Text>mdov</Text>
      </Card>
      <UnStyledButton px={20}>
        <Text>descf</Text>
      </UnStyledButton>
    </Container>
  );
};

export default Profile;
