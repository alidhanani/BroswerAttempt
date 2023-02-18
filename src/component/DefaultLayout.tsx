import { AppShell, Header} from '@mantine/core';
import Home from '../view/Home';
import Navigation from './Navbar';


const DefaultLayout = () => {

  return (
    <AppShell
      padding="md"
      layout="alt"
      navbar={<Navigation />}
      header={<Header height={60} p="xs">{'Weave'}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Home />
    </AppShell>
  );
};

export default DefaultLayout;
