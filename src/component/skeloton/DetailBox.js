import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';
import { useSelector } from 'react-redux';
import { getSuggetionsList } from "../../service/loginSlice";
import LandingPage from "../../view/landingPage/LandingPage.js";

export default function DetailBox() {
  const suggestions = useSelector(getSuggetionsList);
  const member = suggestions.length > 0 ? suggestions[0] : {}; 
  console.log(member,"member");
  console.log(suggestions.length,"suggestions.length");
  console.log(member.fullname);
  console.log(member.name);
  console.log(member.lastname);
  console.log(member.phone);
  console.log(member.address);
  console.log(member.email);
  console.log(member.img);
  console.log(member.id);
  console.log(member.serviceId);

  return (
    <Stack spacing={1} useFlexGap>
      <Card>
        <CardContent orientation="horizontal">
          <Skeleton animation="wave" variant="circular" width={48} height={48} />
          <div>
            {member.fullname ? (
              <Typography variant="h6" sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' } }}>
                {member.fullname}
              </Typography>
            ) : (
              <Skeleton animation="wave" variant="text" sx={{ width: "120vw" }} />
            )}
            <Stack direction="row" spacing={2}>
              {member.phone ? (
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' } }}>
                  {member.phone}
                </Typography>
              ) : (
                <Skeleton animation="wave" variant="text" sx={{ width: "150vw", fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' } }} />
              )}
              {member.email ? (
                <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' } }}>
                  {member.email}
                </Typography>
              ) : (
                <Skeleton animation="wave" variant="text" sx={{ width: "150vw", fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' } }} />
              )}

            </Stack>
        </div>
        </CardContent>
        <AspectRatio ratio="21/6">
        <LandingPage />
      {    /*<Skeleton animation="wave" variant="overlay">
          </Skeleton>*/}
        </AspectRatio>
        <Typography 
          sx={{ 
            fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' },
            overflow: 'hidden'
          }}
        >
          {member.address || (
            <Skeleton animation="wave" variant="text" sx={{ width: "150vw", fontSize: { xs: '0.8rem', sm: '1rem', md: '1.2rem' } }} />
          )}
        </Typography>
        <Button>
          Read more
        </Button>
      </Card>
    </Stack>
  );
}
