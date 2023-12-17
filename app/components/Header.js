"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import "./header.css";

const contacts = [{ img: "/Discord.png", alt: "disord icon", href: "https://discordapp.com/users/989012739945033769", text: "cahodev" },
{ img: "/Email.png", alt: "email icon", href: "mailto: christian.herrera.onaindi@gmail.com", text: "christian.herrera.onaindi@gmail.com" },
{ img: "/Linkedin.png", alt: "linkedin icon", href: "https://www.linkedin.com/in/cahodev/", text: "@cahodev" }
]

const drawerWidth = 240;
const navItems = [{ name: 'inicio', url: '/' }, { name: 'proyectos', url: '/work' }, { name: 'sobre-mi', url: '/about' }, { name: 'contacto', url: '/contact' }];

export default function Header(props) {
  const { window } = props;
  const path = usePathname()
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', backgroundColor: "#282C33", height: "100%", width: "100%" }}>
      <div className='flex flex-col justify-between h-[100%] py-4'>
        <div>
          <div className='flex justify-between mx-4 my-2'>
            <div className='flex gap-2 items-center'>
              <div>
                <Link href={"/"}><Image
                  src="/logo.png"
                  width={16}
                  height={16}
                  alt="logo"
                /></Link>
              </div>
              <div>
                <Link href={"/"}><h1 className='ml-3 font-bold text-white'>Christian Herrera</h1></Link>
              </div>
            </div>
            <div onClick={handleDrawerToggle}>
              <Image
                src={"/cross.png"}
                height={24}
                width={24}
                alt='cross icon'
              />
            </div>
          </div>
          <List>
            {navItems.map((item) => (
              <ListItem onClick={handleDrawerToggle} key={item?.name + "xs"} >
                <ListItemButton>
                  <Link href={item?.url}>
                    <div className='font-medium text-4xl'>
                      <div>
                        <span className='text-[#C778DD]'>#</span>
                        <span className='text-white'>{item?.name}</span>
                      </div>
                    </div>
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        <div>
          <div className="flex gap-3 items-end justify-center">
            {
              contacts?.map((item, idx) => {
                return (
                  <div key={idx + item?.href} >
                    <Link target="_blank" href={item?.href}><Image
                      src={item?.img}
                      height={32}
                      width={32}
                      alt={item?.alt}
                    />
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar elevation={0} sx={{ backgroundColor: "#282c33" }} component="nav" >
        <Toolbar className='!ml-32 !mr-20 max-sm:!ml-2 max-sm:!mr-0 max-sm:!pr-0'>
          <Box
            sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}

          >
            <div className='flex gap-2 items-center'>
              <div>
                <Link href={"/"}><Image
                  src="/logo.png"
                  width={16}
                  height={16}
                  alt="logo"
                /></Link>
              </div>
              <div>
                <Link href={"/"}><h1 className='ml-3 font-bold'>Christian Herrera</h1></Link>
              </div>
            </div>
            <div className=' md:hidden'>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <Image
                  src="/hamburger.png"
                  width={24}
                  height={24}
                  alt="hamburger"
                />
              </IconButton>
            </div>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Link href={item?.url} key={item?.name} className='mr-5' >
                <span className='text-[#C778DD]'>#</span><span className='hover:text-[#ABB2BF] relative' id={(item?.url === path) ? "underline" : ""}>{item?.name}</span>
              </Link>
            ))}
          </Box>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "100%", backgroundColor: "#282C33" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}
