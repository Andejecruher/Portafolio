import { Card, Title, Button, Group, Divider } from '@mantine/core';
import PropTypes from 'prop-types';

export function TagsList({ tags, handleTag }) {
  return (
    <Card shadow="sm" withBorder style={{ padding: '20px' }}>
      <Title order={3} size="h3" mb="md" style={{ fontSize: '1.5rem', textAlign: 'left' }}>
        Tags
      </Title>
      <Divider mb="sm" style={{ marginBottom: '16px', borderColor: '#ddd' }} />
      <Group spacing="xs" wrap="wrap" style={{ justifyContent: 'center' }}>
        {tags &&
          tags.map((tag, index) => (
            <Button
              key={index}
              style={{
                backgroundColor: tag.color,
                color: tag.color === '#ffffff' ? '#000000' : '#ffffff',
                padding: '8px 16px',
                fontWeight: 'bold',
              }}
              variant="outline"
              onClick={() => handleTag(tag)}
            >
              {tag.name}
            </Button>
          ))}
      </Group>
    </Card>
  );
};

TagsList.propTypes = {
  tags: PropTypes.array,
  handleTag: PropTypes.func,
};
