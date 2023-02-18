import { Navbar, createStyles, Text, ScrollArea } from '@mantine/core';
import data from '../model/data.json'

const useStyles = createStyles((theme) => ({
    navbar: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      paddingBottom: 0,
    },
  
    header: {
      padding: theme.spacing.md,
      paddingTop: 0,
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  
    links: {
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
    },
  
    linksInner: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },
  
    footer: {
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  }));

const Navigation = () => {
    const { classes } = useStyles();
    const getData = data.frames

    const getChildren = () => {
      return getData[0].children.map((data1: any) => {
        return (
        <div>
          <Text>{data1.dataAttributes.figmaNodeName}</Text>
        </div>
        )
    })
    }

    const parentForm = () => {
        return getData.map((data) => {
            return (
            <div>
              <Text>{data.dataAttributes.figmaNodeName}</Text>
              {getChildren()}
            </div>
            )
        })
    }

    return (
        <Navbar width={{ base: 300 }} height={500} p="xs">
            <Navbar.Section grow className={classes.links} component={ScrollArea}>
            {
              parentForm()
            }
            </Navbar.Section>
        </Navbar>
    )
}

export default Navigation