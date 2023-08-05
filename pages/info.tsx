import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { AppLayout } from '../src/components/app-layout';

function Information() {
  return (
    <>
      <Head>
        <title>
          Candidate | Preferences
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 5,
          background: "#f6f6f9"
        }}
      >
        <div className="px-6 py-2">
          <div >
            <h2 className="font-medium mb-2 px-1" style={{ textAlign: "center" }}><b>Information</b></h2>
            <h4 className="font-small mb-2 px-1">

              <b>STEPS TO FOLLOW :</b>
              <ol style={{ listStyleType: 'upper-alpha' }}>
                <li>Register Online.[Email veryfication is Important]<br /></li>
                <li>Note down your Login Id and Password.<br /></li>
                <li>Login to your account to pay fee online.<br /></li>
                <li>Download your Admit Card after form submission<br /></li>
              </ol>
            </h4>

          </div>
        </div>
        <Container maxWidth={false}></Container>
      </Box>
    </>
  )
}

Information.getLayout = (page: any) => (
  <AppLayout>
    {page}
  </AppLayout>
)

export default Information;