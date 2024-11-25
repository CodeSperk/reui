import { Box, Button, Stack, Typography } from '@mui/material'
import shadows from '@mui/material/styles/shadows'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Stack 
      justifyContent={"center"}
      alignItems={"center"}
      gap={6}
      height={"100vh"}
      sx={{
      background: "linear-gradient(135deg, #0C0D1F, #1A1B3A,  #0C0D1F)", color: "white",
      p: 2
    }}>

      <Box sx={{margin: "0 auto", textAlign: "center", borderRadius: "20px"}}>
        <Image  alt='logo' src="/logoWithBG.webp" width={200} height={100}/>
      </Box>
       

      <Typography maxWidth={"520px"} textAlign={"center"} variant='h4' color='#ffffff'>A precise React components, for refined interfaces and smooth development workflows.</Typography>

      <Stack direction={"row"} gap={2}>
        <Link href="/components"><Button sx={{bgcolor: "transparent"}}
          >Components</Button></Link>
        <Button sx={{bgcolor: "transparent"}}>Micro Projects</Button>
      </Stack>


    </Stack>
  )
}
