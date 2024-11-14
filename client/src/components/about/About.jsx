import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > p {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">About Us</Typography>
                <Text variant="body1">
                    Welcome to <strong>The Hub of Ideas</strong>, your space to explore, share, and ignite conversations. 
                    This blog is dedicated to passionate writers, readers, and thinkers who are constantly looking to share knowledge, stories, and inspiration.
                </Text>
                <Text variant="body1">
                    Whether you're here for insightful articles, practical advice, or creative musings, our goal is to deliver engaging, high-quality content that resonates.
                    Dive into topics ranging from technology and lifestyle to personal growth and innovation. Join us in creating a community of thoughtful minds!
                </Text>
               
               
            </Wrapper>
        </Box>
    );
}

export default About;
