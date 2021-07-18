/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';


// images
const workHard = '/images/work-hard.png';
const emoji = '/images/icons/emoji.png';
const check = '/images/icons/check-circle.png';

const data = [
  {
    id: 1,
    label: "Dedicated Workspace",
  },
  {
    id: 2,
    label: "High Speed Internet",
  },
  {
    id: 3,
    label: "Beautiful Inveronmnet",
  },
  {
    id: 4,
    label: "Community Networking",
  },
  {
    id: 5,
    label: "Access to Office Materials",
  },
  {
    id: 6,
    label: "Coffee, Tea, and Snacks (paid)",
  },
];

const WorkHard = () => {
  return (
    <Box as="section" variant="section.workHard">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              emoji={emoji}
              sx={styles.heading}
              title="Don’t work hard, be smart &amp; work smartly. Take a relax sit"
              description=" Bigil Hub makes your office experience exceptional. We have created
              a workspace that supports collaboration, sustains focus, and
              sparks inspiration."
            />
            <Box sx={styles.features}>
              {data?.map(({ id, label }) => (
                <Flex key={id} as="span" sx={{ alignItems: "flex-start" }}>
                  <Image src={check} alt="" />
                  <Text as="span">{label}</Text>
                </Flex>
              ))}
            </Box>
            <Box sx={styles.learnMore}>
              <LearnMore label="Explore more" path="#!" />
            </Box>
          </Box>
          <Box sx={styles.illustration}>
            <Image src={workHard} alt="workHard" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WorkHard;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 30],
    display: ['flex', null, null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'column', 'row'],
    gridTemplateColumns: ['0.9fr 1.1fr'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['none', null, null, '495px', 'auto'],
    textAlign: ['center', null, null, null, 'left'],
    mb: ['20px'],
    ml: [0],
    h2: {
      color: 'heading',
      fontSize: ['24px', '24px', null, '36px', '31px', '35px', '48px'],
      lineHeight: [1.33, 1.33, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', null, null, '30px', null, null, '100%'],
      top: ['4px', '8px'],
    },
    p: {
      maxWidth: 430,
    },
  },
  features: {
    columnCount: [1, 2],
    lineHeight: 2.81,
    ml: ['20px', 0],
    img: {
      mr: '10px',
      mt: '11px',
    },
    '+ a': {
      mt: '25px',
      ml: ['20px', 0],
    },
  },
  learnMore: {
    mt: [4],
    ml: [20, null, null, 0],
    textAlign: [null, null, null, 'center', 'left'],
  },
  illustration: {
    mb: ['50px', '50px', 0],
    mt: [0, 0, 0, '50px', 0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    img: {
      maxWidth: ['100%', null, null, '80%', '100%'],
    },
  },
};
