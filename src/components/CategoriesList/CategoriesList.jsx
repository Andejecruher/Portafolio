import { Card, Title, Text, List, ThemeIcon, Divider } from '@mantine/core';
import { IconCircle } from '@tabler/icons-react';
import PropTypes from 'prop-types';

export function CategoriesList({ categories, handleCategory }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={3} size="h5" mb="md">
        Categorías
      </Title>
      <Divider mb="sm" />
      <List
        spacing="sm"
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircle size={16} />
          </ThemeIcon>
        }
      >
        {categories &&
          categories.map((category) => (
            <List.Item
              key={category.id}
              onClick={() => handleCategory(category)}
              style={{
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                borderBottom: '1px solid #E5E7EB',
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
              }}
            >
              <Text size="sm">
                {category.name}
              </Text>
              <Text size="sm" weight={500}>
                {category.articles_count}
              </Text>
            </List.Item>
          ))}
      </List>
    </Card>
  );
};

CategoriesList.propTypes = {
  categories: PropTypes.array,
  handleCategory: PropTypes.func,
};

