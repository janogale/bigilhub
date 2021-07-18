/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

const icon1 = '/images/icons/1.png';
const icon2 = '/images/icons/2.png';
const icon3 = '/images/icons/3.png';
const icon4 = '/images/icons/4.png';
const icon5 = '/images/icons/5.png';
const icon6 = '/images/icons/6.png';

const data = [
  {
    id: 1,
    icon: icon1,
    path: "#!",
    title: "Dedicated Workspace",
    description: `Take a dedicated desk that’s reserved just for you. You can use your Business brand`,
  },
  {
    id: 2,
    icon: icon2,
    path: "#!",
    title: "High Speed Internet",
    description: `Secure, business-grade  multiple WiFi Connections`,
  },
  {
    id: 3,
    icon: icon3,
    path: "#!",
    title: "Coffee, Tea, and Snacks (paid)",
    description: `Easily order Tea, Coffee or Snacks at confort of your desk`,
  },
  {
    id: 4,
    icon: icon4,
    path: "#!",
    title: "Beautiful Inveronmnet",
    description: `Work Space designed to allow you concentrate your work and make you more productive`,
  },
  {
    id: 5,
    icon: icon5,
    path: "#!",
    title: "Access to Office Materials",
    description: `Get Office materials such us Printing, Secure Storage and IT support`,
  },
  {
    id: 6,
    icon: icon6,
    path: "#!",
    title: "Community Networking",
    description: `Regular networking and personal growth events.`,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="features" variant="section.ultimateFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Ultimate Services we offer"
          description="all you need is to focus on is your work, we take care of the rest. With flexible office size and both short and long term office commitments, there is something for everyone here Bigil Hub Coworking"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  features: {
    gap: [60, 60, 60, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, 260, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px'],
      },
      h4: {
        mb: ['15px', '15px', '20px'],
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px'],
      },
    },
  },
};
