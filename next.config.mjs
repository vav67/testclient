/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        //   domains:['res.cloudinary.com','randomuser.me'],
        remotePatterns: [
         {
           protocol: 'https',
           hostname: 'res.cloudinary.com',
           pathname: '**',
         },
          
           {
             protocol: 'https',
             hostname: 'randomuser.me',
             pathname: '**',
           },
           
           {
             protocol: 'https',
             hostname: 'lmsserver-eta.vercel.app',
             pathname: '**',
           },     
       ],
         },




};

export default nextConfig;
