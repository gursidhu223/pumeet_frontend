import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import { GraphIcon } from '../icons/graph';
import { FileIcon } from '../icons/file';
import { BatchIcon } from '../icons/batch';
import { AppLogo } from '../icons/app-logo';
import { NavItem } from './nav-item';
import { getCandidates } from '../services/staff/candidates.js';
import { type } from 'os';
import CandidateDetailPage from '../../pages/staff/candidate/[candidate_id]';

const items = [
  {
    href: '/profile',
    icon: (<GraphIcon fontSize="small" />),
    title: 'Your Profile'
  },
  {
    href: '/info',
    icon: (<FileIcon fontSize="small" />),
    title: 'Information'
  },
  {
    href: '/preferences',
    icon: (<FileIcon fontSize="small" />),
    title: 'Preferences'
  },
  {
    href: '/staff',
    icon: (<BatchIcon fontSize="small" />),
    title: 'Staff'
  },
  {
    href: '/staff/allotment/',
    icon: (<FileIcon fontSize="small" />),
    title: 'Allotment'
  },
];

export const AppSidebar = (props) => {
  const { open, onClose } = props;
  const [profile, setProfile] = useState("Teacher");
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  useEffect(() => {
      getCandidatesHandler();
      if (open) {
        onClose();
      }
    },[router?.asPath]);

    const getCandidatesHandler = async () => {
      const res = await getCandidates();
      if(res.error){
        setProfile("Student");
      }
    }  

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box
            sx={{
              height: '74px',
              px: 3,
              display: 'flex',
              alignItems: 'center',
            }}>
              <img
                src="/static/images/pu-logo.png"
                width="62"
              />
            <h2 style={{
              "color": "#566474",
              "lineHeight": "30px",
              "fontSize": "22px",
              "paddingLeft": "10px",
              "fontWeight": "500"
            }}>Panjab University</h2>
            </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#EBF0F5',
            mb: 4
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.filter((item,key) => {
            if(profile === "Student"){
              if(item.title === "Preferences" || item.title === "Your Profile" || item.title === "Information") return true;
              else return false;
            }else{
              if(item.title === "Preferences" || item.title === "Your Profile") return false;
              return true;
            }
          }).map((item, key) => (
            <NavItem
              key={key}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        PaperProps={{
          sx: {
            backgroundColor: '#fff',
            color: '#FFFFFF',
            width: 280,
            zIndex: (theme) => theme.zIndex.appBar - 100 
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#fff',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};
