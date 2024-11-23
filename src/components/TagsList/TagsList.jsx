import { Card, Title, Button, Group, Divider } from '@mantine/core';
import PropTypes from 'prop-types';

export function TagsList({ tags, handleTag }) {
  return (
    <Card shadow="sm" withBorder>
      <Title order={3} size="h3" mb="md">
        Tags
      </Title>
      <Divider mb="sm" />
      <Group spacing="xs" wrap="wrap">
        {tags &&
          tags.map((tag, index) => (
            <Button key={index} style={{
              backgroundColor: tag.color,
              color: tag.color === '#ffffff' ? '#000000' : '#ffffff',
            }} variant="outline"
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
